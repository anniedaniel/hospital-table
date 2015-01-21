/* global pym */

var pymChild = new pym.Child();

var $hospitalList = $('#hospital-list-all');

$(function(){
  'use strict';
  $hospitalList.tablesorter({
    sortList: [[1, 0]],
    widgets: ['filter'],
    widgetOptions : {
      // use the filter_external option OR use bindSearch function (below)
      // to bind external filters.
      // filter_external : '.search',

      filter_columnFilters: false,
      filter_saveFilters : true,
      filter_reset: '.reset'
    }
  });

  $.tablesorter.filter.bindSearch( $hospitalList, $('.table-search') );

  $(window).load(function() {
    pymChild.sendMessage('height', '' + document.body.scrollHeight);
  });
});
