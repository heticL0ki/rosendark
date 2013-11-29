$(document).ready(function() {
    
  $('#footer-wrap').hide();
  
  $('#hamburger').on("click", function() {
    $('.main-nav').toggle();
    $('.menu-top').toggleClass('menu-top-click');
    $('.menu-middle').toggleClass('menu-middle-click');
    $('.menu-bottom').toggleClass('menu-bottom-click');

    $('#footer-wrap').slideToggle(400);
    });  
});