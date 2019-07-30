// https://codepen.io/RSH87/pen/rmgYbo

function applyListener() {
	$("body").toggleClass("nav-active");

	// if ($("body").hasClass("nav-active")) {
	// 	$(".nav__list-item").fadeIn();
	// } else {
	// 	$(".nav__list-item").fadeOut();
	// }

	if ($("body").hasClass("nav-active")) {
		setTimeout(function() {
			$(".nav__list-item").fadeTo(400, 1);
		}, 600);
	} else {
		$(".nav__list-item").fadeTo(100, 0);
	}
}
