$('#hamburger').on("click", function() {

    $('.main-nav').toggle();
    $('.menu-top').toggleClass('menu-top-click');
    $('.menu-middle').toggleClass('menu-middle-click');
    $('.menu-bottom').toggleClass('menu-bottom-click');

if(document.getElementById('footer-wrap').style.visibility=="hidden")
{
document.getElementById('footer-wrap').style.visibility="visible";
}
else
{
document.getElementById('footer-wrap').style.visibility="hidden";
}

});

