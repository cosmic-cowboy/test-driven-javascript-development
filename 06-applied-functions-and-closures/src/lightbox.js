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

// list 6-13 クロージャのネストでスコープ問題を解決する

(function () {
	var anchors = document.getElementsByTagName("a");
	var controller = Object.create(lightboxController);
	var regexp  = /(^|\s)lightbox(\s|$)/;

	for (var i = 0, l = anchors.length; i < l; i++) {
		if(regexp.test(anchors[i].className)){

			// ただちに呼び出される無名関数
			(function(anchor){
				anchors[i].onclick = function(){
					controller.open(anchor);
					return false;
				};
			}(anchors[i]));
		}
	}
}());