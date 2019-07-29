// https://codepen.io/RSH87/pen/rmgYbo

const app = (() => {
	let body;
	let menu;
	let menuItems;

	const init = () => {
		body = document.querySelector("body");
		menu = document.querySelector(".menu-icon");
		menuItems = document.querySelectorAll(".nav__list-item");

		applyListeners();
	};

	const applyListeners = () => {
		menu.addEventListener("click", () => toggleClass(body, "nav-active"));
	};

	const toggleClass = (element, stringClass) => {
		if (element.classList.contains(stringClass))
			element.classList.remove(stringClass);
		else element.classList.add(stringClass);
	};

	init();
})();

// const body = $("#body-container");

// jQuery("#hamburger").on("click", function() {
// 	if (body.hasClass("nav-active")) {
// 		$(".nav__content")
// 			.delay(1000)
// 			.fadeIn();
// 	} else {
// 		$(".nav__content").fadeOut();
// 	}
// });
