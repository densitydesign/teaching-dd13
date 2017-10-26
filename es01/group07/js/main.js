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

//title anim//



//typing animation//

$( ".type-input" ).focus(function() {
  $( ".animation" ).addClass("hidden");
});

//tv function//

// timeline //

(function($) {
  $.fn.timeline = function() {
    var selectors = {
      id: $(this),
      item: $(this).find(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img"
    };
    selectors.item.eq(0).addClass(selectors.activeClass);
    selectors.id.css("background-image", "url(" + selectors.item.first().find(selectors.img).attr("src") + ")");

    var itemLength = selectors.item.length;
    $(window).scroll(function() {
      var max, min;
      var pos = $(this).scrollTop();
      selectors.item.each(function(i) {
        min = $(this).offset().top;
        max = ($(this).height() + $(this).offset().top);
        var that = $(this)
        if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
          selectors.item.removeClass(selectors.activeClass);
          selectors.id.css("background-image", "url(" + selectors.item.last().find(selectors.img).attr('src') + ")");
          selectors.item.last().addClass(selectors.activeClass)
        } else if (pos <= max - 40 && pos >= min) {
          selectors.id.css("background-image", "url(" + $(this).find(selectors.img).attr('src') + ")");
          selectors.item.removeClass(selectors.activeClass);
          $(this).addClass(selectors.activeClass);
        }

      });
    });

  }
})(jQuery);
$("#timeline-1").timeline();

//hover for mou SK//

$("#rett-northchung, #chun").hover(function () {
    $("#northchungcheong").addClass("color-change");
    $("#num1139").addClass('fade-it-in');
}, function () {
    $("#northchungcheong").removeClass("color-change");
    $("#num1139").removeClass('fade-it-in');
});

$("#rett-Seoul, #se").hover(function () {
    $("#seoul").addClass("color-change");
    $("#num6980").addClass('fade-it-in');
}, function () {
    $("#seoul").removeClass("color-change");
    $("#num6980").removeClass('fade-it-in');
});

$("#rett-southchung, #chus").hover(function () {
    $("#southchungcheong").addClass("color-change");
    $("#num1346").addClass('fade-it-in');
}, function () {
    $("#southchungcheong").removeClass("color-change");
    $("#num1346").removeClass('fade-it-in');
});

$("#rett-gangwon, #gan").hover(function () {
    $("#gangwon").addClass("color-change");
    $("#num709").addClass('fade-it-in');
}, function () {
    $("#gangwon").removeClass("color-change");
    $("#num709").removeClass('fade-it-in');
});

$("#rett-gyeonggi, #gye").hover(function () {
    $("#gyeonggi").addClass("color-change");
    $("#num8577").addClass('fade-it-in');
}, function () {
    $("#gyeonggi").removeClass("color-change");
    $("#num8577").removeClass('fade-it-in');
});

$("#rett-northgyeongsang, #ngye").hover(function () {
    $("#northgyeongsang").addClass("color-change");
    $("#num1066").addClass('fade-it-in');
}, function () {
    $("#northgyeongsang").removeClass("color-change");
    $("#num1066").removeClass('fade-it-in');
});

$("#rett-southgyeongsang, #sgye").hover(function () {
    $("#southgyeongsang").addClass("color-change");
    $("#num1045").addClass('fade-it-in');
}, function () {
    $("#southgyeongsang").removeClass("color-change");
    $("#num1045").removeClass('fade-it-in');
});

$("#rett-northjeolla, #njeo").hover(function () {
    $("#northjeolla").addClass("color-change");
    $("#num533").addClass('fade-it-in');
}, function () {
    $("#northjeolla").removeClass("color-change");
    $("#num533").removeClass('fade-it-in');
});

$("#rett-southjeolla, #sjeo").hover(function () {
    $("#southjeolla").addClass("color-change");
    $("#num622").addClass('fade-it-in');
}, function () {
    $("#southjeolla").removeClass("color-change");
    $("#num622").removeClass('fade-it-in');
});

$("#rett-jeju, #jej").hover(function () {
    $("#jeju").addClass("color-change");
    $("#num282").addClass('fade-it-in');
}, function () {
    $("#jeju").removeClass("color-change");
    $("#num282").removeClass('fade-it-in');
});

$("#rett-busan, #bus").hover(function () {
    $("#busan").addClass("color-change");
    $("#num1026").addClass('fade-it-in');
}, function () {
    $("#busan").removeClass("color-change");
    $("#num1026").removeClass('fade-it-in');
});

$("#rett-incheon, #inch").hover(function () {
    $("#icheon").addClass("color-change");
    $("#num2702").addClass('fade-it-in');
}, function () {
    $("#icheon").removeClass("color-change");
    $("#num2702").removeClass('fade-it-in');
});

$("#rett-daegu, #dae").hover(function () {
    $("#daegu").addClass("color-change");
    $("#num720").addClass('fade-it-in');
}, function () {
    $("#daegu").removeClass("color-change");
    $("#num720").removeClass('fade-it-in');
});

$("#rett-gwangju, #gwa").hover(function () {
    $("#gwangju").addClass("color-change");
    $("#num600").addClass('fade-it-in');
}, function () {
    $("#gwangju").removeClass("color-change");
    $("#num600").removeClass('fade-it-in');
});

$("#rett-dajeon, #daj").hover(function () {
    $("#daejeon").addClass("color-change");
    $("#num611").addClass('fade-it-in');
}, function () {
    $("#daejeon").removeClass("color-change");
    $("#num611").removeClass('fade-it-in');
});

$("#rett-ulsan, #uls").hover(function () {
    $("#ulsan").addClass("color-change");
    $("#num533").addClass('fade-it-in');
}, function () {
    $("#ulsan").removeClass("color-change");
    $("#num533").removeClass('fade-it-in');
});


//hover for mou NK//

$("#rett-chang, #ng").hover(function () {
    $("#chagang").addClass("color-change");
    $("#num207").addClass('fade-it-in');
}, function () {
    $("#chagang").removeClass("color-change");
    $("#num207").removeClass('fade-it-in');
});

$("#rett-northhamg, #nmg").hover(function () {
    $("#northhamgyong").addClass("color-change");
    $("#num18665").addClass('fade-it-in');
}, function () {
    $("#northhamgyong").removeClass("color-change");
    $("#num18665").removeClass('fade-it-in');
});

$("#rett-southhamg, #smg").hover(function () {
    $("#southhamgyong").addClass("color-change");
    $("#num2677").addClass('fade-it-in');
}, function () {
    $("#southhamgyong").removeClass("color-change");
    $("#num2677").removeClass('fade-it-in');
});

$("#rett-northhwanghae, #nhhw").hover(function () {
    $("#northhwanghae").addClass("color-change");
    $("#num428").addClass('fade-it-in');
}, function () {
    $("#northhwanghae").removeClass("color-change");
    $("#num428").removeClass('fade-it-in');
});

$("#southhwanghae-2, #shhw").hover(function () {
    $("#southhwanghae").addClass("color-change");
    $("#num444").addClass('fade-it-in');
}, function () {
    $("#southhwanghae").removeClass("color-change");
    $("#num444").removeClass('fade-it-in');
});

$("#rett-kang, #ka").hover(function () {
    $("#kangwon").addClass("color-change");
    $("#num580").addClass('fade-it-in');
}, function () {
    $("#kangwon").removeClass("color-change");
    $("#num580").removeClass('fade-it-in');
});

$("#rett-northpyong, #npy").hover(function () {
    $("#northpyongan").addClass("color-change");
    $("#num811").addClass('fade-it-in');
}, function () {
    $("#northpyongan").removeClass("color-change");
    $("#num811").removeClass('fade-it-in');
});

$("#rett-southpyongan, #spy").hover(function () {
    $("#southpyongan").addClass("color-change");
        $("#num139").addClass('fade-it-in');
}, function () {
    $("#southpyongan").removeClass("color-change");
    $("#num139").removeClass('fade-it-in');
});

$("#rett-ryanggang, #rya").hover(function () {
    $("#ryanggang").addClass("color-change");
        $("#num4473").addClass('fade-it-in');
}, function () {
    $("#ryanggang").removeClass("color-change");
    $("#num4473").removeClass('fade-it-in');
});

$('#rett-others, #othz').hover(function () {
    $('#num168').addClass('fade-it-in');
}, function () {
        $('#num168').removeClass('fade-it-in');
});


console.log('ciaociao')


//fade in for mou specific//

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

/fade in for bilat/

$("#china-bil").hover(function () {
    $("#china-bil").addClass("color-change");
        $("#fadechi, #fadechi1").addClass('fade-it-in');
}, function () {
    $("#china-bil").removeClass("color-change");
    $("#fadechi, #fadechi1").removeClass('fade-it-in');
});

$("#brazil-bil").hover(function () {
    $("#brazil-bil").addClass("color-change");
        $("#fadebra, #fadebra1").addClass('fade-it-in');
}, function () {
    $("#brazil-bil").removeClass("color-change");
    $("#fadebra, #fadebra1").removeClass('fade-it-in');
});

$("#germany-bil").hover(function () {
    $("#germany-bil").addClass("color-change");
        $("#fadegerm, #fadegerm1").addClass('fade-it-in');
}, function () {
    $("#germany-bil").removeClass("color-change");
    $("#fadegerm, #fadegerm1").removeClass('fade-it-in');
});

$("#usa-bil").hover(function () {
    $("#usa-bil").addClass("color-change");
        $("#fadeusa, #fadeusa1").addClass('fade-it-in');
}, function () {
    $("#usa-bil").removeClass("color-change");
    $("#fadeusa, #fadeusa1").removeClass('fade-it-in');
});

$("#india-bil").hover(function () {
    $("#india-bil").addClass("color-change");
        $("#fadeind, #fadeind1").addClass('fade-it-in');
}, function () {
    $("#india-bil").removeClass("color-change");
    $("#fadeind, #fadeind1").removeClass('fade-it-in');
});

$("#argentina-bil").hover(function () {
    $("#argentina-bil").addClass("color-change");
        $("#fadearg, #fadearg1").addClass('fade-it-in');
}, function () {
    $("#argentina-bil").removeClass("color-change");
    $("#fadearg, #fadearg1").removeClass('fade-it-in');
});

$("#others-bil").hover(function () {
    $("#others-bil").addClass("color-change");
        $("#fadeoth, #fadeoth1").addClass('fade-it-in');
}, function () {
    $("#others-bil").removeClass("color-change");
    $("#fadeoth, #fadeoth1").removeClass('fade-it-in');
});


$("#southk-bil").hover(function () {
    $("#southk-bil").addClass("color-change");
        $("#fadekorearep, #fadekorearep1").addClass('fade-it-in');
}, function () {
    $("#southk-bil").removeClass("color-change");
    $("#fadekorearep, #fadekorearep1").removeClass('fade-it-in');
});

$("#nodata-bil").hover(function () {
    $("#nodata-bil").addClass("color-change");
        $("#nodt, #nodt1").addClass('fade-it-in');
}, function () {
    $("#nodata-bil").removeClass("color-change");
    $("#nodt, #nodt1").removeClass('fade-it-in');
});
//fade in for mou specific//

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

//hover for mou SK//

$("#rett-northchung").hover(function () {
    $("#northchungcheong").addClass("color-change");
    $("#num1139").addClass('fade-it-in');
}, function () {
    $("#northchungcheong").removeClass("color-change");
    $("#num1139").removeClass('fade-it-in');
});

$("#rett-Seoul").hover(function () {
    $("#seoul").addClass("color-change");
    $("#num6980").addClass('fade-it-in');
}, function () {
    $("#seoul").removeClass("color-change");
    $("#num6980").removeClass('fade-it-in');
});

$("#rett-southchung").hover(function () {
    $("#southchungcheong").addClass("color-change");
    $("#num1346").addClass('fade-it-in');
}, function () {
    $("#southchungcheong").removeClass("color-change");
    $("#num1346").removeClass('fade-it-in');
});

$("#rett-gangwon").hover(function () {
    $("#gangwon").addClass("color-change");
    $("#num709").addClass('fade-it-in');
}, function () {
    $("#gangwon").removeClass("color-change");
    $("#num709").removeClass('fade-it-in');
});

$("#rett-gyeonggi").hover(function () {
    $("#gyeonggi").addClass("color-change");
    $("#num8577").addClass('fade-it-in');
}, function () {
    $("#gyeonggi").removeClass("color-change");
    $("#num8577").removeClass('fade-it-in');
});

$("#rett-northgyeongsang").hover(function () {
    $("#northgyeongsang").addClass("color-change");
    $("#num1066").addClass('fade-it-in');
}, function () {
    $("#northgyeongsang").removeClass("color-change");
    $("#num1066").removeClass('fade-it-in');
});

$("#rett-southgyeongsang").hover(function () {
    $("#southgyeongsang").addClass("color-change");
    $("#num1045").addClass('fade-it-in');
}, function () {
    $("#southgyeongsang").removeClass("color-change");
    $("#num1045").removeClass('fade-it-in');
});

$("#rett-northjeolla").hover(function () {
    $("#northjeolla").addClass("color-change");
    $("#num533").addClass('fade-it-in');
}, function () {
    $("#northjeolla").removeClass("color-change");
    $("#num533").removeClass('fade-it-in');
});

$("#rett-southjeolla").hover(function () {
    $("#southjeolla").addClass("color-change");
    $("#num622").addClass('fade-it-in');
}, function () {
    $("#southjeolla").removeClass("color-change");
    $("#num622").removeClass('fade-it-in');
});

$("#rett-jeju").hover(function () {
    $("#jeju").addClass("color-change");
    $("#num282").addClass('fade-it-in');
}, function () {
    $("#jeju").removeClass("color-change");
    $("#num282").removeClass('fade-it-in');
});

$("#rett-busan").hover(function () {
    $("#busan").addClass("color-change");
    $("#num1026").addClass('fade-it-in');
}, function () {
    $("#busan").removeClass("color-change");
    $("#num1026").removeClass('fade-it-in');
});

$("#rett-incheon").hover(function () {
    $("#icheon").addClass("color-change");
    $("#num2702").addClass('fade-it-in');
}, function () {
    $("#icheon").removeClass("color-change");
    $("#num2702").removeClass('fade-it-in');
});

$("#rett-daegu").hover(function () {
    $("#daegu").addClass("color-change");
    $("#num720").addClass('fade-it-in');
}, function () {
    $("#daegu").removeClass("color-change");
    $("#num720").removeClass('fade-it-in');
});

$("#rett-gwangju").hover(function () {
    $("#gwangju").addClass("color-change");
    $("#num600").addClass('fade-it-in');
}, function () {
    $("#gwangju").removeClass("color-change");
    $("#num600").removeClass('fade-it-in');
});

$("#rett-dajeon").hover(function () {
    $("#daejeon").addClass("color-change");
    $("#num611").addClass('fade-it-in');
}, function () {
    $("#daejeon").removeClass("color-change");
    $("#num611").removeClass('fade-it-in');
});

$("#rett-ulsan").hover(function () {
    $("#ulsan").addClass("color-change");
    $("#num533").addClass('fade-it-in');
}, function () {
    $("#ulsan").removeClass("color-change");
    $("#num533").removeClass('fade-it-in');
});


//hover for mou NK//

$("#rett-chang").hover(function () {
    $("#chagang").addClass("color-change");
    $("#num207").addClass('fade-it-in');
}, function () {
    $("#chagang").removeClass("color-change");
    $("#num207").removeClass('fade-it-in');
});

$("#rett-northhamg").hover(function () {
    $("#northhamgyong").addClass("color-change");
    $("#num18665").addClass('fade-it-in');
}, function () {
    $("#northhamgyong").removeClass("color-change");
    $("#num18665").removeClass('fade-it-in');
});

$("#rett-southhamg").hover(function () {
    $("#southhamgyong").addClass("color-change");
    $("#num2677").addClass('fade-it-in');
}, function () {
    $("#southhamgyong").removeClass("color-change");
    $("#num2677").removeClass('fade-it-in');
});

$("#rett-northhwanghae").hover(function () {
    $("#northhwanghae").addClass("color-change");
    $("#num428").addClass('fade-it-in');
}, function () {
    $("#northhwanghae").removeClass("color-change");
    $("#num428").removeClass('fade-it-in');
});

$("#southhwanghae-2").hover(function () {
    $("#southhwanghae").addClass("color-change");
    $("#num444").addClass('fade-it-in');
}, function () {
    $("#southhwanghae").removeClass("color-change");
    $("#num444").removeClass('fade-it-in');
});

$("#rett-kang").hover(function () {
    $("#kangwon").addClass("color-change");
    $("#num580").addClass('fade-it-in');
}, function () {
    $("#kangwon").removeClass("color-change");
    $("#num580").removeClass('fade-it-in');
});

$("#rett-northpyong").hover(function () {
    $("#northpyongan").addClass("color-change");
    $("#num811").addClass('fade-it-in');
}, function () {
    $("#northpyongan").removeClass("color-change");
    $("#num811").removeClass('fade-it-in');
});

$("#rett-southpyongan").hover(function () {
    $("#southpyongan").addClass("color-change");
        $("#num139").addClass('fade-it-in');
}, function () {
    $("#southpyongan").removeClass("color-change");
    $("#num139").removeClass('fade-it-in');
});

$("#rett-ryanggang").hover(function () {
    $("#ryanggang").addClass("color-change");
        $("#num4473").addClass('fade-it-in');
}, function () {
    $("#ryanggang").removeClass("color-change");
    $("#num4473").removeClass('fade-it-in');
});

$('#rett-others').hover(function () {
    $('#num168').addClass('fade-it-in');
}, function () {
        $('#num168').removeClass('fade-it-in');
});



//fade in for bilat//

$("#china-bil").hover(function () {
    $("#china-bil").addClass("color-change");
        $("#fadechi, #fadechi1").addClass('fade-it-in');
}, function () {
    $("#china-bil").removeClass("color-change");
    $("#fadechi, #fadechi1").removeClass('fade-it-in');
});

$("#brazil-bil").hover(function () {
    $("#brazil-bil").addClass("color-change");
        $("#fadebra, #fadebra1").addClass('fade-it-in');
}, function () {
    $("#brazil-bil").removeClass("color-change");
    $("#fadebra, #fadebra1").removeClass('fade-it-in');
});

$("#germany-bil").hover(function () {
    $("#germany-bil").addClass("color-change");
        $("#fadegerm, #fadegerm1").addClass('fade-it-in');
}, function () {
    $("#germany-bil").removeClass("color-change");
    $("#fadegerm, #fadegerm1").removeClass('fade-it-in');
});

$("#usa-bil").hover(function () {
    $("#usa-bil").addClass("color-change");
        $("#fadeusa, #fadeusa1").addClass('fade-it-in');
}, function () {
    $("#usa-bil").removeClass("color-change");
    $("#fadeusa, #fadeusa1").removeClass('fade-it-in');
});

$("#india-bil").hover(function () {
    $("#india-bil").addClass("color-change");
        $("#fadeind, #fadeind1").addClass('fade-it-in');
}, function () {
    $("#india-bil").removeClass("color-change");
    $("#fadeind, #fadeind1").removeClass('fade-it-in');
});

$("#argentina-bil").hover(function () {
    $("#argentina-bil").addClass("color-change");
        $("#fadearg, #fadearg1").addClass('fade-it-in');
}, function () {
    $("#argentina-bil").removeClass("color-change");
    $("#fadearg, #fadearg1").removeClass('fade-it-in');
});

$("#others-bil").hover(function () {
    $("#others-bil").addClass("color-change");
        $("#fadeoth, #fadeoth1").addClass('fade-it-in');
}, function () {
    $("#others-bil").removeClass("color-change");
    $("#fadeoth, #fadeoth1").removeClass('fade-it-in');
});


$("#southk-bil").hover(function () {
    $("#southk-bil").addClass("color-change");
        $("#fadekorearep, #fadekorearep1").addClass('fade-it-in');
}, function () {
    $("#southk-bil").removeClass("color-change");
    $("#fadekorearep, #fadekorearep1").removeClass('fade-it-in');
});

$("#nodata-bil").hover(function () {
    $("#nodata-bil").addClass("color-change");
        $("#nodt, #nodt1").addClass('fade-it-in');
}, function () {
    $("#nodata-bil").removeClass("color-change");
    $("#nodt, #nodt1").removeClass('fade-it-in');
});
