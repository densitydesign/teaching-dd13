(function ($) {"use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

 })(jQuery);

//animazione Mappa Intro//

$("#korea-mappabig").hover(function () {
    $("#quandohoveri-mappabig").css('opacity',1);
}, function () {
    $("#quandohoveri-mappabig").css('opacity',0);
});

//Bump WBD//
//fade in for bilat//

$("#china-bil").hover(function () {
    $("#china-bil").addClass("color-change");
        $("#fadechi, #fadechi1").css('opacity', 1);
}, function () {
    $("#china-bil").removeClass("color-change");
    $("#fadechi, #fadechi1").css('opacity', 0);
});

$("#brazil-bil").hover(function () {
    $("#brazil-bil").addClass("color-change");
        $("#fadebra, #fadebra1").css('opacity', 1);
}, function () {
    $("#brazil-bil").removeClass("color-change");
    $("#fadebra, #fadebra1").css('opacity', 0);
});

$("#germany-bil").hover(function () {
    $("#germany-bil").addClass("color-change");
        $("#fadegerm, #fadegerm1").css('opacity', 1);
}, function () {
    $("#germany-bil").removeClass("color-change");
    $("#fadegerm, #fadegerm1").css('opacity', 0);
});

$("#usa-bil").hover(function () {
    $("#usa-bil").addClass("color-change");
        $("#fadeusa, #fadeusa1").css('opacity', 1);
}, function () {
    $("#usa-bil").removeClass("color-change");
    $("#fadeusa, #fadeusa1").css('opacity', 0);
});

$("#india-bil").hover(function () {
    $("#india-bil").addClass("color-change");
        $("#fadeind, #fadeind1").css('opacity', 1);
}, function () {
    $("#india-bil").removeClass("color-change");
    $("#fadeind, #fadeind1").css('opacity', 0);
});

$("#argentina-bil").hover(function () {
    $("#argentina-bil").addClass("color-change");
        $("#fadearg, #fadearg1").css('opacity', 1);
}, function () {
    $("#argentina-bil").removeClass("color-change");
    $("#fadearg, #fadearg1").css('opacity', 0);
});

$("#others-bil").hover(function () {
    $("#others-bil").addClass("color-change");
        $("#fadeoth, #fadeoth1").css('opacity', 1);
}, function () {
    $("#others-bil").removeClass("color-change");
    $("#fadeoth, #fadeoth1").css('opacity', 0);
});


$("#southk-bil").hover(function () {
    $("#southk-bil").addClass("color-change");
        $("#fadekorearep, #fadekorearep1").css('opacity', 1);
}, function () {
    $("#southk-bil").removeClass("color-change");
    $("#fadekorearep, #fadekorearep1").css('opacity', 0);
});

$("#nodata-bil").hover(function () {
    $("#nodata-bil").addClass("color-change");
        $("#nodt, #nodt1").css('opacity', 1);
}, function () {
    $("#nodata-bil").removeClass("color-change");
    $("#nodt, #nodt1").css('opacity', 0);
});

//animazione Mappa NK/SK//


$("#changan-illu, #changan-text, #changan-num").hover(function () {
    $("#changan-illu").addClass('color-changeOP');
    $("#changan-text").addClass('color-change');
    $("#changan-num").addClass('color-change');
}, function () {
    $("#changan-illu").removeClass('color-changeOP');
    $("#changan-text").removeClass('color-change');
    $("#changan-num").removeClass('color-change');
});

$("#northhamgy-illu, #northhamgy-text, #northhamgy-num").hover(function () {
    $("#northhamgy-illu").addClass('color-changeOP');
    $("#northhamgy-text").addClass('color-change');
    $("#northhamgy-num").addClass('color-change');
}, function () {
    $("#northhamgy-illu").removeClass('color-changeOP');
    $("#northhamgy-text").removeClass('color-change');
    $("#northhamgy-num").removeClass('color-change');
});

$("#southhamgy-illu, #southhamgy-text, #southhamgy-num").hover(function () {
    $("#southhamgy-illu").addClass('color-changeOP');
    $("#southhamgy-text").addClass('color-change');
    $("#southhamgy-num").addClass('color-change');
}, function () {
    $("#southhamgy-illu").removeClass('color-changeOP');
    $("#southhamgy-text").removeClass('color-change');
    $("#southhamgy-num").removeClass('color-change');
});

$("#northhwang-illu, #northhwang-text, #northhwang-num").hover(function () {
    $("#northhwang-illu").addClass('color-changeOP');
    $("#northhwang-text").addClass('color-change');
    $("#northhwang-num").addClass('color-change');
}, function () {
    $("#northhwang-illu").removeClass('color-changeOP');
    $("#northhwang-text").removeClass('color-change');
    $("#northhwang-num").removeClass('color-change');
});

$("#southhwang-illu, #southhwang-text, #southhwang-num").hover(function () {
    $("#southhwang-illu").addClass('color-changeOP');
    $("#southhwang-text").addClass('color-change');
    $("#southhwang-num").addClass('color-change');
    $("#pendice-map").addClass('color-change');
}, function () {
    $("#southhwang-illu").removeClass('color-changeOP');
    $("#southhwang-text").removeClass('color-change');
    $("#southhwang-num").removeClass('color-change');
    $("#pendice-map").removeClass('color-change');
});

$("#kangw-illu, #kangw-text, #kangw-num").hover(function () {
    $("#kangw-illu").addClass('color-changeOP');
    $("#kangw-text").addClass('color-change');
    $("#kangw-num").addClass('color-change');
}, function () {
    $("#kangw-illu").removeClass('color-changeOP');
    $("#kangw-text").removeClass('color-change');
    $("#kangw-num").removeClass('color-change');
});

$("#southpyong-illu, #southpyong-text, #southpyong-num").hover(function () {
    $("#southpyong-illu").addClass('color-changeOP');
    $("#southpyong-text").addClass('color-change');
    $("#southpyong-num").addClass('color-change');
    $("#pendice-map").addClass('color-change');
}, function () {
    $("#southpyong-illu").removeClass('color-changeOP');
    $("#southpyong-text").removeClass('color-change');
    $("#southpyong-num").removeClass('color-change');
    $("#pendice-map").removeClass('color-change');
});

$("#northpyong-illu, #northpyong-text, #northpyong-num").hover(function () {
    $("#northpyong-illu").addClass('color-changeOP');
    $("#northpyong-text").addClass('color-change');
    $("#northpyong-num").addClass('color-change');
}, function () {
    $("#northpyong-illu").removeClass('color-changeOP');
    $("#northpyong-text").removeClass('color-change');
    $("#northpyong-num").removeClass('color-change');
});

$("#ryanggang-illu, #ryanggang-text, #ryanggang-num").hover(function () {
    $("#ryanggang-illu").addClass('color-changeOP');
    $("#ryanggang-text").addClass('color-change');
    $("#ryanggang-num").addClass('color-change');
}, function () {
    $("#ryanggang-illu").removeClass('color-changeOP');
    $("#ryanggang-text").removeClass('color-change');
    $("#ryanggang-num").removeClass('color-change');
});

//SK//

$("#seoul-illu, #seoul-text, #seoul-num").hover(function () {
    $("#seoul-illu").addClass('color-changeOP');
    $("#seoul-text").addClass('color-change');
    $("#seoul-num").addClass('color-change');
}, function () {
    $("#seoul-illu").removeClass('color-changeOP');
    $("#seoul-text").removeClass('color-change');
    $("#seoul-num").removeClass('color-change');
});

$("#northchung-illu, #northchung-text, #northchung-num").hover(function () {
    $("#northchung-illu").addClass('color-changeOP');
    $("#northchung-text").addClass('color-change');
    $("#northchung-num").addClass('color-change');
}, function () {
    $("#northchung-illu").removeClass('color-changeOP');
    $("#northchung-text").removeClass('color-change');
    $("#northchung-num").removeClass('color-change');
});

$("#southchung-illu, #southchung-text, #southchung-num").hover(function () {
    $("#southchung-illu").addClass('color-changeOP');
    $("#southchung-text").addClass('color-change');
    $("#southchung-num").addClass('color-change');
}, function () {
    $("#southchung-illu").removeClass('color-changeOP');
    $("#southchung-text").removeClass('color-change');
    $("#southchung-num").removeClass('color-change');
});

$("#gangwon-illu, #gangwon-text, #gangwon-num").hover(function () {
    $("#gangwon-illu").addClass('color-changeOP');
    $("#gangwon-text").addClass('color-change');
    $("#gangwon-num").addClass('color-change');
}, function () {
    $("#gangwon-illu").removeClass('color-changeOP');
    $("#gangwon-text").removeClass('color-change');
    $("#gangwon-num").removeClass('color-change');
});

$("#gyeonggi-illu, #gyeonggi-text, #gyeonggi-num").hover(function () {
    $("#gyeonggi-illu").addClass('color-changeOP');
    $("#gyeonggi-text").addClass('color-change');
    $("#gyeonggi-num").addClass('color-change');
}, function () {
    $("#gyeonggi-illu").removeClass('color-changeOP');
    $("#gyeonggi-text").removeClass('color-change');
    $("#gyeonggi-num").removeClass('color-change');
});

$("#northgyeongsang-illu, #northgyeongsang-text, #northgyeongsang-num").hover(function () {
    $("#northgyeongsang-illu").addClass('color-changeOP');
    $("#northgyeongsang-text").addClass('color-change');
    $("#northgyeongsang-num").addClass('color-change');
}, function () {
    $("#northgyeongsang-illu").removeClass('color-changeOP');
    $("#northgyeongsang-text").removeClass('color-change');
    $("#northgyeongsang-num").removeClass('color-change');
});

$("#southgyeong-illu, #southgyeong-text, #southgyeong-num").hover(function () {
    $("#southgyeong-illu").addClass('color-changeOP');
    $("#southgyeong-text").addClass('color-change');
    $("#southgyeong-num").addClass('color-change');
}, function () {
    $("#southgyeong-illu").removeClass('color-changeOP');
    $("#southgyeong-text").removeClass('color-change');
    $("#southgyeong-num").removeClass('color-change');
});

$("#northjeolla-illu, #northjeolla-text, #northjeolla-num").hover(function () {
    $("#northjeolla-illu").addClass('color-changeOP');
    $("#northjeolla-text").addClass('color-change');
    $("#northjeolla-num").addClass('color-change');
}, function () {
    $("#northjeolla-illu").removeClass('color-changeOP');
    $("#northjeolla-text").removeClass('color-change');
    $("#northjeolla-num").removeClass('color-change');
});


$("#southjeolla-illu, #southjeolla-text, #southjeolla-num").hover(function () {
    $("#southjeolla-illu").addClass('color-changeOP');
    $("#southjeolla-text").addClass('color-change');
    $("#southjeolla-num").addClass('color-change');
}, function () {
    $("#southjeolla-illu").removeClass('color-changeOP');
    $("#southjeolla-text").removeClass('color-change');
    $("#southjeolla-num").removeClass('color-change');
});

$("#jeju-illu, #jeju-text, #jeju-num").hover(function () {
    $("#jeju-illu").addClass('color-changeOP');
    $("#jeju-text").addClass('color-change');
    $("#jeju-num").addClass('color-change');
}, function () {
    $("#jeju-illu").removeClass('color-changeOP');
    $("#jeju-text").removeClass('color-change');
    $("#jeju-num").removeClass('color-change');
});

$("#busan-illu, #busan-text, #busan-num").hover(function () {
    $("#busan-illu").addClass('color-changeOP');
    $("#busan-text").addClass('color-change');
    $("#busan-num").addClass('color-change');
}, function () {
    $("#busan-illu").removeClass('color-changeOP');
    $("#busan-text").removeClass('color-change');
    $("#busan-num").removeClass('color-change');
});

$("#gwangju-illu, #gwangju-text, #gwangju-num").hover(function () {
    $("#gwangju-illu").addClass('color-changeOP');
    $("#gwangju-text").addClass('color-change');
    $("#gwangju-num").addClass('color-change');
}, function () {
    $("#gwangju-illu").removeClass('color-changeOP');
    $("#gwangju-text").removeClass('color-change');
    $("#gwangju-num").removeClass('color-change');
});

$("#daejon-illu, #daejon-text, #daejon-num").hover(function () {
    $("#daejon-illu").addClass('color-changeOP');
    $("#daejon-text").addClass('color-change');
    $("#daejon-num").addClass('color-change');
}, function () {
    $("#daejon-illu").removeClass('color-changeOP');
    $("#daejon-text").removeClass('color-change');
    $("#daejon-num").removeClass('color-change');
});

$("#ulsan-illu, #ulsan-text, #ulsan-num").hover(function () {
    $("#ulsan-illu").addClass('color-changeOP');
    $("#ulsan-text").addClass('color-change');
    $("#ulsan-num").addClass('color-change');
}, function () {
    $("#ulsan-illu").removeClass('color-changeOP');
    $("#ulsan-text").removeClass('color-change');
    $("#ulsan-num").removeClass('color-change');
});

//MOU Specific animazione//

$('#specific-mou-chart #chart-2').css('opacity',0);
$('#specific-mou-chart #chart-3').css('opacity',0);

$('#specific-mou-chart #selector-1').click(function(){
    $('#specific-mou-chart #chart-1').css('opacity',1);
    $('#specific-mou-chart #chart-2').css('opacity',0);
    $('#specific-mou-chart #chart-3').css('opacity',0);
});

$('#specific-mou-chart #selector-2').click(function(){
    $('#specific-mou-chart #chart-1').css('opacity',0);
    $('#specific-mou-chart #chart-2').css('opacity',1);
    $('#specific-mou-chart #chart-3').css('opacity',0);
});

$('#specific-mou-chart #selector-3').click(function(){
    $('#specific-mou-chart #chart-1').css('opacity',0);
    $('#specific-mou-chart #chart-2').css('opacity',0);
    $('#specific-mou-chart #chart-3').css('opacity',1);
});

//fade in for bilat//

$("#china-bil").hover(function () {
    $("#china-bil").addClass("color-change");
        $("#fadechi, #fadechi1").css('opacity', 1);
}, function () {
    $("#china-bil").removeClass("color-change");
    $("#fadechi, #fadechi1").css('opacity', 0);
});

$("#brazil-bil").hover(function () {
    $("#brazil-bil").addClass("color-change");
        $("#fadebra, #fadebra1").css('opacity', 1);
}, function () {
    $("#brazil-bil").removeClass("color-change");
    $("#fadebra, #fadebra1").css('opacity', 0);
});

$("#germany-bil").hover(function () {
    $("#germany-bil").addClass("color-change");
        $("#fadegerm, #fadegerm1").css('opacity', 1);
}, function () {
    $("#germany-bil").removeClass("color-change");
    $("#fadegerm, #fadegerm1").css('opacity', 0);
});

$("#usa-bil").hover(function () {
    $("#usa-bil").addClass("color-change");
        $("#fadeusa, #fadeusa1").css('opacity', 1);
}, function () {
    $("#usa-bil").removeClass("color-change");
    $("#fadeusa, #fadeusa1").css('opacity', 0);
});

$("#india-bil").hover(function () {
    $("#india-bil").addClass("color-change");
        $("#fadeind, #fadeind1").css('opacity', 1);
}, function () {
    $("#india-bil").removeClass("color-change");
    $("#fadeind, #fadeind1").css('opacity', 0);
});

$("#argentina-bil").hover(function () {
    $("#argentina-bil").addClass("color-change");
        $("#fadearg, #fadearg1").css('opacity', 1);
}, function () {
    $("#argentina-bil").removeClass("color-change");
    $("#fadearg, #fadearg1").css('opacity', 0);
});

$("#others-bil").hover(function () {
    $("#others-bil").addClass("color-change");
        $("#fadeoth, #fadeoth1").css('opacity', 1);
}, function () {
    $("#others-bil").removeClass("color-change");
    $("#fadeoth, #fadeoth1").css('opacity', 0);
});


$("#southk-bil").hover(function () {
    $("#southk-bil").addClass("color-change");
        $("#fadekorearep, #fadekorearep1").css('opacity', 1);
}, function () {
    $("#southk-bil").removeClass("color-change");
    $("#fadekorearep, #fadekorearep1").css('opacity', 0);
});

$("#nodata-bil").hover(function () {
    $("#nodata-bil").addClass("color-change");
        $("#nodt, #nodt1").css('opacity', 1);
}, function () {
    $("#nodata-bil").removeClass("color-change");
    $("#nodt, #nodt1").css('opacity', 0);
});
//fade in for mou specific//

$('#chart-2').css('opacity',0);
$('#specific-mou-chart #chart-3').css('opacity',0);

$('#selector-1').click(function(){
    $('#chart-1').css('opacity',1);
    $('#chart-2').css('opacity',0);
    $('#chart-3').css('opacity',0);
});

$('#selector-2').click(function(){
    $('#chart-1').css('opacity',0);
    $('#chart-2').css('opacity',1);
    $('#chart-3').css('opacity',0);
});

$('#selector-3').click(function(){
    $('#chart-1').css('opacity',0);
    $('#chart-2').css('opacity',0);
    $('#chart-3').css('opacity',1);
});
