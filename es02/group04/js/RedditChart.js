$(document).ready(function() {

$("#sfondo").mouseenter(function() {
    $(this).toggleClass("inside_1");
    $("#technologyimage").fadeTo(20 , 0.4);
    $("#moneyimage").fadeTo(20 , 0.4);
    $("#peopleimage").fadeTo(20 , 0.4);
    $("#politicsimage").fadeTo(20 , 0.4);
    $("#workimage").fadeTo(20 , 0.4);
    $("#canadaimage").fadeTo(20 , 0.4);
    });


    $("#technologyimage").fadeTo(20 , 0.4);
    $("#moneyimage").fadeTo(20 , 0.4);
    $("#peopleimage").fadeTo(20 , 0.4);
    $("#politicsimage").fadeTo(20 , 0.4);
    $("#workimage").fadeTo(20 , 0.4);
    $("#canadaimage").fadeTo(20 , 0.4);


$("#technologytext").hide(); 
$("#technologyrect").hide();     
$("#technologyimage").mouseenter(function() {
    $(this).toggleClass("inside_1");
        $("#technologytext").show();        
        $("#technologyrect").show();  
        $("#technologyimage").fadeTo(20 , 1);
        });

$("#technologyimage").mouseleave(function() {
    $(this).toggleClass("outside_1");
        $("#technologyimage").fadeTo(20 , 0.4);
        $("#technologytext").hide(); 
        $("#technologyrect").hide();   
        });


$("#moneytext").hide(); 
$("#moneyrect").hide();     
$("#moneyimage").mouseenter(function() {
    $(this).toggleClass("inside_1");
        $("#moneytext").show();        
        $("#moneyrect").show();  
        $("#moneyimage").fadeTo(20 , 1);
        });

$("#moneyimage").mouseleave(function() {
    $(this).toggleClass("outside_1");
        $("#moneyimage").fadeTo(20 , 0.4);
        $("#moneytext").hide(); 
        $("#moneyrect").hide();   
        });


$("#peopletext").hide(); 
$("#peoplerect").hide();     
$("#peopleimage").mouseenter(function() {
    $(this).toggleClass("inside_1");
        $("#peopletext").show();        
        $("#peoplerect").show();  
        $("#peopleimage").fadeTo(20 , 1);
        });

$("#peopleimage").mouseleave(function() {
    $(this).toggleClass("outside_1");
        $("#peopleimage").fadeTo(20 , 0.4);
        $("#peopletext").hide(); 
        $("#peoplerect").hide();   
        });

$("#worktext").hide(); 
$("#workrect").hide();     
$("#workimage").mouseenter(function() {
    $(this).toggleClass("inside_1");
        $("#worktext").show();        
        $("#workrect").show();  
        $("#workimage").fadeTo(20 , 1);
        });

$("#workimage").mouseleave(function() {
    $(this).toggleClass("outside_1");
        $("#workimage").fadeTo(20 , 0.4);
        $("#worktext").hide(); 
        $("#workrect").hide();   
        });

$("#canadatext").hide(); 
$("#canadarect").hide();     
$("#canadaimage").mouseenter(function() {
    $(this).toggleClass("inside_1");
        $("#canadatext").show();        
        $("#canadarect").show();  
        $("#canadaimage").fadeTo(20 , 1);
        });

$("#canadaimage").mouseleave(function() {
    $(this).toggleClass("outside_1");
        $("#canadaimage").fadeTo(20 , 0.4);
        $("#canadatext").hide(); 
        $("#canadarect").hide();   
        });



$("#politicstext").hide(); 
$("#politicsrect").hide();     
$("#politicsimage").mouseenter(function() {
    $(this).toggleClass("inside_1");
        $("#politicstext").show();        
        $("#politicsrect").show();  
        $("#politicsimage").fadeTo(20 , 1);
        });

$("#politicsimage").mouseleave(function() {
    $(this).toggleClass("outside_1");
        $("#politicsimage").fadeTo(20 , 0.4);
        $("#politicstext").hide(); 
        $("#politicsrect").hide();   
        });

});
        
