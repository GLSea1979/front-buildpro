'use strict';

require('./_signup.scss');

module.exports ={
  template: require('./signup.html'),
  controller: ['$log', '$location', 'authService', SignupController],
  controllerAs: 'singupCtrl'
};

function SignupController($log, $location, authService) {
  $log.debug('SignupController');
  this.serverError = false;

  authService.getToken()
  .then( () => {
    $location.url('/home');
  })
  .catch( err => {
    $log.error(err.message);
  });

  this.signup = function(user) {
    $log.debug('signupCtrl.signup');

    authService.signup(user)
    .then( () => {
      $location.url('/home');
    })
    .catch( err => {
      $log.error(err);
      this.serverError = true;
    });
  };
};
