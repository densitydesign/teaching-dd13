/*jslint browser: true*/
/*global $, jQuery, alert*/



var mousePressed = false;
var lastX, lastY;
var ctx;


function InitThis() {
    ctx = document.getElementById('myCanvas').getContext("2d");

    $('#myCanvas').mousedown(function (e) {
        mousePressed = true;
        Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
    });

    $('#myCanvas').mousemove(function (e) {
        if (mousePressed) {
            Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
        }
    });

    $('#myCanvas').mouseup(function (e) {
        mousePressed = false;
    });
    $('#myCanvas').mouseleave(function (e) {
        mousePressed = false;
    });
}

/*function initialize() {
    // Register an event listener to call the resizeCanvas() function 
    // each time the window is resized.
    window.addEventListener('resize', resizeCanvas, false);
    // Draw canvas border for the first time.
    resizeCanvas();
    
 }*/
function resizeCanvas() {
    /*ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;*/
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = $('.canvas-background').height();
}

function Draw(x, y, isDown) {
    if (isDown) {
        ctx.beginPath();
        ctx.strokeStyle = "#BE2326";
        ctx.lineWidth = 9;
        ctx.lineJoin = "round";
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.stroke();

    }
    lastX = x;
    lastY = y;
}


$(document).ready(function () {

    window.addEventListener('resize', resizeCanvas, false);


    $('#pyr1').hide();

    $('#pyr_ill').hover(function () {
        $('#pyr1').show('fast');
        $('#pyr0').hide('fast');
    })

    $('#pyr_base').hover(function () {
        $('#pyr1').hide('fast');
        $('#pyr0').show('fast');
    })




    $('#Gender').hide();
    $('#Disability').hide();
    $('#Race').hide();
    $('#Homo').hide();
    $('#Jews').hide();

    $('#social_back').hover(function () {
        $('#Gender').hide('fast');
        $('#Tot').show('fast');
        $('#Disability').hide('fast');
        $('#Race').hide('fast');
        $('#Homo').hide('fast');
        $('#Jews').hide('fast');
    })

    $('#gender0').hover(function () {
        $('#Gender').show('fast');
        $('#Tot').hide('fast');
        $('#Disability').hide('fast');
        $('#Race').hide('fast');
        $('#Homo').hide('fast');
        $('#Jews').hide('fast');
    })

    $('#disab0').hover(function () {
        $('#Gender').hide('fast');
        $('#Tot').hide('fast');
        $('#Disability').show('fast');
        $('#Race').hide('fast');
        $('#Homo').hide('fast');
        $('#Jews').hide('fast');
    })

    $('#race0').hover(function () {
        $('#Gender').hide('fast');
        $('#Tot').hide('fast');
        $('#Disability').hide('fast');
        $('#Race').show('fast');
        $('#Homo').hide('fast');
        $('#Jews').hide('fast');
    })

    $('#homo0').hover(function () {
        $('#Gender').hide('fast');
        $('#Tot').hide('fast');
        $('#Disability').hide('fast');
        $('#Race').hide('fast');
        $('#Homo').show('fast');
        $('#Jews').hide('fast');
    })

    $('#jews0').hover(function () {
        $('#Gender').hide('fast');
        $('#Tot').hide('fast');
        $('#Disability').hide('fast');
        $('#Race').hide('fast');
        $('#Homo').hide('fast');
        $('#Jews').show('fast');

    })

    
    

    $('#index_motiv').hide();
    $('.gov0').hide();
    $('.gov1').hide();
    $('#italy').show();


    $("#req_motiv").click(function () {
        $('#index_requests').hide();
        $('#index_motiv').show();
        $('.gov0').hide();
        $('.gov1').hide();
        $('#italy1').show();
    })
    
        $("#motiv_requests").click(function () {
        $('#index_motiv').hide();
        $('#index_requests').show();
        $('.gov0').hide();
        $('.gov1').hide();
        $('#italy').show();
    })

        $("#req_italy").hover(function () {
        $('.gov0').hide();
        $('#italy').show();
    })
    
            $("#req_france").hover(function () {
        $('.gov0').hide();
        $('#france').show();
    })
    
            $("#req_germany").hover(function () {
        $('.gov0').hide();
        $('#germany').show();
    })
    
            $("#req_uk").hover(function () {
        $('.gov0').hide();
        $('#uk').show();
    })
    
            $("#req_turkey").hover(function () {
        $('.gov0').hide();
        $('#turkey').show();
    })
    
                $("#motiv_italy").hover(function () {
        $('.gov1').hide();
        $('#italy1').show();
    })
    
                $("#motiv_france").hover(function () {
        $('.gov1').hide();
        $('#france1').show();
    })
    
                $("#motiv_germany").hover(function () {
        $('.gov1').hide();
        $('#germany1').show();
    })
    
                $("#motiv_uk").hover(function () {
        $('.gov1').hide();
        $('#uk1').show();
    })
    
                $("#motiv_turkey").hover(function () {
        $('.gov1').hide();
        $('#turkey1').show();
    })
    

    
    
    

    $('#due').hide();
    
    $('#attacco').hover(function () {
        $('#due').show('fast');
        $('#uno').hide('fast');
    })
    

        $('#release').hover(function () {
        $('#due').hide('fast');
        $('#uno').show('fast');
    })   
    
    

    
    


    $('#mouseover_dati').hide();

    $('#post').mouseenter(function () {
        $('#mouseover_dati').show('fast');
    })

    $("#mouseover_dati").mouseleave(function () {
        $('#mouseover_dati').hide('fast');
    })
    
    
    $('#censored').hide();

    $('#smallrect').hover(function () {
        $('#censored').show('fast');
    })

    $('#bigrect').hover(function () {
        $('#censored').hide();
    })
    
    $('#censored').hover(function () {
        $('#censored').show();
    })



    //Chiudi document.ready    
})
