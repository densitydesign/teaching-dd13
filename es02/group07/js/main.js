/*Click Function Question2*/
/*USA*/
jQuery('#q2svg1-us-trigger-books').on('click', function() {
 if (jQuery('.q2svg1-us-bookslist').hasClass('q2svg1-us-color')) {
   $('.q2svg1-us-bookslist').removeClass('q2svg1-us-color');
  }
  else
  {
   $('.q2svg1-us-bookslist').addClass('q2svg1-us-color');
  }

});

jQuery('#q2svg1-us-trigger-news').on('click', function() {
 if (jQuery('.q2svg1-us-newslist').hasClass('q2svg1-us-colornews')) {
   $('.q2svg1-us-newslist').removeClass('q2svg1-us-colornews');
  }
  else
  {
   $('.q2svg1-us-newslist').addClass('q2svg1-us-colornews');
  }

});

jQuery('#q2svg1-us-trigger-video').on('click', function() {
 if (jQuery('.q2svg1-us-videolist').hasClass('q2svg1-us-colorvideo')) {
   $('.q2svg1-us-videolist').removeClass('q2svg1-us-colorvideo');
  }
  else
  {
   $('.q2svg1-us-videolist').addClass('q2svg1-us-colorvideo');
  }

});

/*CHINA*/
jQuery('#q2svg1-china-trigger-books').on('click', function() {
 if (jQuery('.q2svg1-china-bookslist').hasClass('q2svg1-china-color')) {
   $('.q2svg1-china-bookslist').removeClass('q2svg1-china-color');
  }
  else
  {
   $('.q2svg1-china-bookslist').addClass('q2svg1-china-color');
  }

});

jQuery('#q2svg1-china-trigger-news').on('click', function() {
 if (jQuery('.q2svg1-china-newslist').hasClass('q2svg1-china-colornews')) {
   $('.q2svg1-china-newslist').removeClass('q2svg1-china-colornews');
  }
  else
  {
   $('.q2svg1-china-newslist').addClass('q2svg1-china-colornews');
  }

});

jQuery('#q2svg1-china-trigger-video').on('click', function() {
 if (jQuery('.q2svg1-china-videolist').hasClass('q2svg1-china-colorvideo')) {
   $('.q2svg1-china-videolist').removeClass('q2svg1-china-colorvideo');
  }
  else
  {
   $('.q2svg1-china-videolist').addClass('q2svg1-china-colorvideo');
  }

});


/*Click Function Question4 -scatter*/

jQuery('#q4svg-news-trigger').on('click', function() {
 if (jQuery('.q4svg-news-list').hasClass('q4svg-news-color')) {
   $('.q4svg-news-list').removeClass('q4svg-news-color');
  }
  else
  {
   $('.q4svg-news-list').addClass('q4svg-news-color');
  }

});


jQuery('#q4svg-videos-trigger').on('click', function() {
 if (jQuery('.q4svg-videos-list').hasClass('q4svg-videos-color')) {
   $('.q4svg-videos-list').removeClass('q4svg-videos-color');
  }
  else
  {
   $('.q4svg-videos-list').addClass('q4svg-videos-color');
  }

});

jQuery('#q4svg-books-trigger').on('click', function() {
 if (jQuery('.q4svg-books-list').hasClass('q4svg-books-color')) {
   $('.q4svg-books-list').removeClass('q4svg-books-color');
  }
  else
  {
   $('.q4svg-books-list').addClass('q4svg-books-color');
  }

});


/*China Part Scatter*/
jQuery('#q4svg-newschina-trigger').on('click', function() {
 if (jQuery('.q4svg-newschina-list').hasClass('q4svg-news-color')) {
   $('.q4svg-newschina-list').removeClass('q4svg-news-color');
  }
  else
  {
   $('.q4svg-newschina-list').addClass('q4svg-news-color');
  }

});


jQuery('#q4svg-videoschina-trigger').on('click', function() {
 if (jQuery('.q4svg-videoschina-list').hasClass('q4svg-videos-color')) {
   $('.q4svg-videoschina-list').removeClass('q4svg-videos-color');
  }
  else
  {
   $('.q4svg-videoschina-list').addClass('q4svg-videos-color');
  }

});

jQuery('#q4svg-bookschina-trigger').on('click', function() {
 if (jQuery('.q4svg-bookschina-list').hasClass('q4svg-books-color')) {
   $('.q4svg-bookschina-list').removeClass('q4svg-books-color');
  }
  else
  {
   $('.q4svg-bookschina-list').addClass('q4svg-books-color');
  }

});


/* opacity treemap 2 quest */

$("#q2treemap-us-opacity").hover(function () {
    $("#q2treemap-us-opacity").css('opacity', .3);
}, function () {
    $("#q2treemap-us-opacity").css('opacity', 0);
});


$("#q2treemap-china-hover").hover(function () {
    $("#q2treemap-china-hover").css('opacity', .3);
}, function () {
    $("#q2treemap-china-hover").css('opacity', 0);
});

/*NEWS*/
/*N1-Treemap*/
/*Title -1stTreemap*/
jQuery('#sk-title-inizio').on('click', function() {
 if (jQuery('.n1svg-titletrigger-sk').hasClass('n1svg-title-sk')) {
   $('.n1svg-titletrigger-sk').addClass('n1svg-titletrigger');
  }
  else
  {
   $('.n1svg-titletrigger-sk').removeClass('n1svg-titletrigger');
  }

});

jQuery('#china-title-inizio').on('click', function() {
 if (jQuery('.n1svg-titletrigger-china').hasClass('n1svg-title-china')) {
   $('.n1svg-titletrigger-china').addClass('n1svg-titletrigger');
  }
  else
  {
   $('.n1svg-titletrigger-china').removeClass('n1svg-titletrigger');
  }

});

jQuery('#usa-title-inizio').on('click', function() {
 if (jQuery('.n1svg-titletrigger-usa').hasClass('n1svg-title-usa')) {
   $('.n1svg-titletrigger-usa').addClass('n1svg-titletrigger');
  }
  else
  {
   $('.n1svg-titletrigger-usa').removeClass('n1svg-titletrigger');
  }

});

jQuery('#japan-title-inizio').on('click', function() {
 if (jQuery('.n1svg-titletrigger-japan').hasClass('n1svg-title-japan')) {
   $('.n1svg-titletrigger-japan').addClass('n1svg-titletrigger');
  }
  else
  {
   $('.n1svg-titletrigger-japan').removeClass('n1svg-titletrigger');
  }

});

jQuery('#other-title-inizio').on('click', function() {
 if (jQuery('.n1svg-titletrigger-other').hasClass('n1svg-title-other')) {
   $('.n1svg-titletrigger-other').addClass('n1svg-titletrigger');
  }
  else
  {
   $('.n1svg-titletrigger-other').removeClass('n1svg-titletrigger');
  }

});

jQuery('#uk-title-inizio').on('click', function() {
 if (jQuery('.n1svg-titletrigger-uk').hasClass('n1svg-title-uk')) {
   $('.n1svg-titletrigger-uk').addClass('n1svg-titletrigger');
  }
  else
  {
   $('.n1svg-titletrigger-uk').removeClass('n1svg-titletrigger');
  }

});

jQuery('#india-title-inizio').on('click', function() {
 if (jQuery('.n1svg-titletrigger-india').hasClass('n1svg-title-india')) {
   $('.n1svg-titletrigger-india').addClass('n1svg-titletrigger');
  }
  else
  {
   $('.n1svg-titletrigger-india').removeClass('n1svg-titletrigger');
  }

});

jQuery('#ire-title-inizio').on('click', function() {
 if (jQuery('.n1svg-titletrigger-ire').hasClass('n1svg-title-ire')) {
   $('.n1svg-titletrigger-ire').addClass('n1svg-titletrigger');
  }
  else
  {
   $('.n1svg-titletrigger-ire').removeClass('n1svg-titletrigger');
  }

});

/*Hover Treemap1*/
$('.n1svg-he-trigger').hover(function() {
  $('.n1svg-hr, .n1svg-re, .n1svg-life, .n1svg-oth, .n1svg-wa, .n1svg-po, .n1svg-ar, .n1svg-life, .n1svg-title-hr, .n1svg-title-po, .n1svg-title-life, .n1svg-title-wa').addClass('n1svg-fillcambio');
}, function(){
  $('.n1svg-hr, .n1svg-re, .n1svg-life, .n1svg-oth, .n1svg-wa, .n1svg-po, .n1svg-ar, .n1svg-life, .n1svg-title-hr, .n1svg-title-po, .n1svg-title-life, .n1svg-title-wa').removeClass('n1svg-fillcambio');
})

$('.n1svg-hr-trigger').hover(function() {
  $('.n1svg-he, .n1svg-re, .n1svg-life, .n1svg-oth, .n1svg-wa, .n1svg-po, .n1svg-ar, .n1svg-life, .n1svg-title-he, .n1svg-title-po, .n1svg-title-life, .n1svg-title-wa').addClass('n1svg-fillcambio');
}, function(){
  $('.n1svg-he, .n1svg-re, .n1svg-life, .n1svg-oth, .n1svg-wa, .n1svg-po, .n1svg-ar, .n1svg-life, .n1svg-title-he, .n1svg-title-po, .n1svg-title-life, .n1svg-title-wa').removeClass('n1svg-fillcambio');
})

$('.n1svg-so-trigger').hover(function() {
  $('.n1svg-he, .n1svg-re, .n1svg-hr, .n1svg-oth, .n1svg-wa, .n1svg-po, .n1svg-ar, .n1svg-hr, .n1svg-title-he, .n1svg-title-po, .n1svg-title-hr, .n1svg-title-wa').addClass('n1svg-fillcambio');
}, function(){
  $('.n1svg-he, .n1svg-re, .n1svg-hr, .n1svg-oth, .n1svg-wa, .n1svg-po, .n1svg-ar, .n1svg-hr, .n1svg-title-he, .n1svg-title-po, .n1svg-title-hr, .n1svg-title-wa').removeClass('n1svg-fillcambio');
})

$('.n1svg-po-trigger').hover(function() {
  $('.n1svg-he, .n1svg-re, .n1svg-hr, .n1svg-oth, .n1svg-wa, .n1svg-life, .n1svg-ar, .n1svg-hr, .n1svg-title-he, .n1svg-title-life, .n1svg-title-hr, .n1svg-title-wa').addClass('n1svg-fillcambio');
}, function(){
  $('.n1svg-he, .n1svg-re, .n1svg-hr, .n1svg-oth, .n1svg-wa, .n1svg-life, .n1svg-ar, .n1svg-hr, .n1svg-title-he, .n1svg-title-,life, .n1svg-title-hr, .n1svg-title-wa').removeClass('n1svg-fillcambio');
})

$('.n1svg-ar-trigger').hover(function() {
  $('.n1svg-he, .n1svg-re, .n1svg-hr, .n1svg-oth, .n1svg-wa, .n1svg-life, .n1svg-po, .n1svg-hr, .n1svg-title-he, .n1svg-title-life, .n1svg-title-hr, .n1svg-title-wa, .n1svg-title-po').addClass('n1svg-fillcambio');
}, function(){
  $('.n1svg-he, .n1svg-re, .n1svg-hr, .n1svg-oth, .n1svg-wa, .n1svg-life, .n1svg-po, .n1svg-hr, .n1svg-title-he, .n1svg-title-,life, .n1svg-title-hr, .n1svg-title-wa, .n1svg-title-po').removeClass('n1svg-fillcambio');
})

$('.n1svg-re-trigger').hover(function() {
  $('.n1svg-he, .n1svg-ar, .n1svg-hr, .n1svg-oth, .n1svg-wa, .n1svg-life, .n1svg-po, .n1svg-hr, .n1svg-title-he, .n1svg-title-life, .n1svg-title-hr, .n1svg-title-wa, .n1svg-title-po').addClass('n1svg-fillcambio');
}, function(){
  $('.n1svg-he, .n1svg-ar, .n1svg-hr, .n1svg-oth, .n1svg-wa, .n1svg-life, .n1svg-po, .n1svg-hr, .n1svg-title-he, .n1svg-title-,life, .n1svg-title-hr, .n1svg-title-wa, .n1svg-title-po').removeClass('n1svg-fillcambio');
})

$('.n1svg-wa-trigger').hover(function() {
  $('.n1svg-he, .n1svg-ar, .n1svg-hr, .n1svg-oth, .n1svg-re, .n1svg-life, .n1svg-po, .n1svg-hr, .n1svg-title-he, .n1svg-title-life, .n1svg-title-hr, .n1svg-title-po').addClass('n1svg-fillcambio');
}, function(){
  $('.n1svg-he, .n1svg-ar, .n1svg-hr, .n1svg-oth, .n1svg-re, .n1svg-life, .n1svg-po, .n1svg-hr, .n1svg-title-he, .n1svg-title-,life, .n1svg-title-hr, .n1svg-title-po').removeClass('n1svg-fillcambio');
})

$('.n1svg-oth-trigger').hover(function() {
  $('.n1svg-he, .n1svg-ar, .n1svg-hr, .n1svg-wa, .n1svg-re, .n1svg-life, .n1svg-po, .n1svg-hr, .n1svg-title-he, .n1svg-title-life, .n1svg-title-hr, .n1svg-title-po').addClass('n1svg-fillcambio');
}, function(){
  $('.n1svg-he, .n1svg-ar, .n1svg-hr, .n1svg-wa, .n1svg-re, .n1svg-life, .n1svg-po, .n1svg-hr, .n1svg-title-he, .n1svg-title-,life, .n1svg-title-hr, .n1svg-title-po').removeClass('n1svg-fillcambio');
})


/*Articles -2ndTreemap*/
jQuery('#sk-article-inizio').on('click', function() {
 if (jQuery('.n1svg-articletrigger-sk').hasClass('n1svg-article-sk')) {
   $('.n1svg-articletrigger-sk').addClass('n1svg-titletrigger');
  }
  else
  {
   $('.n1svg-articletrigger-sk').removeClass('n1svg-titletrigger');
  }

});

jQuery('#china-article-inizio').on('click', function() {
 if (jQuery('.n1svg-articletrigger-china').hasClass('n1svg-article-china')) {
   $('.n1svg-articletrigger-china').addClass('n1svg-titletrigger');
  }
  else
  {
   $('.n1svg-articletrigger-china').removeClass('n1svg-titletrigger');
  }

});

jQuery('#usa-article-inizio').on('click', function() {
 if (jQuery('.n1svg-articletrigger-usa').hasClass('n1svg-article-usa')) {
   $('.n1svg-articletrigger-usa').addClass('n1svg-titletrigger');
  }
  else
  {
   $('.n1svg-articletrigger-usa').removeClass('n1svg-titletrigger');
  }

});

jQuery('#japan-article-inizio').on('click', function() {
 if (jQuery('.n1svg-articletrigger-japan').hasClass('n1svg-article-japan')) {
   $('.n1svg-articletrigger-japan').addClass('n1svg-titletrigger');
  }
  else
  {
   $('.n1svg-articletrigger-japan').removeClass('n1svg-titletrigger');
  }

});

jQuery('#other-article-inizio').on('click', function() {
 if (jQuery('.n1svg-articletrigger-other').hasClass('n1svg-article-other')) {
   $('.n1svg-articletrigger-other').addClass('n1svg-titletrigger');
  }
  else
  {
   $('.n1svg-articletrigger-other').removeClass('n1svg-titletrigger');
  }

});

jQuery('#uk-article-inizio').on('click', function() {
 if (jQuery('.n1svg-articletrigger-uk').hasClass('n1svg-article-uk')) {
   $('.n1svg-articletrigger-uk').addClass('n1svg-titletrigger');
  }
  else
  {
   $('.n1svg-articletrigger-uk').removeClass('n1svg-titletrigger');
  }

});

jQuery('#india-article-inizio').on('click', function() {
 if (jQuery('.n1svg-articletrigger-india').hasClass('n1svg-article-india')) {
   $('.n1svg-articletrigger-india').addClass('n1svg-titletrigger');
  }
  else
  {
   $('.n1svg-articletrigger-india').removeClass('n1svg-titletrigger');
  }

});

jQuery('#ire-article-inizio').on('click', function() {
 if (jQuery('.n1svg-articletrigger-ire').hasClass('n1svg-article-ire')) {
   $('.n1svg-articletrigger-ire').addClass('n1svg-titletrigger');
  }
  else
  {
   $('.n1svg-articletrigger-ire').removeClass('n1svg-titletrigger');
  }

});

/*news-domanda-2 // hover rosso */
$('#n2svg-bargrande, #n2svg-barchinagrande').hover(function() {
 $(".n2svg-chus-31").css('opacity', 0.5);
}, function () {
  $('.n2svg-chus-31').css('opacity', 1);
})

/*news-domanda-2 // hover barpiccola */
$('#n2svg-barsmall-title-hr').hover(function() {
  $('.bar-war').css('opacity', 0.2);
}, function(){
  $('.bar-war').css('opacity', 1);
})

$('#n2svg-barsmall-title-so').hover(function() {
  $(".bar-war, .bar-heal, .bar-hr-red2").css('opacity', 0.2);
}, function(){
  $(".bar-war, .bar-heal, .bar-hr-red2").css('opacity', 1);
})

$('#n2svg-barsmall-title-wa').hover(function() {
  $(".bar-hr, .bar-life, .bar-tech, .bar-hr-red, .bar-hr-red2, .bar-hrblue").css('opacity', 0.2);
}, function() {
  $(".bar-hr, .bar-life, .bar-tech, .bar-hr-red, .bar-hr-red2, .bar-hrblue").css('opacity', 1);
})

$('#n2svg-barsmall-title-te').hover(function() {
  $(".bar-war, .bar-heal, .bar-hr-red, .bar-hr-red2").css('opacity', 0.2);
}, function() {
  $(".bar-war, .bar-heal, .bar-hr-red, .bar-hr-red2").css('opacity', 1);
})

$('#n2svg-barsmall-title-he').hover(function() {
  $(".bar-war, .bar-pol, .bar-tech, .bar-life, .bar-hr-red, .bar-hrblue").css('opacity', 0.2);
}, function() {
  $(".bar-war, .bar-pol, .bar-tech, .bar-life, .bar-hr-red, .bar-hrblue").css('opacity', 1);
})

$('#n2svg-barsmall-title-po').hover(function() {
  $(".bar-heal, .bar-hr-red, .bar-hr-red2").css('opacity', 0.2);
}, function() {
  $(".bar-heal, .bar-hr-red, .bar-hr-red2").css('opacity', 1);
})


/*news domanda 2 / Grafico Cina*/
$('#n2svg-barchinasmall-titles-hr').hover(function() {
  $(".bar-ch-tech").css('opacity', 0.2);
}, function () {
  $(".bar-ch-tech").css('opacity', 1);
})

$('#n2svg-barchinasmall-titles-so').hover(function() {
  $(".bar-ch-tech").css('opacity', 0.2);
}, function () {
  $(".bar-ch-tech").css('opacity', 1);
})

$('#n2svg-barchinasmall-titles-wa').hover(function() {
  $(".bar-ch-tech").css('opacity', 0.2);
}, function () {
  $(".bar-ch-tech").css('opacity', 1);
})

$('#n2svg-barchinasmall-titles-te').hover(function() {
  $(".bar-ch-po, .bar-ch-hr, .bar-ch-wa, .bar-ch-life, .bar-ch-brown, .bar-ch-hrred, .bar-ch-hrblue").css('opacity', 0.2);
}, function () {
  $(".bar-ch-po, .bar-ch-hr, .bar-ch-wa, .bar-ch-life, .bar-ch-brown, .bar-ch-hrred, .bar-ch-hrblue").css('opacity', 1);
})


/*pattern_colore*/
jQuery('.st2-pers').on('click', function() {
 if (jQuery('.n3svg-imm-pers').hasClass('st1')) {
   $('.n3svg-imm-pers').removeClass('st1');
   $(".n3svg-imm-kim, .n3svg-imm-land, .n3svg-imm-group, .n3svg-imm-rapr").addClass('st1');
  }
  else
  {
   $('.n3svg-imm-pers').addClass('st1');
  }

});

jQuery('.st2-groups').on('click', function() {
 if (jQuery('.n3svg-imm-group').hasClass('st1')) {
   $('.n3svg-imm-group').removeClass('st1');
   $(".n3svg-imm-kim, .n3svg-imm-land, .n3svg-imm-rapr, .n3svg-imm-pers").addClass('st1');
  }
  else
  {
   $('.n3svg-imm-group').addClass('st1');
  }

});

jQuery('.st2-land').on('click', function() {
 if (jQuery('.n3svg-imm-land').hasClass('st1')) {
   $('.n3svg-imm-land').removeClass('st1');
   $(".n3svg-imm-kim, .n3svg-imm-rapr, .n3svg-imm-group, .n3svg-imm-pers").addClass('st1');
  }
  else
  {
   $('.n3svg-imm-land').addClass('st1');
  }

});

jQuery('.st2-kim').on('click', function() {
 if (jQuery('.n3svg-imm-kim').hasClass('st1')) {
   $('.n3svg-imm-kim').removeClass('st1');
   $(".n3svg-imm-rapr, .n3svg-imm-land, .n3svg-imm-group, .n3svg-imm-pers").addClass('st1');
  }
  else
  {
   $('.n3svg-imm-kim').addClass('st1');
  }

});

jQuery('.st2-repr').on('click', function() {
 if (jQuery('.n3svg-imm-rapr').hasClass('st1')) {
   $('.n3svg-imm-rapr').removeClass('st1');
   $(".n3svg-imm-kim, .n3svg-imm-land, .n3svg-imm-group, .n3svg-imm-pers").addClass('st1');
  }
  else
  {
   $('.n3svg-imm-rapr').addClass('st1');
  }

});


$(".n3svg-group-trigger-usa").hover(function () {
    $("#n3svg-pattern-usadopo-group").css('opacity', 1);
    $("#n3svg-pattern-chinadopo-group").css('opacity',1);
    $("#n3svg-imm-pers").removeClass('st2');
}, function () {
    $("#n3svg-pattern-usadopo-group").css('opacity', 0);
    $("#n3svg-pattern-chinadopo-group").css('opacity',0);
});

$(".n3svg-people-trigger-usa").hover(function () {
    $("#n3svg-pattern-usadopo-people").css('opacity', 1);
    $("#n3svg-pattern-chinadopo-people").css('opacity',1);
    $("#n3svg-imm-pers").removeClass('st2');
}, function () {
    $("#n3svg-pattern-usadopo-people").css('opacity', 0);
    $("#n3svg-pattern-chinadopo-people").css('opacity',0);
});

$(".n3svg-other-trigger-usa").hover(function () {
    $("#n3svg-pattern-usadopo-other").css('opacity', 1);
    $("#n3svg-pattern-chinadopo-other").css('opacity',1);
    $("#n3svg-imm-pers").removeClass('st2');
}, function () {
    $("#n3svg-pattern-usadopo-other").css('opacity', 0);
    $("#n3svg-pattern-chinadopo-other").css('opacity',0);
});

$(".n3svg-landscapes-trigger-usa").hover(function () {
    $("#n3svg-pattern-usadopo-landscapes").css('opacity', 1);
    $("#n3svg-pattern-chinadopo-landscape").css('opacity',1);
    $("#n3svg-imm-pers").removeClass('st2');
}, function () {
    $("#n3svg-pattern-usadopo-landscapes").css('opacity', 0);
    $("#n3svg-pattern-chinadopo-landscape").css('opacity',0);
});

$(".n3svg-kim-trigger-usa").hover(function () {
    $("#n3svg-pattern-usadopo-kim").css('opacity', 1);
    $("#n3svg-pattern-chinadopo-kim").css('opacity',1);
    $("#n3svg-imm-pers").removeClass('st2');
}, function () {
    $("#n3svg-pattern-usadopo-kim").css('opacity', 0);
    $("#n3svg-pattern-chinadopo-kim").css('opacity',0);
});

$(".n3svg-places-trigger-usa").hover(function () {
    $("#n3svg-pattern-usadopo-places").css('opacity', 1);
    $("#n3svg-pattern-chinadopo-places").css('opacity',1);
    $("#n3svg-imm-pers").removeClass('st2');
}, function () {
    $("#n3svg-pattern-usadopo-places").css('opacity', 0);
    $("#n3svg-pattern-chinadopo-places").css('opacity',0);
});

$(".n3svg-representation-trigger-usa").hover(function () {
    $("#n3svg-pattern-usadopo-representation").css('opacity', 1);
    $("#n3svg-pattern-chinadopo-representations").css('opacity',1);
    $("#n3svg-imm-pers").removeClass('st2');
}, function () {
    $("#n3svg-pattern-usadopo-representation").css('opacity', 0);
    $("#n3svg-pattern-chinadopo-representations").css('opacity',0);
});




/* color change video tree us quest 9*/

$("#v9svg-us-groupoth").hover(function () {
     $("#v9svg-us-groupoth-ret").removeClass("v9svg-chus-1");
    $("#v9svg-us-groupoth-ret").addClass("changecolor-v");
    $("#v9svg-us-hided-oth").css('opacity', 1);
}, function () {
    $("#v9svg-us-groupoth-ret").removeClass("changecolor-v");
    $("#v9svg-us-hided-oth").css('opacity', 0);
    $("#v9svg-us-groupoth-ret").addClass("v9svg-chus-1");
});

$("#v9svg-us-grouphot").hover(function () {
     $("#v9svg-us-grouphot-ret").removeClass("v9svg-chus-1");
    $("#v9svg-us-grouphot-ret").addClass("changecolor-v");
    $("#v9svg-us-hided-hot").css('opacity', 1);
}, function () {
    $("#v9svg-us-grouphot-ret").removeClass("changecolor-v");
    $("#v9svg-us-hided-hot").css('opacity', 0);
    $("#v9svg-us-grouphot-ret").addClass("v9svg-chus-1");
});

$("#v9svg-us-groupbus").hover(function () {
     $("#v9svg-us-groupbus-ret").removeClass("v9svg-chus-1");
    $("#v9svg-us-groupbus-ret").addClass("changecolor-v");
    $("#v9svg-us-hided-bus").css('opacity', 1);
}, function () {
    $("#v9svg-us-groupbus-ret").removeClass("changecolor-v");
    $("#v9svg-us-hided-bus").css('opacity', 0);
    $("#v9svg-us-groupbus-ret").addClass("v9svg-chus-1");
});

$("#v9svg-us-groupfox").hover(function () {
     $("#v9svg-us-groupfox-ret").removeClass("v9svg-chus-1");
    $("#v9svg-us-groupfox-ret").addClass("changecolor-v");
    $("#v9svg-us-hided-fox").css('opacity', 1);
}, function () {
    $("#v9svg-us-groupfox-ret").removeClass("changecolor-v");
    $("#v9svg-us-hided-fox").css('opacity', 0);
    $("#v9svg-us-groupfox-ret").addClass("v9svg-chus-1");
});

$("#v9svg-us-grouptod").hover(function () {
     $("#v9svg-us-grouptod-ret").removeClass("v9svg-chus-1");
    $("#v9svg-us-grouptod-ret").addClass("changecolor-v");
    $("#v9svg-us-hided-tod").css('opacity', 1);
}, function () {
    $("#v9svg-us-grouptod-ret").removeClass("changecolor-v");
    $("#v9svg-us-hided-tod").css('opacity', 0);
    $("#v9svg-us-grouptod-ret").addClass("v9svg-chus-1");
});

$("#v9svg-us-groupkang").hover(function () {
     $("#v9svg-us-groupkang-ret").removeClass("v9svg-chus-1");
    $("#v9svg-us-groupkang-ret").addClass("changecolor-v");
    $("#v9svg-us-hided-kang").css('opacity', 1);
}, function () {
    $("#v9svg-us-groupkang-ret").removeClass("changecolor-v");
    $("#v9svg-us-hided-kang").css('opacity', 0);
    $("#v9svg-us-groupkang-ret").addClass("v9svg-chus-1");
});

$("#v9svg-us-groupu2").hover(function () {
     $("#v9svg-us-groupu2-ret").removeClass("v9svg-chus-1");
    $("#v9svg-us-groupu2-ret").addClass("changecolor-v");
    $("#v9svg-us-hided-un2").css('opacity', 1);
}, function () {
    $("#v9svg-us-groupu2-ret").removeClass("changecolor-v");
    $("#v9svg-us-hided-un2").css('opacity', 0);
    $("#v9svg-us-groupu2-ret").addClass("v9svg-chus-1");
});

$("#v9svg-us-groupari").hover(function () {
     $("#v9svg-us-groupari-ret").removeClass("v9svg-chus-1");
    $("#v9svg-us-groupari-ret").addClass("changecolor-v");
    $("#v9svg-us-hided-ari").css('opacity', 1);
}, function () {
    $("#v9svg-us-groupari-ret").removeClass("changecolor-v");
    $("#v9svg-us-hided-ari").css('opacity', 0);
    $("#v9svg-us-groupari-ret").addClass("v9svg-chus-1");
});

$("#v9svg-us-groupasian").hover(function () {
     $("#v9svg-us-groupasian-ret").removeClass("v9svg-chus-1");
    $("#v9svg-us-groupasian-ret").addClass("changecolor-v");
    $("#v9svg-us-hided-asian").css('opacity', 1);
}, function () {
    $("#v9svg-us-groupasian-ret").removeClass("changecolor-v");
    $("#v9svg-us-hided-asian").css('opacity', 0);
    $("#v9svg-us-groupasian-ret").addClass("v9svg-chus-1");
});

$("#v9svg-us-groupnew").hover(function () {
     $("#v9svg-us-groupnew-ret").removeClass("v9svg-chus-1");
    $("#v9svg-us-groupnew-ret").addClass("changecolor-v");
    $("#v9svg-us-hided-news").css('opacity', 1);
}, function () {
    $("#v9svg-us-groupnew-ret").removeClass("changecolor-v");
    $("#v9svg-us-hided-news").css('opacity', 0);
    $("#v9svg-us-groupnew-ret").addClass("v9svg-chus-1");
});

$("#v9svg-us-groupwo").hover(function () {
     $("#v9svg-us-groupwo-ret").removeClass("v9svg-chus-1");
    $("#v9svg-us-groupwo-ret").addClass("changecolor-v");
    $("#v9svg-us-hided-who").css('opacity', 1);
}, function () {
    $("#v9svg-us-groupwo-ret").removeClass("changecolor-v");
    $("#v9svg-us-hided-who").css('opacity', 0);
    $("#v9svg-us-groupwo-ret").addClass("v9svg-chus-1");
});


/* color change video us quest 8*/

$("#v8svg-us-groupamat").hover(function () {
     $("#v8svg-us-groupamat-ret").removeClass("v8svg-usch-1");
    $("#v8svg-us-groupamat-ret").addClass("changecolor-v");
    $("#v8svg-ch-hided-ama").css('opacity', 1);
}, function () {
    $("#v8svg-us-groupamat-ret").removeClass("changecolor-v");
    $("#v8svg-ch-hided-ama").css('opacity', 0);
    $("#v8svg-us-groupamat-ret").addClass("v8svg-usch-1");
});


$("#v8svg-us-grouprep").hover(function () {
     $("#v8svg-us-grouprep-ret").removeClass("v8svg-usch-1");
    $("#v8svg-us-grouprep-ret").addClass("changecolor-v");
    $("#v8svg-ch-hided-rep").css('opacity', 1);
}, function () {
    $("#v8svg-us-grouprep-ret").removeClass("changecolor-v");
    $("#v8svg-ch-hided-rep").css('opacity', 0);
    $("#v8svg-us-grouprep-ret").addClass("v8svg-usch-1");
});

$("#v8svg-us-groupint").hover(function () {
     $("#v8svg-us-groupint-ret").removeClass("v8svg-usch-1");
    $("#v8svg-us-groupint-ret").addClass("changecolor-v");
    $("#v8svg-ch-hided-int").css('opacity', 1);
}, function () {
    $("#v8svg-us-groupint-ret").removeClass("changecolor-v");
    $("#v8svg-ch-hided-int").css('opacity', 0);
    $("#v8svg-us-groupint-ret").addClass("v8svg-usch-1");
});

$("#v8svg-us-groupvlog").hover(function () {
     $("#v8svg-us-groupvlog-ret").removeClass("v8svg-usch-1");
    $("#v8svg-us-groupvlog-ret").addClass("changecolor-v");
    $("#v8svg-ch-hided-vlog").css('opacity', 1);
}, function () {
    $("#v8svg-us-groupvlog-ret").removeClass("changecolor-v");
    $("#v8svg-ch-hided-vlog").css('opacity', 0);
    $("#v8svg-us-groupvlog-ret").addClass("v8svg-usch-1");
});

$("#v8svg-us-groupedu").hover(function () {
     $("#v8svg-us-groupedu-ret").removeClass("v8svg-usch-1");
    $("#v8svg-us-groupedu-ret").addClass("changecolor-v");
    $("#v8svg-ch-hided-edu").css('opacity', 1);
}, function () {
    $("#v8svg-us-groupedu-ret").removeClass("changecolor-v");
    $("#v8svg-ch-hided-edu").css('opacity', 0);
    $("#v8svg-us-groupedu-ret").addClass("v8svg-usch-1");
});

$("#v8svg-us-groupspee").hover(function () {
     $("#v8svg-us-groupspee-ret").removeClass("v8svg-usch-1");
    $("#v8svg-us-groupspee-ret").addClass("changecolor-v");
    $("#v8svg-ch-hided-spee").css('opacity', 1);
}, function () {
    $("#v8svg-us-groupspee-ret").removeClass("changecolor-v");
    $("#v8svg-ch-hided-spee").css('opacity', 0);
    $("#v8svg-us-groupspee-ret").addClass("v8svg-usch-1");
});

$("#v8svg-us-groupdoc").hover(function () {
     $("#v8svg-us-groupdoc-ret").removeClass("v8svg-usch-1");
    $("#v8svg-us-groupdoc-ret").addClass("changecolor-v");
    $("#v8svg-ch-hided-doc").css('opacity', 1);
}, function () {
    $("#v8svg-us-groupdoc-ret").removeClass("changecolor-v");
    $("#v8svg-ch-hided-doc").css('opacity', 0);
    $("#v8svg-us-groupdoc-ret").addClass("v8svg-usch-1");
});

$("#v8svg-us-groupnews").hover(function () {
     $("#v8svg-us-groupnews-ret").removeClass("v8svg-usch-1");
    $("#v8svg-us-groupnews-ret").addClass("changecolor-v");
    $("#v8svg-ch-hided-news").css('opacity', 1);
}, function () {
    $("#v8svg-us-groupnews-ret").removeClass("changecolor-v");
    $("#v8svg-ch-hided-news").css('opacity', 0);
    $("#v8svg-us-groupnews-ret").addClass("v8svg-usch-1");
});

/* color change video ch quest 8*/


$("#v8svg-ch-groupmovie").hover(function () {
     $("#v8svg-ch-groupmovie-ret").removeClass("v8svg-usch-6");
    $("#v8svg-ch-groupmovie-ret").addClass("changecolor-v");
    $("#v8svg-ch-hided-mov7-9").css('opacity', 1);
}, function () {
    $("#v8svg-ch-groupmovie-ret").removeClass("changecolor-v");
    $("#v8svg-ch-hided-mov7-9").css('opacity', 0);
    $("#v8svg-ch-groupmovie-ret").addClass("v8svg-usch-6");
});


$("#v8svg-ch-groupint").hover(function () {
     $("#v8svg-ch-groupint-ret").removeClass("v8svg-usch-6");
    $("#v8svg-ch-groupint-ret").addClass("changecolor-v");
    $("#v8svg-ch-hided-int3").css('opacity', 1);
}, function () {
    $("#v8svg-ch-groupint-ret").removeClass("changecolor-v");
    $("#v8svg-ch-hided-int3").css('opacity', 0);
    $("#v8svg-ch-groupint-ret").addClass("v8svg-usch-6");
});

$("#v8svg-ch-groupnews").hover(function () {
     $("#v8svg-ch-groupnews-ret").removeClass("v8svg-usch-6");
    $("#v8svg-ch-groupnews-ret").addClass("changecolor-v");
    $("#v8svg-ch-hided-news3").css('opacity', 1);
}, function () {
    $("#v8svg-ch-groupnews-ret").removeClass("changecolor-v");
    $("#v8svg-ch-hided-news3").css('opacity', 0);
    $("#v8svg-ch-groupnews-ret").addClass("v8svg-usch-6");
});

$("#v8svg-ch-grouprep").hover(function () {
     $("#v8svg-ch-grouprep-ret").removeClass("v8svg-usch-6");
    $("#v8svg-ch-grouprep-ret").addClass("changecolor-v");
    $("#v8svg-ch-hided-rep5").css('opacity', 1);
}, function () {
    $("#v8svg-ch-grouprep-ret").removeClass("changecolor-v");
    $("#v8svg-ch-hided-rep5").css('opacity', 0);
    $("#v8svg-ch-grouprep-ret").addClass("v8svg-usch-6");
});

$("#v8svg-ch-grouptrai").hover(function () {
     $("#v8svg-ch-grouptrai-ret").removeClass("v8svg-usch-6");
    $("#v8svg-ch-grouptrai-ret").addClass("changecolor-v");
    $("#v8svg-ch-hided-trailer1").css('opacity', 1);
}, function () {
    $("#v8svg-ch-grouptrai-ret").removeClass("changecolor-v");
    $("#v8svg-ch-hided-trailer1").css('opacity', 0);
    $("#v8svg-ch-grouptrai-ret").addClass("v8svg-usch-6");
});

$("#v8svg-ch-groupspeech").hover(function () {
     $("#v8svg-ch-groupspeech-ret").removeClass("v8svg-usch-6");
    $("#v8svg-ch-groupspeech-ret").addClass("changecolor-v");
    $("#v8svg-ch-hided-speech1").css('opacity', 1);
}, function () {
    $("#v8svg-ch-groupspeech-ret").removeClass("changecolor-v");
    $("#v8svg-ch-hided-speech1").css('opacity', 0);
    $("#v8svg-ch-groupspeech-ret").addClass("v8svg-usch-6");
});

$("#v8svg-ch-groupreal").hover(function () {
     $("#v8svg-ch-groupreal-ret").removeClass("v8svg-usch-6");
    $("#v8svg-ch-groupreal-ret").addClass("changecolor-v");
    $("#v8svg-ch-hided-reality1").css('opacity', 1);
}, function () {
    $("#v8svg-ch-groupreal-ret").removeClass("changecolor-v");
    $("#v8svg-ch-hided-reality1").css('opacity', 0);
    $("#v8svg-ch-groupreal-ret").addClass("v8svg-usch-6");
});

/* color change video ch quest 9*/

$("#v9svg-ch-grouptech").hover(function () {
     $("#v9svg-ch-grouptech-ret").removeClass("v9svg-chus-12");
    $("#v9svg-ch-grouptech-ret").addClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 1);
}, function () {
    $("#v9svg-ch-grouptech-ret").removeClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 0);
    $("#v9svg-ch-grouptech-ret").addClass("v9svg-chus-12");
});

$("#v9svg-ch-groupour").hover(function () {
     $("#v9svg-ch-groupour-ret").removeClass("v9svg-chus-12");
    $("#v9svg-ch-groupour-ret").addClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 1);
}, function () {
    $("#v9svg-ch-groupour-ret").removeClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 0);
    $("#v9svg-ch-groupour-ret").addClass("v9svg-chus-12");
});

$("#v9svg-ch-groupkiy").hover(function () {
     $("#v9svg-ch-groupkiy-ret").removeClass("v9svg-chus-12");
    $("#v9svg-ch-groupkiy-ret").addClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 1);
}, function () {
    $("#v9svg-ch-groupkiy-ret").removeClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 0);
    $("#v9svg-ch-groupkiy-ret").addClass("v9svg-chus-12");
});

$("#v9svg-ch-groupyua").hover(function () {
     $("#v9svg-ch-groupyua-ret").removeClass("v9svg-chus-12");
    $("#v9svg-ch-groupyua-ret").addClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 1);
}, function () {
    $("#v9svg-ch-groupyua-ret").removeClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 0);
    $("#v9svg-ch-groupyua-ret").addClass("v9svg-chus-12");
});

$("#v9svg-ch-groupwe").hover(function () {
     $("#v9svg-ch-groupwe-ret").removeClass("v9svg-chus-12");
    $("#v9svg-ch-groupwe-ret").addClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 1);
}, function () {
    $("#v9svg-ch-groupwe-ret").removeClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 0);
    $("#v9svg-ch-groupwe-ret").addClass("v9svg-chus-12");
});

$("#v9svg-ch-groupwatch").hover(function () {
     $("#v9svg-ch-groupwatch-ret").removeClass("v9svg-chus-12");
    $("#v9svg-ch-groupwatch-ret").addClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 1);
}, function () {
    $("#v9svg-ch-groupwatch-ret").removeClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 0);
    $("#v9svg-ch-groupwatch-ret").addClass("v9svg-chus-12");
});

$("#v9svg-ch-groupvid").hover(function () {
     $("#v9svg-ch-groupvid-ret").removeClass("v9svg-chus-12");
    $("#v9svg-ch-groupvid-ret").addClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 1);
}, function () {
    $("#v9svg-ch-groupvid-ret").removeClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 0);
    $("#v9svg-ch-groupvid-ret").addClass("v9svg-chus-12");
});

$("#v9svg-ch-groupvar").hover(function () {
     $("#v9svg-ch-groupvar-ret").removeClass("v9svg-chus-12");
    $("#v9svg-ch-groupvar-ret").addClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 1);
}, function () {
    $("#v9svg-ch-groupvar-ret").removeClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 0);
    $("#v9svg-ch-groupvar-ret").addClass("v9svg-chus-12");
});

$("#v9svg-ch-groupunc").hover(function () {
     $("#v9svg-ch-groupunc-ret").removeClass("v9svg-chus-12");
    $("#v9svg-ch-groupunc-ret").addClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 1);
}, function () {
    $("#v9svg-ch-groupunc-ret").removeClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 0);
    $("#v9svg-ch-groupunc-ret").addClass("v9svg-chus-12");
});

$("#v9svg-ch-groupperf").hover(function () {
     $("#v9svg-ch-groupperf-ret").removeClass("v9svg-chus-12");
    $("#v9svg-ch-groupperf-ret").addClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 1);
}, function () {
    $("#v9svg-ch-groupperf-ret").removeClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 0);
    $("#v9svg-ch-groupperf-ret").addClass("v9svg-chus-12");
});

$("#v9svg-ch-groupold").hover(function () {
     $("#v9svg-ch-groupold-ret").removeClass("v9svg-chus-12");
    $("#v9svg-ch-groupold-ret").addClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 1);
}, function () {
    $("#v9svg-ch-groupold-ret").removeClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 0);
    $("#v9svg-ch-groupold-ret").addClass("v9svg-chus-12");
});

$("#v9svg-ch-groupnon").hover(function () {
     $("#v9svg-ch-groupnon-ret").removeClass("v9svg-chus-12");
    $("#v9svg-ch-groupnon-ret").addClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 1);
}, function () {
    $("#v9svg-ch-groupnon-ret").removeClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 0);
    $("#v9svg-ch-groupnon-ret").addClass("v9svg-chus-12");
});

$("#v9svg-ch-groupnic").hover(function () {
     $("#v9svg-ch-groupnic-ret").removeClass("v9svg-chus-12");
    $("#v9svg-ch-groupnic-ret").addClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 1);
}, function () {
    $("#v9svg-ch-groupnic-ret").removeClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 0);
    $("#v9svg-ch-groupnic-ret").addClass("v9svg-chus-12");
});

$("#v9svg-ch-groupmax").hover(function () {
     $("#v9svg-ch-groupmax-ret").removeClass("v9svg-chus-12");
    $("#v9svg-ch-groupmax-ret").addClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 1);
}, function () {
    $("#v9svg-ch-groupmax-ret").removeClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 0);
    $("#v9svg-ch-groupmax-ret").addClass("v9svg-chus-12");
});

$("#v9svg-ch-groupluo").hover(function () {
     $("#v9svg-ch-groupluo-ret").removeClass("v9svg-chus-12");
    $("#v9svg-ch-groupluo-ret").addClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 1);
}, function () {
    $("#v9svg-ch-groupluo-ret").removeClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 0);
    $("#v9svg-ch-groupluo-ret").addClass("v9svg-chus-12");
});

$("#v9svg-ch-groupkore").hover(function () {
     $("#v9svg-ch-groupkore-ret").removeClass("v9svg-chus-12");
    $("#v9svg-ch-groupkore-ret").addClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 1);
}, function () {
    $("#v9svg-ch-groupkore-ret").removeClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 0);
    $("#v9svg-ch-groupkore-ret").addClass("v9svg-chus-12");
});

$("#v9svg-ch-groupalic").hover(function () {
     $("#v9svg-ch-groupalic-ret").removeClass("v9svg-chus-12");
    $("#v9svg-ch-groupalic-ret").addClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 1);
}, function () {
    $("#v9svg-ch-groupalic-ret").removeClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 0);
    $("#v9svg-ch-groupalic-ret").addClass("v9svg-chus-12");
});

$("#v9svg-ch-groupfree").hover(function () {
     $("#v9svg-ch-groupfree-ret").removeClass("v9svg-chus-12");
    $("#v9svg-ch-groupfree-ret").addClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 1);
}, function () {
    $("#v9svg-ch-groupfree-ret").removeClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 0);
    $("#v9svg-ch-groupfree-ret").addClass("v9svg-chus-12");
});

$("#v9svg-ch-groupdid").hover(function () {
     $("#v9svg-ch-groupdid-ret").removeClass("v9svg-chus-12");
    $("#v9svg-ch-groupdid-ret").addClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 1);
}, function () {
    $("#v9svg-ch-groupdid-ret").removeClass("changecolor-v");
    $("#v9svg-ch-hided-uno").css('opacity', 0);
    $("#v9svg-ch-groupdid-ret").addClass("v9svg-chus-12");
});

$("#v9svg-ch-groupbaidu").hover(function () {
     $("#v9svg-ch-groupbaidu-ret").removeClass("v9svg-chus-12");
    $("#v9svg-ch-groupbaidu-ret").addClass("changecolor-v");
    $("#v9svg-ch-hided-baidu").css('opacity', 1);
}, function () {
    $("#v9svg-ch-groupbaidu-ret").removeClass("changecolor-v");
    $("#v9svg-ch-hided-baidu").css('opacity', 0);
    $("#v9svg-ch-groupbaidu-ret").addClass("v9svg-chus-12");
});

/* color change flow video us quest 9*/



$("#v13svg-us-groupnews").hover(function () {
     $("#v13svg-us-groupnews-flow").removeClass("v9svg-chus-14");
    $("#v13svg-us-groupnews-flow").addClass("changecolor-f");
}, function () {
    $("#v13svg-us-groupnews-flow").removeClass("changecolor-f");
    $("#v13svg-us-groupnews-flow").addClass("v9svg-chus-14");
});

$("#v13svg-us-grouprep").hover(function () {
     $("#v13svg-us-grouprep-flow").removeClass("v9svg-chus-14");
    $("#v13svg-us-grouprep-flow").addClass("changecolor-f");
}, function () {
    $("#v13svg-us-grouprep-flow").removeClass("changecolor-f");
    $("#v13svg-us-grouprep-flow").addClass("v9svg-chus-14");
});


$("#v13svg-us-groupint").hover(function () {
     $("#v13svg-us-groupint-flow").removeClass("v9svg-chus-14");
    $("#v13svg-us-groupint-flow").addClass("changecolor-f");
}, function () {
    $("#v13svg-us-groupint-flow").removeClass("changecolor-f");
    $("#v13svg-us-groupint-flow").addClass("v9svg-chus-14");
});

$("#v13svg-us-groupama").hover(function () {
     $("#v13svg-us-groupama-flow").removeClass("v9svg-chus-14");
    $("#v13svg-us-groupama-flow").addClass("changecolor-f");
}, function () {
    $("#v13svg-us-groupama-flow").removeClass("changecolor-f");
    $("#v13svg-us-groupama-flow").addClass("v9svg-chus-14");
});

$("#v13svg-us-groupvlog").hover(function () {
     $("#v13svg-us-groupvlog-flow").removeClass("v9svg-chus-14");
    $("#v13svg-us-groupvlog-flow").addClass("changecolor-f");
}, function () {
    $("#v13svg-us-groupvlog-flow").removeClass("changecolor-f");
    $("#v13svg-us-groupvlog-flow").addClass("v9svg-chus-14");
});

$("#v13svg-us-groupdoc").hover(function () {
     $("#v13svg-us-groupdoc-floww").removeClass("v9svg-chus-14");
    $("#v13svg-us-groupdoc-floww").addClass("changecolor-f");
}, function () {
    $("#v13svg-us-groupdoc-floww").removeClass("changecolor-f");
    $("#v13svg-us-groupdoc-floww").addClass("v9svg-chus-14");
});

$("#v13svg-us-groupedu").hover(function () {
     $("#v13svg-us-groupedu-flow").removeClass("v9svg-chus-14");
    $("#v13svg-us-groupedu-flow").addClass("changecolor-f");
}, function () {
    $("#v13svg-us-groupedu-flow").removeClass("changecolor-f");
    $("#v13svg-us-groupedu-flow").addClass("v9svg-chus-14");
});

$("#v13svg-us-groupspee").hover(function () {
     $("#v13svg-us-groupspee-flow").removeClass("v9svg-chus-14");
    $("#v13svg-us-groupspee-flow").addClass("changecolor-f");
}, function () {
    $("#v13svg-us-groupspee-flow").removeClass("changecolor-f");
    $("#v13svg-us-groupspee-flow").addClass("v9svg-chus-14");
});

$("#v13svg-us-grouptv-2").hover(function () {
     $("#v13svg-us-grouptv-flow").removeClass("v9svg-chus-14");
    $("#v13svg-us-grouptv-flow").addClass("changecolor-f");
}, function () {
    $("#v13svg-us-grouptv-flow").removeClass("changecolor-f");
    $("#v13svg-us-grouptv-flow").addClass("v9svg-chus-14");
});
/* color change flow video ch quest 9*/

$("#v10svg-ch-groupmovie").hover(function () {
     $("#v10svg-ch-groupmovie-flow").removeClass("v9svg-chus-20");
    $("#v10svg-ch-groupmovie-flow").addClass("changecolor-v");
}, function () {
    $("#v10svg-ch-groupmovie-flow").removeClass("changecolor-v");
    $("#v10svg-ch-groupmovie-flow").addClass("v9svg-chus-20");
});


$("#v10svg-ch-groupint").hover(function () {
     $("#v10svg-ch-groupint-flow").removeClass("v9svg-chus-20");
    $("#v10svg-ch-groupint-flow").addClass("changecolor-v");
}, function () {
    $("#v10svg-ch-groupint-flow").removeClass("changecolor-v");
    $("#v10svg-ch-groupint-flow").addClass("v9svg-chus-20");
});

$("#v10svg-ch-groupnews").hover(function () {
     $("#v10svg-ch-groupnews-flow").removeClass("v9svg-chus-20");
    $("#v10svg-ch-groupnews-flow").addClass("changecolor-v");
}, function () {
    $("#v10svg-ch-groupnews-flow").removeClass("changecolor-v");
    $("#v10svg-ch-groupnews-flow").addClass("v9svg-chus-20");
});

$("#v10svg-ch-groupreal").hover(function () {
     $("#v10svg-ch-groupreal-flow").removeClass("v9svg-chus-20");
    $("#v10svg-ch-groupreal-flow").addClass("changecolor-v");
}, function () {
    $("#v10svg-ch-groupreal-flow").removeClass("changecolor-v");
    $("#v10svg-ch-groupreal-flow").addClass("v9svg-chus-20");
});

$("#v10svg-ch-groupspee").hover(function () {
     $("#v10svg-ch-groupspee-flow").removeClass("v9svg-chus-20");
    $("#v10svg-ch-groupspee-flow").addClass("changecolor-v");
}, function () {
    $("#v10svg-ch-groupspee-flow").removeClass("changecolor-v");
    $("#v10svg-ch-groupspee-flow").addClass("v9svg-chus-20");
});

$("#v10svg-ch-grouptrai").hover(function () {
     $("#v10svg-ch-grouptrai-flow").removeClass("v9svg-chus-20");
    $("#v10svg-ch-grouptrai-flow").addClass("changecolor-v");
}, function () {
    $("#v10svg-ch-grouptrai-flow").removeClass("changecolor-v");
    $("#v10svg-ch-grouptrai-flow").addClass("v9svg-chus-20");
});

$("#v10svg-ch-grouprepo").hover(function () {
     $("#v10svg-ch-grouprepo-flow").removeClass("v9svg-chus-20");
    $("#v10svg-ch-grouprepo-flow").addClass("changecolor-v");
}, function () {
    $("#v10svg-ch-grouprepo-flow").removeClass("changecolor-v");
    $("#v10svg-ch-grouprepo-flow").addClass("v9svg-chus-20");
});

/* change color quest 10 us */


$("#v12svg-us-groupamat").hover(function () {
     $("#v12svg-us-groupamat-flow").removeClass("v11svg-chus-13");
    $("#v12svg-us-groupamat-flow").addClass("changecolor-v");
}, function () {
    $("#v12svg-us-groupamat-flow").removeClass("changecolor-v");
    $("#v12svg-us-groupamat-flow").addClass("v11svg-chus-13");
});


$("#v12svg-us-groupint").hover(function () {
     $("#v12svg-us-groupint-flow").removeClass("v11svg-chus-13");
    $("#v12svg-us-groupint-flow").addClass("changecolor-v");
}, function () {
    $("#v12svg-us-groupint-flow").removeClass("changecolor-v");
    $("#v12svg-us-groupint-flow").addClass("v11svg-chus-13");
});

$("#v12svg-us-grouprepo").hover(function () {
     $("#v12svg-us-grouprepo-flow").removeClass("v11svg-chus-13");
    $("#v12svg-us-grouprepo-flow").addClass("changecolor-v");
}, function () {
    $("#v12svg-us-grouprepo-flow").removeClass("changecolor-v");
    $("#v12svg-us-grouprepo-flow").addClass("v11svg-chus-13");
});

$("#v12svg-us-groupvlog").hover(function () {
     $("#v12svg-us-groupvlog-flow").removeClass("v11svg-chus-13");
    $("#v12svg-us-groupvlog-flow").addClass("changecolor-v");
}, function () {
    $("#v12svg-us-groupvlog-flow").removeClass("changecolor-v");
    $("#v12svg-us-groupvlog-flow").addClass("v11svg-chus-13");
});

/* change color quest 10 ch */

$("#v12svg-ch-groupmovie").hover(function () {
     $("#v12svg-ch-groupmovie-flow").removeClass("v11svg-chus-17");
    $("#v12svg-ch-groupmovie-flow").addClass("changecolor-v");
}, function () {
    $("#v12svg-ch-groupmovie-flow").removeClass("changecolor-v");
    $("#v12svg-ch-groupmovie-flow").addClass("v11svg-chus-17");
});

$("#v12svg-ch-grouptrail").hover(function () {
     $("#v12svg-ch-grouptrail-flow").removeClass("v11svg-chus-17");
    $("#v12svg-ch-grouptrail-flow").addClass("changecolor-v");
}, function () {
    $("#v12svg-ch-grouptrail-flow").removeClass("changecolor-v");
    $("#v12svg-ch-grouptrail-flow").addClass("v11svg-chus-17");
});

$("#v12svg-ch-groupint").hover(function () {
     $("#v12svg-ch-groupint-flow").removeClass("v11svg-chus-19");
    $("#v12svg-ch-groupint-flow").addClass("changecolor-v");
}, function () {
    $("#v12svg-ch-groupint-flow").removeClass("changecolor-v");
    $("#v12svg-ch-groupint-flow").addClass("v11svg-chus-19");
});



/*change color question 14 books*/
$("#b16svg-us-legend-analytical-color").hover(function () {
     $("#b16svg1-us-bar41, #b16svg1-us-bar48, #b16svg1-us-bar40, #b16svg1-us-b7ar58").removeClass("b16svg-1");
    $("#b16svg1-us-bar41, #b16svg1-us-bar48, #b16svg1-us-bar40, #b16svg1-us-bar58").addClass("changecolor-b1");
}, function () {
    $("#b16svg1-us-bar41, #b16svg1-us-bar48, #b16svg1-us-bar40, #b16svg1-us-bar58").removeClass("changecolor-b1");
    $("#b16svg1-us-bar41, #b16svg1-us-bar48, #b16svg1-us-bar40, #b16svg1-us-bar58").addClass("b16svg-1");

});
$("#b16svg-us-legend-anger-color").hover(function () {
     $("#b16svg1-us-bar42, #b16svg1-us-bar43, #b16svg1-us-bar44").removeClass("b16svg-1");
    $("#b16svg1-us-bar42, #b16svg1-us-bar43, #b16svg1-us-bar44").addClass("b16svg-3");
}, function () {
    $("#b16svg1-us-bar42, #b16svg1-us-bar43, #b16svg1-us-bar44").removeClass(".b16svg-3");
    $("#b16svg1-us-bar42, #b16svg1-us-bar43, #b16svg1-us-bar44").addClass("b16svg-1");

});
$("#b16svg-us-legend-joy-color").hover(function () {
     $("#b16svg1-us-bar51, #b16svg1-us-bar52, #b16svg1-us-bar53, #b16svg1-us-bar54, #b16svg1-us-bar55, #b16svg1-us-bar57, #b16svg1-us-bar56").removeClass("b16svg-1");
    $("#b16svg1-us-bar51, #b16svg1-us-bar52, #b16svg1-us-bar53, #b16svg1-us-bar54, #b16svg1-us-bar55, #b16svg1-us-bar57, #b16svg1-us-bar56").addClass("changecolor-b3");
}, function () {
    $("#b16svg1-us-bar51, #b16svg1-us-bar52, #b16svg1-us-bar53, #b16svg1-us-bar54, #b16svg1-us-bar55, #b16svg1-us-bar57, #b16svg1-us-bar56").removeClass("changecolor-b3");
    $("#b16svg1-us-bar51, #b16svg1-us-bar52, #b16svg1-us-bar53, #b16svg1-us-bar54, #b16svg1-us-bar55, #b16svg1-us-bar57, #b16svg1-us-bar56").addClass("b16svg-1");

});
$("#b16svg-us-legend-sadness-color").hover(function () {
     $("#b16svg1-us-bar58, #b16svg1-us-bar59, #b16svg1-us-bar60, #b16svg1-us-bar61, #b16svg1-us-bar44").removeClass("b16svg-1");
    $("#b16svg1-us-bar58, #b16svg1-us-bar59, #b16svg1-us-bar60, #b16svg1-us-bar61, #b16svg1-us-bar44").addClass("changecolor-b4");
}, function () {
    $("#b16svg1-us-bar58, #b16svg1-us-bar59, #b16svg1-us-bar60, #b16svg1-us-bar61, #b16svg1-us-bar44").removeClass("changecolor-b4");
    $("#b16svg1-us-bar58, #b16svg1-us-bar59, #b16svg1-us-bar60, #b16svg1-us-bar61, #b16svg1-us-bar44").addClass("b16svg-1");

});
$("#b16svg-us-legend-sadness-fear-color").hover(function () {
     $("#b16svg1-us-bar45, #b16svg1-us-bar46, #b16svg1-us-bar47, #b16svg1-us-bar48, #b16svg1-us-bar49, #b16svg1-us-bar50, #b16svg1-us-bar42, #b16svg1-us-bar60, #b16svg1-us-bar43, #b16svg1-us-bar44").removeClass("b16svg-1");
    $("#b16svg1-us-bar45, #b16svg1-us-bar46, #b16svg1-us-bar47, #b16svg1-us-bar48, #b16svg1-us-bar49, #b16svg1-us-bar50, #b16svg1-us-bar42, #b16svg1-us-bar60, #b16svg1-us-bar43, #b16svg1-us-bar44").addClass("changecolor-b");
}, function () {
    $("#b16svg1-us-bar45, #b16svg1-us-bar46, #b16svg1-us-bar47, #b16svg1-us-bar48, #b16svg1-us-bar49, #b16svg1-us-bar50, #b16svg1-us-bar42, #b16svg1-us-bar60, #b16svg1-us-bar43, #b16svg1-us-bar44").removeClass("changecolor-b");
    $("#b16svg1-us-bar45, #b16svg1-us-bar46, #b16svg1-us-bar47, #b16svg1-us-bar48, #b16svg1-us-bar49, #b16svg1-us-bar50, #b16svg1-us-bar42, #b16svg1-us-bar60, #b16svg1-us-bar43, #b16svg1-us-bar44").addClass("b16svg-1");

});
$("#b16svg-china-legend-analytical-color").hover(function () {
     $("#b16svg-china-bar35, #b16svg-china-bar39, #b16svg-china-bar22").removeClass("b16svg-1");
    $("#b16svg-china-bar35, #b16svg-china-bar39, #b16svg-china-bar22").addClass("changecolor-b1");
}, function () {
    $("#b16svg-china-bar35, #b16svg-china-bar39, #b16svg-china-bar22").removeClass("changecolor-b1");
    $("#b16svg-china-bar35, #b16svg-china-bar39, #b16svg-china-bar22").addClass("b16svg-1");

});
$("#b16svg-china-legend-anger-color").hover(function () {
     $("#b16svg-china-bar50, #b16svg-china-bar33, #b16svg-china-bar27").removeClass("b16svg-1");
    $("#b16svg-china-bar50, #b16svg-china-bar33, #b16svg-china-bar27").addClass("changecolor-b2");
}, function () {
    $("#b16svg-china-bar50, #b16svg-china-bar33, #b16svg-china-bar27").removeClass("changecolor-b2", "b16svg-5");
    $("#b16svg-china-bar50, #b16svg-china-bar33, #b16svg-china-bar27").addClass("b16svg-1");

});
$("#b16svg-china-legend-fear-color").hover(function () {
     $("#b16svg-china-bar28, #b16svg-china-bar58, #b16svg-china-bar, #b16svg-china-bar50, #b16svg-china-bar33, #b16svg-china-bar33, #b16svg-china-bar27").removeClass("b16svg-1");
    $("#b16svg-china-bar28, #b16svg-china-bar58, #b16svg-china-bar, #b16svg-china-bar50, #b16svg-china-bar33, #b16svg-china-bar33, #b16svg-china-bar27").addClass("changecolor-b");
}, function () {
    $("#b16svg-china-bar28, #b16svg-china-bar58, #b16svg-china-bar, #b16svg-china-bar50, #b16svg-china-bar33, #b16svg-china-bar33, #b16svg-china-bar27").removeClass("changecolor-b");
    $("#b16svg-china-bar28, #b16svg-china-bar58, #b16svg-china-bar, #b16svg-china-bar50, #b16svg-china-bar33, #b16svg-china-bar33, #b16svg-china-bar27").addClass("b16svg-1");

});
$("#b16svg-china-legend-joy-color").hover(function () {
     $("#b16svg-china-bar34, #b16svg-china-bar32, #b16svg-china-bar29, #b16svg-china-bar20, #b16svg-china-bar10").removeClass("b16svg-1");
    $("#b16svg-china-bar34, #b16svg-china-bar32, #b16svg-china-bar29, #b16svg-china-bar20, #b16svg-china-bar10").addClass("changecolor-b3");
}, function () {
    $("#b16svg-china-bar34, #b16svg-china-bar32, #b16svg-china-bar29, #b16svg-china-bar20, #b16svg-china-bar10").removeClass("changecolor-b3");
    $("#b16svg-china-bar34, #b16svg-china-bar32, #b16svg-china-bar29, #b16svg-china-bar20, #b16svg-china-bar10").addClass("b16svg-1");

});
$("#b16svg-china-legend-sadness-color").hover(function () {
     $("#b16svg-china-bar11, #b16svg-china-bar58, #b16svg-china-bar50, #b16svg-china-bar33, #b16svg-china-bar27").removeClass("b16svg-1");
    $("#b16svg-china-bar11, #b16svg-china-bar58, #b16svg-china-bar50, #b16svg-china-bar33, #b16svg-china-bar27").addClass("changecolor-b4");
}, function () {
    $("#b16svg-china-bar11, #b16svg-china-bar58, #b16svg-china-bar50, #b16svg-china-bar33, #b16svg-china-bar27").removeClass("changecolor-b4");
    $("#b16svg-china-bar11, #b16svg-china-bar58, #b16svg-china-bar50, #b16svg-china-bar33, #b16svg-china-bar27").addClass("b16svg-1");

});

/*change color sentiment books*/
$("#b17svg-us-alluvial-joy").hover(function () {
     $("#b17svg-us-alluvial-joy7, #b17svg-us-alluvial-joy6, #b17svg-us-alluvial-joy5, #b17svg-us-alluvial-joy4, #b17svg-us-alluvial-joy3, #b17svg-us-alluvial-joy2, #b17svg-us-alluvial-joy1").removeClass("b17svg-us-6");
    $("#b17svg-us-alluvial-joy7, #b17svg-us-alluvial-joy6, #b17svg-us-alluvial-joy5, #b17svg-us-alluvial-joy4, #b17svg-us-alluvial-joy3, #b17svg-us-alluvial-joy2, #b17svg-us-alluvial-joy1").addClass("changecolor-b");
}, function () {
    $("#b17svg-us-alluvial-joy7, #b17svg-us-alluvial-joy6, #b17svg-us-alluvial-joy5, #b17svg-us-alluvial-joy4, #b17svg-us-alluvial-joy3, #b17svg-us-alluvial-joy2, #b17svg-us-alluvial-joy1").removeClass("changecolor-b");
    $("#b17svg-us-alluvial-joy7, #b17svg-us-alluvial-joy6, #b17svg-us-alluvial-joy5, #b17svg-us-alluvial-joy4, #b17svg-us-alluvial-joy3, #b17svg-us-alluvial-joy2, #b17svg-us-alluvial-joy1").addClass("b17svg-us-6");
});
$("#b17svg-us-alluvial-sadness").hover(function () {
     $("#b17svg-us-alluvial-sadness5, #b17svg-us-alluvial-sadness4, #b17svg-us-alluvial-sadness3, #b17svg-us-alluvial-sadness2, #b17svg-us-alluvial-sadness1").removeClass("b17svg-us-6");
    $("#b17svg-us-alluvial-sadness5, #b17svg-us-alluvial-sadness4, #b17svg-us-alluvial-sadness3, #b17svg-us-alluvial-sadness2, #b17svg-us-alluvial-sadness1").addClass("changecolor-b");
}, function () {
    $("#b17svg-us-alluvial-sadness5, #b17svg-us-alluvial-sadness4, #b17svg-us-alluvial-sadness3, #b17svg-us-alluvial-sadness2, #b17svg-us-alluvial-sadness1").removeClass("changecolor-b");
    $("#b17svg-us-alluvial-sadness5, #b17svg-us-alluvial-sadness4, #b17svg-us-alluvial-sadness3, #b17svg-us-alluvial-sadness2, #b17svg-us-alluvial-sadness1").addClass("b17svg-us-6");
});
$("#b17svg-us-alluvial-tentative").hover(function () {
     $("#b17svg-us-alluvial-tentative3, #b17svg-us-alluvial-tentative2, #b17svg-us-alluvial-tentative1").removeClass("b17svg-us-6");
    $("#b17svg-us-alluvial-tentative3, #b17svg-us-alluvial-tentative2, #b17svg-us-alluvial-tentative1").addClass("changecolor-b");
}, function () {
    $("#b17svg-us-alluvial-tentative3, #b17svg-us-alluvial-tentative2, #b17svg-us-alluvial-tentative1").removeClass("changecolor-b");
    $("#b17svg-us-alluvial-tentative3, #b17svg-us-alluvial-tentative2, #b17svg-us-alluvial-tentative1").addClass("b17svg-us-6");

});
$("#b17svg-us-alluvial-fear").hover(function () {
     $("#b17svg-us-alluvial-fear").removeClass("b17svg-us-6");
    $("#b17svg-us-alluvial-fear").addClass("changecolor-b");
}, function () {
    $("#b17svg-us-alluvial-fear").removeClass("changecolor-b");
    $("#b17svg-us-alluvial-fear").addClass("b17svg-us-6");

});

/*change color question 14 books*/
$("#b16svg-us-legend-analytical-color").hover(function () {
     $("#b16svg1-us-bar41, #b16svg1-us-bar48, #b16svg1-us-bar40, #b16svg1-us-b7ar58").removeClass("b16svg-5");
    $("#b16svg1-us-bar41, #b16svg1-us-bar48, #b16svg1-us-bar40, #b16svg1-us-bar58").addClass("changecolor-b1");
}, function () {
    $("#b16svg1-us-bar41, #b16svg1-us-bar48, #b16svg1-us-bar40, #b16svg1-us-bar58").removeClass("changecolor-b1");
    $("#b16svg1-us-bar41, #b16svg1-us-bar48, #b16svg1-us-bar40, #b16svg1-us-bar58").addClass("b16svg-5");

});
$("#b16svg-us-legend-anger-color").hover(function () {
     $("#b16svg1-us-bar42, #b16svg1-us-bar43, #b16svg1-us-bar44").removeClass("b16svg-5");
    $("#b16svg1-us-bar42, #b16svg1-us-bar43, #b16svg1-us-bar44").addClass("changecolor-b2");
}, function () {
    $("#b16svg1-us-bar42, #b16svg1-us-bar43, #b16svg1-us-bar44").removeClass("changecolor-b2");
    $("#b16svg1-us-bar42, #b16svg1-us-bar43, #b16svg1-us-bar44").addClass("b16svg-5");

});
$("#b16svg-us-legend-joy-color").hover(function () {
     $("#b16svg1-us-bar51, #b16svg1-us-bar52, #b16svg1-us-bar53, #b16svg1-us-bar54, #b16svg1-us-bar55, #b16svg1-us-bar57, #b16svg1-us-bar56").removeClass("b16svg-5");
    $("#b16svg1-us-bar51, #b16svg1-us-bar52, #b16svg1-us-bar53, #b16svg1-us-bar54, #b16svg1-us-bar55, #b16svg1-us-bar57, #b16svg1-us-bar56").addClass("changecolor-b3");
}, function () {
    $("#b16svg1-us-bar51, #b16svg1-us-bar52, #b16svg1-us-bar53, #b16svg1-us-bar54, #b16svg1-us-bar55, #b16svg1-us-bar57, #b16svg1-us-bar56").removeClass("changecolor-b3");
    $("#b16svg1-us-bar51, #b16svg1-us-bar52, #b16svg1-us-bar53, #b16svg1-us-bar54, #b16svg1-us-bar55, #b16svg1-us-bar57, #b16svg1-us-bar56").addClass("b16svg-5");

});
$("#b16svg-us-legend-sadness-color").hover(function () {
     $("#b16svg1-us-bar58, #b16svg1-us-bar59, #b16svg1-us-bar60, #b16svg1-us-bar61, #b16svg1-us-bar44").removeClass("b16svg-5");
    $("#b16svg1-us-bar58, #b16svg1-us-bar59, #b16svg1-us-bar60, #b16svg1-us-bar61, #b16svg1-us-bar44").addClass("changecolor-b4");
}, function () {
    $("#b16svg1-us-bar58, #b16svg1-us-bar59, #b16svg1-us-bar60, #b16svg1-us-bar61, #b16svg1-us-bar44").removeClass("changecolor-b4");
    $("#b16svg1-us-bar58, #b16svg1-us-bar59, #b16svg1-us-bar60, #b16svg1-us-bar61, #b16svg1-us-bar44").addClass("b16svg-5");

});
$("#b16svg-us-legend-sadness-fear-color").hover(function () {
     $("#b16svg1-us-bar45, #b16svg1-us-bar46, #b16svg1-us-bar47, #b16svg1-us-bar48, #b16svg1-us-bar49, #b16svg1-us-bar50, #b16svg1-us-bar42, #b16svg1-us-bar60, #b16svg1-us-bar43, #b16svg1-us-bar44").removeClass("b16svg-5");
    $("#b16svg1-us-bar45, #b16svg1-us-bar46, #b16svg1-us-bar47, #b16svg1-us-bar48, #b16svg1-us-bar49, #b16svg1-us-bar50, #b16svg1-us-bar42, #b16svg1-us-bar60, #b16svg1-us-bar43, #b16svg1-us-bar44").addClass("changecolor-b");
}, function () {
    $("#b16svg1-us-bar45, #b16svg1-us-bar46, #b16svg1-us-bar47, #b16svg1-us-bar48, #b16svg1-us-bar49, #b16svg1-us-bar50, #b16svg1-us-bar42, #b16svg1-us-bar60, #b16svg1-us-bar43, #b16svg1-us-bar44").removeClass("changecolor-b");
    $("#b16svg1-us-bar45, #b16svg1-us-bar46, #b16svg1-us-bar47, #b16svg1-us-bar48, #b16svg1-us-bar49, #b16svg1-us-bar50, #b16svg1-us-bar42, #b16svg1-us-bar60, #b16svg1-us-bar43, #b16svg1-us-bar44").addClass("b16svg-5");

});
