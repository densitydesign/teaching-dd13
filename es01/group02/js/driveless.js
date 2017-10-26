(function($) {
    "use strict"; // Start of use strict

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


    $("#People2s").click(function() {

        $("#People1").hide();
        $("#People3").hide();
        $("#People2").show();
    })

    $("#People3s").click(function() {

        $("#People2").hide();
        $("#People1").hide();
        $("#People3").show();
    })

    $("#People1s").click(function() {

        $("#People2").hide();
        $("#People3").hide();
        $("#People1").show();
    })

    $("#zoom").click(function() {

        $("#legislation").hide();
        $("#zoom").hide();
        $("#america").fadeIn();
        $("#zoomout").fadeIn();
        $("#byebye").fadeOut();
    })

    $("#zoomout").click(function() {

        $("#legislation").fadeIn();
        $("#zoom").fadeIn();
        $("#america").hide();
        $("#zoomout").hide();
        $("#byebye").fadeIn();

    })

    $("#Computer").mouseover(function() {

        $("#Computer_blue").show();
        $("#Sensors").hide();
        $("#Interior").hide();
        $("#Back-up_system").hide();
        $("#Radar").hide();
        $("#Electric_batteries").hide();
    })
    $("#Computer").mouseout(function() {

        $("#Computer_blue").hide();
        $("#Sensors").show();
        $("#Interior").show();
        $("#Back-up_system").show();
        $("#Radar").show();
        $("#Electric_batteries").show();
    })

    $("#Sensors").mouseover(function() {

        $("#Sensors_blue").show();
        $("#Computer").hide();
        $("#Interior").hide();
        $("#Back-up_system").hide();
        $("#Radar").hide();
        $("#Electric_batteries").hide();
    });

    $("#Sensors").mouseout(function() {

        $("#Sensors_blue").hide();
        $("#Computer").show();
        $("#Interior").show();
        $("#Back-up_system").show();
        $("#Radar").show();
        $("#Electric_batteries").show();
    });

    $("#Interior").mouseover(function() {

        $("#Interior_blue").show();
        $("#Computer").hide();
        $("#Sensors").hide();
        $("#Back-up_system").hide();
        $("#Radar").hide();
        $("#Electric_batteries").hide();
    })

    $("#Interior").mouseout(function() {

        $("#Interior_blue").hide();
        $("#Computer").show();
        $("#Sensors").show();
        $("#Back-up_system").show();
        $("#Radar").show();
        $("#Electric_batteries").show();
    })

    $("#Back-up_system").mouseover(function() {

        $("#Back-up_system_blue").show();
        $("#Computer").hide();
        $("#Sensors").hide();
        $("#Interior").hide();
        $("#Radar").hide();
        $("#Electric_batteries").hide();
    })

    $("#Back-up_system").mouseout(function() {

        $("#Back-up_system_blue").hide();
        $("#Computer").show();
        $("#Sensors").show();
        $("#Interior").show();
        $("#Radar").show();
        $("#Electric_batteries").show();
    })

    $("#Radar").mouseover(function() {

        $("#Radar_blue").show();
        $("#Computer").hide();
        $("#Sensors").hide();
        $("#Interior").hide();
        $("#Back-up_system").hide();
        $("#Electric_batteries").hide();
    })

    $("#Radar").mouseout(function() {

        $("#Radar_blue").hide();
        $("#Computer").show();
        $("#Sensors").show();
        $("#Interior").show();
        $("#Back-up_system").show();
        $("#Electric_batteries").show();
    })

    $("#Electric_batteries").mouseover(function() {

        $("#Electric_batteries_blue").show();
        $("#Computer").hide();
        $("#Sensors").hide();
        $("#Interior").hide();
        $("#Back-up_system").hide();
        $("#Radar").hide();
    })

    $("#Electric_batteries").mouseout(function() {

        $("#Electric_batteries_blue").hide();
        $("#Computer").show();
        $("#Sensors").show();
        $("#Interior").show();
        $("#Back-up_system").show();
        $("#Radar").show();
    })

    $("#Electric_batteries").click(function() {

        $("#Electric_batteries_blue").show();
        $("#Computer").hide();
        $("#Sensors").hide();
        $("#Interior").hide();
        $("#Back-up_system").hide();
        $("#Radar").hide();
    })



    //
    // $("#TOYOTA").mouseover(function() {
    //
    //     $("#toyo").show();
    //     $("#BMW").hide();
    //     $("#VOLKSWAGEN").hide();
    //     $("#FORD").hide();
    //     $("#MERCEDES").hide();
    //     $("#VOLVO").hide();
    //     $("#GENERAL_MOTORS").hide();
    // })
    //
    // $("#TOYOTA").mouseout(function() {
    //
    //     $("#toyo").hide();
    //     $("#BMW").show();
    //     $("#VOLKSWAGEN").show();
    //     $("#FORD").show();
    //     $("#MERCEDES").show();
    //     $("#VOLVO").show();
    //     $("#GENERAL_MOTORS").show();
    // })
    //
    // $("#ltoyo").click(function() {
    //     $("#toyo").show();
    //     $("#BMW").hide();
    //     $("#VOLKSWAGEN").hide();
    //     $("#FORD").hide();
    //     $("#MERCEDES").hide();
    //     $("#VOLVO").hide();
    //     $("#GENERAL_MOTORS").hide();
    // })
    //
    //
    //
    // $("#BMW").mouseover(function() {
    //
    //     $("#bmw").show();
    //     $("#TOYOTA").hide();
    //     $("#VOLKSWAGEN").hide();
    //     $("#FORD").hide();
    //     $("#MERCEDES").hide();
    //     $("#VOLVO").hide();
    //     $("#GENERAL_MOTORS").hide();
    // })
    //
    // $("#BMW").mouseout(function() {
    //
    //     $("#bmw").hide();
    //     $("#TOYOTA").show();
    //     $("#VOLKSWAGEN").show();
    //     $("#FORD").show();
    //     $("#MERCEDES").show();
    //     $("#VOLVO").show();
    //     $("#GENERAL_MOTORS").show();
    // })
    //
    // $("#lbmw").click(function() {
    //     $("#bmw").show();
    //     $("#TOYOTA").hide();
    //     $("#VOLKSWAGEN").hide();
    //     $("#FORD").hide();
    //     $("#MERCEDES").hide();
    //     $("#VOLVO").hide();
    //     $("#GENERAL_MOTORS").hide();
    // })
    //
    //
    // $("#VOLKSWAGEN").mouseover(function() {
    //
    //     $("#volks").show();
    //     $("#TOYOTA").hide();
    //     $("#BMW").hide();
    //     $("#FORD").hide();
    //     $("#MERCEDES").hide();
    //     $("#VOLVO").hide();
    //     $("#GENERAL_MOTORS").hide();
    // })
    //
    // $("#VOLKSWAGEN").mouseout(function() {
    //
    //     $("#volks").hide();
    //     $("#TOYOTA").show();
    //     $("#BMW").show();
    //     $("#FORD").show();
    //     $("#MERCEDES").show();
    //     $("#VOLVO").show();
    //     $("#GENERAL_MOTORS").show();
    // })
    //
    // $("#lvolk").click(function() {
    //     $("#volks").show();
    //     $("#TOYOTA").hide();
    //     $("#BMW").hide();
    //     $("#FORD").hide();
    //     $("#MERCEDES").hide();
    //     $("#VOLVO").hide();
    //     $("#GENERAL_MOTORS").hide();
    // })
    //
    // $("#FORD").mouseover(function() {
    //
    //     $("#ford").show();
    //     $("#TOYOTA").hide();
    //     $("#BMW").hide();
    //     $("#VOLKSWAGEN").hide();
    //     $("#MERCEDES").hide();
    //     $("#VOLVO").hide();
    //     $("#GENERAL_MOTORS").hide();
    // })
    //
    // $("#FORD").mouseout(function() {
    //
    //     $("#ford").hide();
    //     $("#TOYOTA").show();
    //     $("#BMW").show();
    //     $("#VOLKSWAGEN").show();
    //     $("#MERCEDES").show();
    //     $("#VOLVO").show();
    //     $("#GENERAL_MOTORS").show();
    // })
    //
    // $("#lford").click(function() {
    //     $("#ford").show();
    //     $("#TOYOTA").hide();
    //     $("#BMW").hide();
    //     $("#VOLKSWAGEN").hide();
    //     $("#MERCEDES").hide();
    //     $("#VOLVO").hide();
    //     $("#GENERAL_MOTORS").hide();
    // })
    //
    // $("#MERCEDES").mouseover(function() {
    //
    //     $("#mercedes").show();
    //     $("#TOYOTA").hide();
    //     $("#BMW").hide();
    //     $("#VOLKSWAGEN").hide();
    //     $("#FORD").hide();
    //     $("#VOLVO").hide();
    //     $("#GENERAL_MOTORS").hide();
    // })
    //
    // $("#MERCEDES").mouseout(function() {
    //
    //     $("#mercedes").hide();
    //     $("#TOYOTA").show();
    //     $("#BMW").show();
    //     $("#VOLKSWAGEN").show();
    //     $("#FORD").show();
    //     $("#VOLVO").show();
    //     $("#GENERAL_MOTORS").show();
    // })
    //
    // $("#lmercedes").click(function() {
    //     $("#mercedes").show();
    //     $("#TOYOTA").hide();
    //     $("#BMW").hide();
    //     $("#VOLKSWAGEN").hide();
    //     $("#MERCEDES").hide();
    //     $("#VOLVO").hide();
    //     $("#GENERAL_MOTORS").hide();
    // })

    $(".clss-24").hide();
    $("#COLOR_CODES").find("text").on("click", function() {
        console.log($(this).attr("id"));
        var id=$(this).attr("id");
        id=id.substr(1, id.length);
        console.log(id);
        $(".onda").hide();
        $("#"+id).show();
        $(".clss-24").hide();
        $("#H"+id).show();
    });

    $(".onda").mouseover(function() {
        console.log($(this).attr("id"));
        var id=$(this).attr("id");
        $(".onda").hide();
        $("#"+id).show();
        $(".clss-24").hide();
        $("#H"+id).show();
        $(this).mouseout(function() {
          $(".onda").show();
          $(".clss-24").hide();
        });
    })

    $(".iconaudiencetext").hide();
    $(".iconaudiencegraph").hide();
    $("#PICON1").show();
    $("#GICON1").show();
    $(".iconaudience").on("click", function() {
        console.log($(this).attr("id"));
        var id=$(this).attr("id");
        $(".iconaudiencetext").hide();
        $(".iconaudiencegraph").hide();
        $("#P"+id).show();
        $("#G"+id).show();

        var tutti=$(".iconaudience");
        for(var i=0;i<tutti.length;i++){
          $(tutti[i]).attr("src","img/"+$(tutti[i]).attr("id")+"_0.png");
        }
        $(this).attr("src","img/"+id+"_1.png");
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
        if ($("#mainNav").offset().top > 400) {
            $(".particle-network-animation").fadeOut();
        }

        if ($("#mainNav").offset().top < 400) {
            $(".particle-network-animation").fadeIn();
        }
    });

})(jQuery); // End of use strict

var i=0;
(function() {
  var update_handle_track_pos;

  update_handle_track_pos = function(slider, ui_handle_pos) {
    var handle_track_xoffset, slider_range_inverse_width;
    handle_track_xoffset = -((ui_handle_pos / 4) * slider.clientWidth);
    $(slider).find(".handle-track").css("left", handle_track_xoffset);
    slider_range_inverse_width = (4 - ui_handle_pos) + "%";
    console.log(ui_handle_pos);
    
    if(i==0){
        i++;
    }else{
        $(".disgraph_pallino").hide();
        $(".disgraph"+ui_handle_pos).show();
    }
    return $(slider).find(".slider-range-inverse").css("width", slider_range_inverse_width);
  };
    
    $("#disgraph_pallino5").on("click",function(){
        $(".disgraph_pallino").hide();
        $(".disgraph5").show();
    });

  $("#js-slider").slider({
    range: "min",
    max: 3,
    value: 0,
    create: function(event, ui) {
      var slider;
      slider = $(event.target);
      slider.find('.ui-slider-handle').append('<span class="dot"><span class="handle-track"></span></span>');
      slider.prepend('<div class="slider-range-inverse"></div>');
      slider.find(".handle-track").css("width", event.target.clientWidth);
      return update_handle_track_pos(event.target, $(this).slider("value"));
    },
    slide: function(event, ui) {
      return update_handle_track_pos(event.target, ui.value);
    }
  });

}).call(this);

