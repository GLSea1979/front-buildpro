'use strict';

require('./_landing.scss');

module.exports = ['$log', '$location', '$rootScope', LandingController];

function LandingController($log, $location) {
  $log.debug('LandingController');

  this.signInFirst = true;

  if(this.signInFirst == false) {
    $location.url('/join#signin');
  }
}
