/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {


    // Default Map     
    $('#grid-country').hide();


    // Default Focus     
    $('.palle').hide();
    $('#palle-race').show();
    $(".button-focus").css({
        opacity: 0.5
    });
    $("#button-race").css({
        opacity: 1
    });


    // Map Reset con sfondo
    $('#grafico-mappa .reset').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').show();
        $('#grid-country').hide();
    })

    // Map Stato per stato
    $('#alabama-chart').hide();
    $('#alabama-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#alabama-chart').show();
        $('#grid-country').show();
    })

    $('#california-chart').hide();
    $('#california-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#california-chart').show();
        $('#grid-country').show();
    })

    $('#wisconsin-chart').hide();
    $('#wisconsin-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#wisconsin-chart').show();
        $('#grid-country').show();
    })

    $('#wyoming-chart').hide();
    $('#wyoming-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#wyoming-chart').show();
        $('#grid-country').show();
    })

    $('#westvirginia-chart').hide();
    $('#westvirginia-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#westvirginia-chart').show();
        $('#grid-country').show();
    })

    $('#washington-chart').hide();
    $('#washington-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#washington-chart').show();
        $('#grid-country').show();
    })

    $('#utah-chart').hide();
    $('#utah-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#utah-chart').show();
        $('#grid-country').show();
    })

    $('#virginia-chart').hide();
    $('#virginia-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#virginia-chart').show();
        $('#grid-country').show();
    })

    $('#vermont-chart').hide();
    $('#vermont-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#vermont-chart').show();
        $('#grid-country').show();
    })

    $('#texas-chart').hide();
    $('#texas-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#texas-chart').show();
        $('#grid-country').show();
    })

    $('#tennessee-chart').hide();
    $('#tennessee-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#tennessee-chart').show();
        $('#grid-country').show();
    })

    $('#southdakota-chart').hide();
    $('#southdakota-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#southdakota-chart').show();
        $('#grid-country').show();
    })

    $('#southcarolina-chart').hide();
    $('#southcarolina-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#southcarolina-chart').show();
        $('#grid-country').show();
    })

    $('#rhodeisland-chart').hide();
    $('#rhodeisland-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#rhodeisland-chart').show();
        $('#grid-country').show();
    })

    $('#pennsylvania-chart').hide();
    $('#pennsylvania-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#pennsylvania-chart').show();
        $('#grid-country').show();
    })

    $('#ohio-chart').hide();
    $('#ohio-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#ohio-chart').show();
        $('#grid-country').show();
    })

    $('#oregon-chart').hide();
    $('#oregon-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#oregon-chart').show();
        $('#grid-country').show();
    })

    $('#oklahoma-chart').hide();
    $('#oklahoma-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#oklahoma-chart').show();
        $('#grid-country').show();
    })

    $('#northdakota-chart').hide();
    $('#northdakota-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#northdakota-chart').show();
        $('#grid-country').show();
    })

    $('#northcarolina-chart').hide();
    $('#northcarolina-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#northcarolina-chart').show();
        $('#grid-country').show();
    })

    $('#newyork-chart').hide();
    $('#newyork-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#newyork-chart').show();
        $('#grid-country').show();
    })

    $('#newmexico-chart').hide();
    $('#newmexico-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#newmexico-chart').show();
        $('#grid-country').show();
    })

    $('#newjersey-chart').hide();
    $('#newjersey-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#newjersey-chart').show();
        $('#grid-country').show();
    })

    $('#newhampshire-chart').hide();
    $('#newhampshire-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#newhampshire-chart').show();
        $('#grid-country').show();
    })

    $('#nevada-chart').hide();
    $('#nevada-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#nevada-chart').show();
        $('#grid-country').show();
    })

    $('#nebraska-chart').hide();
    $('#nebraska-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#nebraska-chart').show();
        $('#grid-country').show();
    })

    $('#montana-chart').hide();
    $('#montana-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#montana-chart').show();
        $('#grid-country').show();
    })

    $('#missouri-chart').hide();
    $('#missouri-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#missouri-chart').show();
        $('#grid-country').show();
    })

    $('#mississippi-chart').hide();
    $('#mississippi-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#mississippi-chart').show();
        $('#grid-country').show();
    })

    $('#minnesota-chart').hide();
    $('#minnesota-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#minnesota-chart').show();
        $('#grid-country').show();
    })

    $('#michigan-chart').hide();
    $('#michigan-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#michigan-chart').show();
        $('#grid-country').show();
    })

    $('#massachussettes-chart').hide();
    $('#massachussettes-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#massachussettes-chart').show();
        $('#grid-country').show();
    })

    $('#maryland-chart').hide();
    $('#maryland-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#maryland-chart').show();
        $('#grid-country').show();
    })

    $('#maine-chart').hide();
    $('#maine-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#maine-chart').show();
        $('#grid-country').show();
    })

    $('#louisiana-chart').hide();
    $('#louisiana-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#louisiana-chart').show();
        $('#grid-country').show();
    })

    $('#kentuchy-chart').hide();
    $('#kentuchy-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#kentuchy-chart').show();
        $('#grid-country').show();
    })

    $('#kansas-chart').hide();
    $('#kansas-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#kansas-chart').show();
        $('#grid-country').show();
    })

    $('#iowa-chart').hide();
    $('#iowa-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#iowa-chart').show();
        $('#grid-country').show();
    })

    $('#indiana-chart').hide();
    $('#indiana-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#indiana-chart').show();
        $('#grid-country').show();
    })

    $('#illinois-chart').hide();
    $('#illinois-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#illinois-chart').show();
        $('#grid-country').show();
    })

    $('#idaho-chart').hide();
    $('#idaho-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#idaho-chart').show();
        $('#grid-country').show();
    })

    $('#hawaii-chart').hide();
    $('#hawaii-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#hawaii-chart').show();
        $('#grid-country').show();
    })

    $('#georgia-chart').hide();
    $('#georgia-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#georgia-chart').show();
        $('#grid-country').show();
    })

    $('#florida-chart').hide();
    $('#florida-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#florida-chart').show();
        $('#grid-country').show();
    })

    $('#district-chart').hide();
    $('#district-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#district-chart').show();
        $('#grid-country').show();
    })

    $('#delaware-chart').hide();
    $('#delaware-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#delaware-chart').show();
        $('#grid-country').show();
    })

    $('#connecticut-chart').hide();
    $('#connecticut-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#connecticut-chart').show();
        $('#grid-country').show();
    })

    $('#colorado-chart').hide();
    $('#colorado-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#colorado-chart').show();
        $('#grid-country').show();
    })

    $('#arkansas-chart').hide();
    $('#arkansas-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#arkansas-chart').show();
        $('#grid-country').show();
    })

    $('#alaska-chart').hide();
    $('#alaska-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#alaska-chart').show();
        $('#grid-country').show();
    })


    $('#arizona-chart').hide();
    $('#arizona-map').hover(function () {
        console.log('hover');
        $('#grafico-mappa .bar-chart').hide();
        $('#bars-all').hide();
        $('#arizona-chart').show();
        $('#grid-country').show();
    })


    //Focus Fondazione Gruppi

    $('#palle-religion').hide();
    $('#button-religion').click(function () {
        console.log('click');
        $('.palle').hide();
        $('#palle-religion').show();
        $(".button-focus").css({
            opacity: 0.5
        });
        $("#button-religion").css({
            opacity: 1
        });

    })

    $('#palle-lgbt').hide();
    $('#button-lgbt').click(function () {
        console.log('click');
        $('.palle').hide();
        $('#palle-lgbt').show();
        $(".button-focus").css({
            opacity: 0.5
        });
        $("#button-lgbt").css({
            opacity: 1
        });
    })

    $('#palle-other').hide();
    $('#button-other').click(function () {
        console.log('click');
        $('.palle').hide();
        $('#palle-other').show();
        $(".button-focus").css({
            opacity: 0.5
        });
        $("#button-other").css({
            opacity: 1
        });
    })

    $('#button-race').click(function () {
        console.log('click');
        $('.palle').hide();
        $('#palle-race').show();
        $(".button-focus").css({
            opacity: 0.5
        });
        $("#button-race").css({
            opacity: 1
        });
    })



    //Chiudi document.ready    
})
