var $hospitalList = $('#hospital-list-all');

$hospitalList.tablesorter({
  sortList: [[1, 0]],
  widthFixed : false,
  widgets: ['filter'],
});
