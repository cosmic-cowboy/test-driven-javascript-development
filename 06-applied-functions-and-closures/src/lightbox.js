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
	// use bind
	anchor.onclick = lb.open.bind(lb);

	return lb;
}

// list 6-11 create Lightbox
(function () {
	var anchors = document.getElementsByTagName("a");
	var regexp  = /(^|\s)lightbox(\s|$)/;

	for (var i = 0, l = anchors.length; i < l; i++) {
		if(regexp.test(anchors[i].className)){
			anchorLightbox(anchors[i]);
		}
	}
}());