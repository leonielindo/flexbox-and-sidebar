/*
  code for sidebar
*/
$(function() {
  $('#sidebar-trigger').click(function(event) {
    event.preventDefault();
    $('.sidebar' ).toggleClass('sidebar-active');
  });

});
