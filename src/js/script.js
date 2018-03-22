$(document).ready(function() {
  $('.header-nav__toggler-icon').on('click', function() {
    $(this).toggleClass('_close');
    $('.header-nav-bar').slideToggle('0.5s');
  });
});
