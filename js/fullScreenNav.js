// https://codepen.io/RSH87/pen/rmgYbo

function applyListener() {
	// Activate full screen nav
	$("body").toggleClass("nav-active");

	// Show navigation items
	if ($("body").hasClass("nav-active")) {
		setTimeout(function() {
			$(".nav__list-item").fadeTo(400, 1);
		}, 600);
		setTimeout(function() {
			$(".desktop-nav").fadeTo(200, 0);
		}, 100);
	} else {
		$(".nav__list-item").fadeTo(200, 0);
		$(".desktop-nav").fadeTo(400, 1);
	}
}
