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

  function removeTime(date) {
    return date.day(0).hour(0).minute(0).second(0).millisecond(0);
  }

  function buildMonth(selectedDay, start, month) {
    selectedDay.weeks = [];
    let done = false, date = start.clone()
  }
}
