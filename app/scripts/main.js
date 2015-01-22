/* global pym */
var $hospitalList = $('#hospital-list-all');

$(function(){
  'use strict';
  $hospitalList.tablesorter({
    widthFixed : true,
    widgets: ['filter', 'stickyHeaders'],
    widgetOptions : {
      // use the filter_external option OR use bindSearch function (below)
      // to bind external filters.
      filter_external : '.table-search',
      filter_columnFilters: false,
      filter_saveFilters : true,
      filter_reset: '.reset',
      stickyHeaders_attachTo : '.table-wrapper'
    }
  })
  .on('filterReset', function(){
      pymChild.sendMessage('height', '' + document.body.scrollHeight);
  })
  .on('search', function(){
      pymChild.sendMessage('height', '' + document.body.scrollHeight);
      console.log('hi');
  });
  $('.reset').on('click', function(){
    pymChild.sendMessage('height', '' + document.body.scrollHeight);
  });
  $(window).load(function() {
    pymChild.sendMessage('height', '' + document.body.scrollHeight);
  });
  var pymChild = new pym.Child();
});
