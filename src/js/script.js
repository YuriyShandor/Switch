$(document).ready(function() {
  $('.header-nav__toggler-icon').on('click', function() {
    if ( $(window).width() < 992) {
      $(this).toggleClass('_close');
      $('.header-nav-bar').slideToggle('0.5s');
    }
  });
});
