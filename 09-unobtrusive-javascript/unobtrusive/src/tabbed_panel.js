// list 9-10 タブコントローラの使い方

(function () {
	if(typeof document == "undefined" ||
		!document.getElementById){
		return;
	}

	var dom = tddjs.dom;
	var ol = document.getElementById("news-tabs");

	try{
		var controller = tddjs.ui.tabController.create(ol);
		dom.addClassName(ol.parentNode, "js-tabs");

		controller.onTabChange = function (curr, prev) {
			dom.removeClassName(getPanel(prev), "active-panel");
			dom.addClassName(getPanel(curr), "active-panel");
		};

		controller.activateTab(ol.getElementsByTagName('a')[0]);

	} catch (e){}
}());