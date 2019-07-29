// wait document to load

(() => {
	console.log("hello 6");
})();

// Slick - Main slider
$(document).ready(function() {
	$(".slider-wrapper").slick({
		slidesToShow: 1,
		arrows: false,
		dots: true
		// autoplay: true,
		// autoplaySpeed: 3000,
		// speed: 1000
	});
});

// Slick - Game filter
$(document).ready(function() {
	$(".games-filter-container").slick({
		lazyLoad: "ondemand",
		slidesToShow: 6,
		slidesToScroll: 1,
		arrows: false,
		infinite: true,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 5
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					infinite: false,
					slidesToShow: 2.5
				}
			},
			{
				breakpoint: 720,
				settings: {
					infinite: false,
					slidesToShow: 1.5
				}
			},
			{
				breakpoint: 468,
				settings: {
					infinite: false,
					slidesToShow: 1.3
				}
			}
		]
	});
});

// Slick - Reviews
$(document).ready(function() {
	$(".reviews-slider").slick({
		lazyLoad: "ondemand",
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		infinite: true,
		swipeToSlide: true,
		centerMode: true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 500,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					centerMode: false,
					slidesToShow: 2
				}
			},
			{
				breakpoint: 992,
				settings: {
					centerMode: false,
					slidesToShow: 2,
					dots: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					centerMode: false,
					slidesToShow: 1,
					dots: false
				}
			}
		]
	});
});

// Jackpot amount counter ----------------------------------------
(function(factory) {
	if (typeof define === "function" && define.amd) {
		// AMD
		define(["jquery"], factory);
	} else if (typeof exports === "object") {
		// CommonJS
		factory(require("jquery"));
	} else {
		// Browser globals
		factory(jQuery);
	}
})(function($) {
	var CountTo = function(element, options) {
		this.$element = $(element);
		this.options = $.extend(
			{},
			CountTo.DEFAULTS,
			this.dataOptions(),
			options
		);
		this.init();
	};

	CountTo.DEFAULTS = {
		from: 0, // the number the element should start at
		to: 0, // the number the element should end at
		speed: 1000, // how long it should take to count between the target numbers
		refreshInterval: 100, // how often the element should be updated
		decimals: 2, // the number of decimal places to show
		formatter: formatter, // handler for formatting the value before rendering
		onUpdate: null, // callback method for every time the element is updated
		onComplete: null // callback method for when the element finishes updating
	};

	CountTo.prototype.init = function() {
		this.value = this.options.from;
		this.loops = Math.ceil(
			this.options.speed / this.options.refreshInterval
		);
		this.loopCount = 0;
		this.increment = (this.options.to - this.options.from) / this.loops;
	};

	CountTo.prototype.dataOptions = function() {
		var options = {
			from: this.$element.data("from"),
			to: this.$element.data("to"),
			speed: this.$element.data("speed"),
			refreshInterval: this.$element.data("refresh-interval"),
			decimals: this.$element.data("decimals")
		};

		var keys = Object.keys(options);

		for (var i in keys) {
			var key = keys[i];

			if (typeof options[key] === "undefined") {
				delete options[key];
			}
		}

		return options;
	};

	CountTo.prototype.update = function() {
		this.value += this.increment;
		this.loopCount++;

		this.render();

		if (typeof this.options.onUpdate == "function") {
			this.options.onUpdate.call(this.$element, this.value);
		}

		if (this.loopCount >= this.loops) {
			clearInterval(this.interval);
			this.value = this.options.to;

			if (typeof this.options.onComplete == "function") {
				this.options.onComplete.call(this.$element, this.value);
			}
		}
	};

	CountTo.prototype.render = function() {
		var formattedValue = this.options.formatter.call(
			this.$element,
			this.value,
			this.options
		);
		this.$element.text(formattedValue);
	};

	CountTo.prototype.restart = function() {
		this.stop();
		this.init();
		this.start();
	};

	CountTo.prototype.start = function() {
		this.stop();
		this.render();
		this.interval = setInterval(
			this.update.bind(this),
			this.options.refreshInterval
		);
	};

	CountTo.prototype.stop = function() {
		if (this.interval) {
			clearInterval(this.interval);
		}
	};

	CountTo.prototype.toggle = function() {
		if (this.interval) {
			this.stop();
		} else {
			this.start();
		}
	};

	function formatter(value, options) {
		return value.toFixed(options.decimals);
	}

	$.fn.countTo = function(option) {
		return this.each(function() {
			var $this = $(this);
			var data = $this.data("countTo");
			var init = !data || typeof option === "object";
			var options = typeof option === "object" ? option : {};
			var method = typeof option === "string" ? option : "start";

			if (init) {
				if (data) data.stop();
				$this.data("countTo", (data = new CountTo(this, options)));
			}

			data[method].call(data);
		});
	};
});

jQuery(document).ready(function() {
	//jackpot starter
	jQuery("#total_jackpot").data("countToOptions", {
		formatter: function(value, options) {
			return value
				.toFixed(options.decimals)
				.replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
			// return value.toFixed(options.decimals).replace('.', '');
		},
		speed: 1000000000
	});
	function count(options) {
		var $this = jQuery(this);
		options = jQuery.extend(
			{},
			options || {},
			$this.data("countToOptions") || {}
		);
		$this.countTo(options);
	}
	jQuery("#total_jackpot").each(count);
});
//-----------------------------
