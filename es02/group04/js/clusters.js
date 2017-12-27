$(document).ready(function() {

$("#bg").mouseenter(function() {
    $(this).toggleClass("inside_1");
    $("#canadalabel").hide();
    $("#kenyalabel").hide();
    $("#namibialabel").hide();
    $("#brazillabel").hide();
    });



$("#canadalabel").hide();   
$("#canadabase").mouseenter(function() {
    $(this).toggleClass("inside_1");
        $("#canadalabel").show(); 
        });

$("#canadalabel").mouseleave(function() {
    $(this).toggleClass("outside_1");
        $("#canadalabel").hide(); 
        });


$("#kenyalabel").hide();   
$("#kenyabase").mouseenter(function() {
    $(this).toggleClass("inside_1");
        $("#kenyalabel").show(); 
        });

$("#kenyalabel").mouseleave(function() {
    $(this).toggleClass("outside_1");
        $("#kenyalabel").hide(); 
        });

$("#brazillabel").hide();   
$("#brazilbase").mouseenter(function() {
    $(this).toggleClass("inside_1");
        $("#brazillabel").show(); 
        });

$("#brazillabel").mouseleave(function() {
    $(this).toggleClass("outside_1");
        $("#brazillabel").hide(); 
        });

$("#namibialabel").hide();   
$("#namibiabase").mouseenter(function() {
    $(this).toggleClass("inside_1");
        $("#namibialabel").show(); 
        });

$("#namibialabel").mouseleave(function() {
    $(this).toggleClass("outside_1");
        $("#namibialabel").hide(); 
        });


});
        
