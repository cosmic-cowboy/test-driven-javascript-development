// list 9-6 createの実装

(function () {

	var dom = tddjs.dom;
	function create (element) {
		if(!element || typeof element.className != "string"){
			throw new TypeError("element is not an element");
		}

		dom.addClassName(element, "js-tab-controller");
		var tabs = Object.create(this);

		element.onclick = function (event) {
			tabs.handleTabClick(event || window.event || {});
		};

		element = null;

		return tabs;
	}

	// list 9-7 handleTabClickの実装
	function handleTabClick (event) {
		var target = event.target || event.srcElement;

		while(target && target.nodeType != 1){
			target = target.parentNode;
		}
		this.activateTab(target);
	}

	tddjs.namespace("ui").tabController = {
		create : create,
		handleTabClick : handleTabClick
	};

	// body...
}());