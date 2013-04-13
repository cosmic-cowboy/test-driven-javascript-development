// list6-1
var lightbox = {
	open: function () {
		ajax.loadFragment(this.url, {
			target: this.close
		});

		return false;
	},

	close: function () {
		// body...
	},

	destroy: function () {
		// body...
	},

	create: function () {
		// body...
	}
};

function anchorLightbox (anchor, options) {
	var lb = Object.create(lightbox);
	lb.url = anchor.href;
	lb.title = anchor.title || anchor.href;
	Object.extend(lb, options);
	anchor.onclick = function () {
		return lb.open;
	};

	return lb;
}