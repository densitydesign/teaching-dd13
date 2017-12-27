// load the interactions only when the document is ready
$(document).ready(function() {
    $('.menu-btn').click(function(){
        $(this).children('.menu-svg').toggleClass('scaled');
        $(this).children('.menu-svg').toggleClass('icon-visible');
        $('.sidebar').toggleClass('nav-closed nav-open');
    });
});
