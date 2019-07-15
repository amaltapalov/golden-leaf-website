// wait document to load

(() => {
	console.log("hello 6");
})();

// Slick - Main slider
$(document).ready(function() {
	$(".slider-wrapper").slick({
		slidesToShow: 1,
		// autoplay: true,
		// autoplaySpeed: 2000,
		arrows: false,
		dots: true
	});
});

// Slick - Game filter
$(document).ready(function() {
	$(".slick-container").slick({
		lazyLoad: "ondemand",
		slidesToShow: 6,
		slidesToScroll: 1,
		arrows: false
	});
});
