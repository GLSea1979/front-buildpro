'use strict';

require('./_navbar.scss');

module.exports = {
  template: require('./navbar.html'),
  controller: ['$log', '$location', '$rootScope', 'authService', 'routeService', NavbarController],
  controllerAs: 'navbarCtrl',
};

function NavbarController($log, $location, $rootScope, authService, routeService) {
  $log.debug('inside NavbarController');
};
