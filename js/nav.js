const app = (() => {
	let body;
	let menu;

	const init = () => {
		body = document.querySelector("body");
		menu = document.querySelector(".menu-icon");

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
