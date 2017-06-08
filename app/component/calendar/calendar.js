'use strict';

require('./_calendar.scss');

module.exports = {
  template: require('./calendar.html'),
  controller: ['$log', 'calendarService', calendarController],
  controllerAs: 'calendarCtrl',
  bindings: {
    selectedDay: '<'
  }
};

function calendarController($log, calenderService) {
  $log.debug('calendarController');

  
}
