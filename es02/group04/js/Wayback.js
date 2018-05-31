$(document).ready(function() {

$("#Background").mouseenter(function() {
    $(this).toggleClass("outside_1");
        $("#Technology").fadeTo(20,0.4); 
        $("#Academic").fadeTo(20,0.4);
        $("#Anthropology").fadeTo(20,0.4); 
        $("#Actors").fadeTo(20,0.4);
        $("#Economy").fadeTo(20,0.4); 
        $("#Politics").fadeTo(20,0.4);
        $("#Others").fadeTo(20,0.4); 
        $("#Sociology").fadeTo(20,0.4);
        });


$("#Technology").fadeTo(20,0.4); 
$("#Academic").fadeTo(20,0.4);
$("#Anthropology").fadeTo(20,0.4); 
$("#Actors").fadeTo(20,0.4);
$("#Economy").fadeTo(20,0.4); 
$("#Politics").fadeTo(20,0.4);
$("#Others").fadeTo(20,0.4); 
$("#Sociology").fadeTo(20,0.4);   
    
$("#Technology").mouseenter(function() {
    $(this).toggleClass("inside_1");
        $("#Technology").fadeTo(20,1);
        $("#Academic").fadeTo(20,0.4);
        $("#Anthropology").fadeTo(20,0.4); 
        $("#Actors").fadeTo(20,0.4);
        $("#Economy").fadeTo(20,0.4); 
        $("#Politics").fadeTo(20,0.4);
        $("#Others").fadeTo(20,0.4); 
        $("#Sociology").fadeTo(20,0.4);  
        
        });


$("#Academic").mouseenter(function() {
    $(this).toggleClass("inside_2");
        $("#Academic").fadeTo(20,1);
        $("#Technology").fadeTo(20,0.4); 
$("#Anthropology").fadeTo(20,0.4); 
$("#Actors").fadeTo(20,0.4);
$("#Economy").fadeTo(20,0.4); 
$("#Politics").fadeTo(20,0.4);
$("#Others").fadeTo(20,0.4); 
$("#Sociology").fadeTo(20,0.4); 
        });


$("#Anthropology").mouseenter(function() {
    $(this).toggleClass("inside_3");
        $("#Anthropology").fadeTo(20,1);
$("#Technology").fadeTo(20,0.4); 
$("#Academic").fadeTo(20,0.4); 
$("#Actors").fadeTo(20,0.4);
$("#Economy").fadeTo(20,0.4); 
$("#Politics").fadeTo(20,0.4);
$("#Others").fadeTo(20,0.4); 
$("#Sociology").fadeTo(20,0.4); 
        });

$("#Actors").mouseenter(function() {
    $(this).toggleClass("inside_4");
        $("#Actors").fadeTo(20,1);
    $("#Technology").fadeTo(20,0.4); 
$("#Academic").fadeTo(20,0.4);
$("#Anthropology").fadeTo(20,0.4); 
$("#Economy").fadeTo(20,0.4); 
$("#Politics").fadeTo(20,0.4);
$("#Others").fadeTo(20,0.4); 
$("#Sociology").fadeTo(20,0.4); 
        });


$("#Economy").mouseenter(function() {
    $(this).toggleClass("inside_5");
        $("#Economy").fadeTo(20,1);
    $("#Technology").fadeTo(20,0.4); 
$("#Academic").fadeTo(20,0.4);
$("#Anthropology").fadeTo(20,0.4); 
$("#Actors").fadeTo(20,0.4);
$("#Politics").fadeTo(20,0.4);
$("#Others").fadeTo(20,0.4); 
$("#Sociology").fadeTo(20,0.4); 
        });


$("#Politics").mouseenter(function() {
    $(this).toggleClass("inside_6");
        $("#Politics").fadeTo(20,1);
    $("#Technology").fadeTo(20,0.4); 
$("#Academic").fadeTo(20,0.4);
$("#Anthropology").fadeTo(20,0.4); 
$("#Actors").fadeTo(20,0.4);
$("#Economy").fadeTo(20,0.4); 
$("#Others").fadeTo(20,0.4); 
$("#Sociology").fadeTo(20,0.4); 
        });

$("#Others").mouseenter(function() {
    $(this).toggleClass("inside_5");
        $("#Others").fadeTo(20,1);
    $("#Technology").fadeTo(20,0.4); 
$("#Academic").fadeTo(20,0.4);
$("#Anthropology").fadeTo(20,0.4); 
$("#Actors").fadeTo(20,0.4);
$("#Economy").fadeTo(20,0.4); 
$("#Politics").fadeTo(20,0.4);
$("#Sociology").fadeTo(20,0.4); 
        });


$("#Sociology").mouseenter(function() {
    $(this).toggleClass("inside_6");
        $("#Sociology").fadeTo(20,1);
    $("#Technology").fadeTo(20,0.4); 
$("#Academic").fadeTo(20,0.4);
$("#Anthropology").fadeTo(20,0.4); 
$("#Actors").fadeTo(20,0.4);
$("#Economy").fadeTo(20,0.4); 
$("#Politics").fadeTo(20,0.4);
$("#Others").fadeTo(20,0.4); 
        });

    
});
        
