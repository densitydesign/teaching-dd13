$(document).ready(function () {
    

    height = window.innerHeight;

    $(".zone1").css("height", height + "px");
    $(".zone2").css("height", height + "px");
    $(".zone3").css("height", height + "px");
    $(".zone4").css("height", height + "px");
    $(".zone5").css("height", height + "px");

    $("p").hide();
    $(".zone1 #arrow").on("click", function () {
        console.log("qui");
        $('html, body').animate({
            scrollTop: $(".zone2").position().top
        }, '50');

    });

    $(".company").on("click", function () {
        window.company = $(this).attr("id");
        $(".zone4").find(".question").html("EXPLORE RISKS WITH <br/>" + window.company + "'S DRIVERLESS CAR");
        $('html, body').animate({
            scrollTop: $(".zone3").position().top
        }, '50');
    })

    $(".zone3 #arrow").on("click", function () {
        $('html, body').animate({
            scrollTop: $(".zone4").position().top
        }, '50');

    });

    $(".circle").addClass("shadowfilter");
    $(".circle").on("click",function(){ 
        window.circle=$(this).attr("id");
        console.log(window.circle);       $(".cardtochange").attr("src","assets/img/grafiche/"+window.circle+".png")
        $("#myModal").modal();
    });

    

});

function showText(el){
    $("p").hide();
    $("p#"+el).show();
}
