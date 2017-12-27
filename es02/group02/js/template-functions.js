// load the interactions only when the document is ready
$(document).ready(function () {
    $('.menu-btn').click(function () {
        $(this).children('.menu-svg').toggleClass('scaled');
        $(this).children('.menu-svg').toggleClass('icon-visible');
        $('.sidebar').toggleClass('nav-closed nav-open');
    });
});



$("#web_button").click(function () {
    $("#web_button").hide();
    $("#web-click").show();
    $("#Web").show();
    $("#Images").hide();
    $("#Images_button-2").show();
    $("#images-click").hide();

})

$("#Images_button-2").click(function () {
    $("#Images_button-2").hide();
    $("#images-click").show();
    $("#Images").show();
    $("#Web").hide();
    $("#web-click").hide();
    $("#web_button").show();
})

$("#News_button").click(function () {
    $("#News_button").hide();
    $("#News-click").show();
    $("#News").show();
    $("#Youtube").hide();
    $("#Youtube_button-2").show();
    $("#Youtube-click").hide();

})

$("#Youtube_button-2").click(function () {
    $("#Youtube_button-2").hide();
    $("#Youtube-click").show();
    $("#Youtube").show();
    $("#News").hide();
    $("#News-click").hide();
    $("#News_button").show();
})

$("#Light_Blue").click(function () {
    $("#Light_Blue").hide();
    $("#Blue_Dark_").show();
    $("#Numbers").show();
    $("#Words").hide();
})

$("#Blue_Dark_").click(function () {
    $("#Blue_Dark_").hide();
    $("#Light_Blue").show();
    $("#Words").show();
    $("#Numbers").hide();
})

$("#Yahoo").mouseover(function () {


    $("#Google").css("opacity", "0.3");
    $("#Bing").css("opacity", "0.3");
    $("#Yahoo").css("opacity", "1");

})

$("#Google").mouseover(function () {


    $("#Yahoo").css("opacity", "0.3");
    $("#Bing").css("opacity", "0.3");
    $("#Google").css("opacity", "1");



})
$("#Bing").mouseover(function () {


    $("#Google").css("opacity", "0.3");
    $("#Yahoo").css("opacity", "0.3");
    $("#Bing").css("opacity", "1");

})


$("#textyahoo").mouseover(function () {


    $("#Google").css("opacity", "0.3");
    $("#Bing").css("opacity", "0.3");
    $("#Yahoo").css("opacity", "1");

})

$("#textgoogle").mouseover(function () {


    $("#Yahoo").css("opacity", "0.3");
    $("#Bing").css("opacity", "0.3");
    $("#Google").css("opacity", "1");



})
$("#textbing").mouseover(function () {


    $("#Google").css("opacity", "0.3");
    $("#Yahoo").css("opacity", "0.3");
    $("#Bing").css("opacity", "1");

})
