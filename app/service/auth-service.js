'use strict';

module.exports = ['$log', '$q', '$http', '$window', authService];

function authService($log, $q, $http, $window) {
  $log.debug('authService');

  let service = {};
  let token = null;

  function setToken(_token) {
    $log.debug('authService.setToken');

    if(! _token) {
      return $q.reject(new Error('no token'));
    }

    $window.localStorage.setItem('token', _token);
    token = _token;
    return $q.resolve(token);
  }

  service.getToken = function() {
    $log.debug('authService.getToken');
    if(token) {
      return $q.resolve(token);
    }

    token = $window.localStorage.getItem('token');
    if(token) return $q.resolve(token);
    return $q.reject(new Error('token not found'));
  };

  service.signup = function(user) {
    $log.debug('authService.signup');

    let url = `${__API_URL__}/api/signup`;
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };
    return $http.post(url, user, config)
    .then( res => {
      $window.localStorage.setItem('userID', res.data.userID);
      $window.localStorage.setItem('email', res.date.email);
      return setToken(res.data.token);
    })
    .catch( err => {
      $log.error('failed:', err.message);
      return $q.reject(err);
    });
  };

  service.logout = function() {
    $log.debug('authService.logout');

    $window.localStorage.removeItem('token');
    $window.localStorage.removeItem('userID');
    token = null;
    return $q.resolve();
  };

  service.signin = function(user) {
    $log.debug('authService.signin');
    let url = `${__API_URL__}/api/signin`;
    let base64 = $window.btoa(`${user.username}:${user.password}`);
    let config = {
      headers: {
        Accept: 'application/json',
        Authorization: `Basic ${base64}`
      }
    };

    return $http.get(url, config)
    .then( res => {
      $window.localStorage.setItem('userID', res.data.userID);
      $window.localStorage.setItem('email', res.data.email);
      return setToken(res.data.token);
    })
    .catch( err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };
  return service;
}
