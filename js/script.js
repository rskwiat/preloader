$(window).load(function() {
  $('#preloader').fadeOut(1000, function() {
    $('body').css('overflow','visible');
    $(this).remove();
  });
});