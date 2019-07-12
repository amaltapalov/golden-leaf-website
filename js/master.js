// wait document to load

(() => {
	console.log("hello 6");
})();

// Slick
$(document).ready(function() {
	$(".slick-container").slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		// autoplay: true,
		// autoplaySpeed: 2000,
		arrows: false
	});
});
