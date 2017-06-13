'use strict';

require('./_signin.scss');

module.exports = {
  template: require('./signin.html'),
  controller: ['$log', '$location', 'authService', SigninController],
  controllerAs: 'signinCtrl'
};

function SigninController($log, $location, authService) {
  $log.debug('SigninController');
  this.serverError = false;

  this.signin = function() {
    $log.debug('signinCtrl.signin');
    authService.signin(this.user)
    .then( () => {
      $location.url('/home');
    })
    .catch( err => {
      $log.error('here is an error:', err);
      this.serverError = true;
    });
  };
}
