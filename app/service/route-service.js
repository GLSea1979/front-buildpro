'use strict';

module.exports = ['$log', routeService];

function routeService($log) {
  $log.debug('routeService');

  let service = {
    routes: [
      {
        name: 'employee',
        url: '/#!/home',
        admin: false
      },
      {
        name: 'timecard',
        url: '/#!/timecard',
        admin: false
      },
      {
        name: 'admin',
        url: '/#!/admin',
        admin: true
      },
      {
        name: 'about',
        url: '/#!/about',
        admin: false
      }
    ],
    icons: [
      {
        val: 'github',
        url: 'https://github.com/GLSea1979/front-buildpro',
        desc: 'check out the project on my github'
      },
      {
        val: 'about',
        url: '/#!/about',
        desc: 'about me'
      }
    ]
  };
  return service;
}
