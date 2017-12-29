// load the interactions only when the document is ready
$(document).ready(function() {
	$('.menu-btn').click(function() {
		$(this).children('.menu-svg').toggleClass('scaled');
		$(this).children('.menu-svg').toggleClass('icon-visible');
		$('.sidebar').toggleClass('nav-closed nav-open');
	});

	// roadmap toggle

	$('#toggle1').hide();
	$('#back1').hover(function() {
		$('#toggle1').show();
	});

	$('#toggle2').hide();
	$('#back2').hover(function() {
		$('#toggle2').show();
	});

	$('#sottosotto').hover(function() {
		$('#toggle2').hide();
		$('#toggle1').hide();
	});
});