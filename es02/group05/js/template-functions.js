// load the interactions only when the document is ready
$(document).ready(function () {
    $('.menu-btn').click(function () {
        $(this).children('.menu-svg').toggleClass('scaled');
        $(this).children('.menu-svg').toggleClass('icon-visible');
        $('.sidebar').toggleClass('nav-closed nav-open');
    });

    // 0. Roadmap toggle

    $('#toggle1').hide();
    $('#back1').hover(function () {
        $('#toggle1').show();
    });

    $('#toggle2').hide();
    $('#back2').hover(function () {
        $('#toggle2').show();
    });

    $('#sottosotto').hover(function () {
        $('#toggle2').hide();
        $('#toggle1').hide();
    });

    // 6.2 AR Map

    $('.edges').hide();
    $('.elements').hover(function () {
        $('.edges').toggle('fast');
    });

    // 2.1 Wiki network

    $('#free-small').hide();
    $('#freeusa-small').hide();
    $('#hate-small').hide();
    $('#free-big').hide();
    $('#hate-big').hide();
    $('#c1').hide();
    $('#c2').hide();
    $('#c3').hide();
    $('#c4').hide();
    //    $('#edges').css( "opacity", .8);


    $('#freesmall-alvvays').hover(function () {
        $('#free-small').toggle('fast');        
    });

    $('#hatesmall-alvvays').hover(function () {
        $('#hate-small').toggle('fast');
    });

    $('#freeusasmall-alvvays').hover(function () {
        $('#freeusa-small').toggle('fast');
    });

    $('#hatebig-alvvays').hover(function () {
        $('#hate-big').toggle('fast');
        $('#hatesmall-alvvays').fadeTo("fast", 0.5);
    });

    $('#freebig-alvvays').hover(function () {
        $('#free-big').toggle('fast');
        $('#freesmall-alvvays').fadeTo("fast", 0.5);
        $('#freeusasmall-alvvays').fadeTo("fast", 0.5);
    });

    $('#freeleg-alvvays').hover(function () {
        $('#free-big').toggle('fast');
        $('#freesmall-alvvays').fadeTo("fast", 0.5);
        $('#freeusasmall-alvvays').fadeTo("fast", 0.5);
        $('#hatesmall-alvvays').fadeTo("fast", 0.5);
        $('#hatebig-alvvays').fadeTo("fast", 0.5);
        $('.common').toggle('fast');
    });

    $('#hateleg-alvvays').hover(function () {
        $('#hate-big').toggle('fast');
        $('#hatesmall-alvvays').fadeTo("fast", 0.5);
        $('#freesmall-alvvays').fadeTo("fast", 0.5);
        $('#freeusasmall-alvvays').fadeTo("fast", 0.5);
        $('#freebig-alvvays').fadeTo("fast", 0.5);
        $('.common').toggle('fast');
    });

    $('#common-alvvays').hover(function () {
        $('#c1').show('fast');
        $('#c2').show('fast');
        $('#c3').show('fast');
        $('#c4').show('fast');
        $('.common').hide('fast');
        $('#edges').hide('fast');
        $('#hatesmall-alvvays').fadeTo("fast", 0.5);
        $('#freesmall-alvvays').fadeTo("fast", 0.5);
        $('#freeusasmall-alvvays').fadeTo("fast", 0.5);                    
    });




    $('#invisible').hover(function () {
        $('.common').show('fast');
        $('#edges').show('fast');
        $('#c1').hide('fast');
        $('#c2').hide('fast');
        $('#c3').hide('fast');
        $('#c4').hide('fast');
        $('#freesmall-alvvays').fadeTo(0.1, 1);
        $('#freeusasmall-alvvays').fadeTo(0.1, 1);
        $('#hatesmall-alvvays').fadeTo(0.1, 1);
        $('#hatebig-alvvays').fadeTo(0.1, 1);
        $('#freebig-alvvays').fadeTo(0.1, 1);
    });

    $('#c1-orig').hover(function () {
        $('.common').hide('fast');
        $('#c1').show('fast');
        $('#edges').hide('fast');
    });

    $('#c2-orig').hover(function () {
        $('.common').hide('fast');
        $('#c2').show('fast');
        $('#edges').hide('fast');
    });

    $('#c3-orig').hover(function () {
        $('.common').hide('fast');
        $('#c3').show('fast');
        $('#edges').hide('fast');
    });

    $('#c4-orig').hover(function () {
        $('.common').hide('fast');
        $('#c4').show('fast');
        $('#edges').hide('fast');
    });





});
