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

	// list 9-9 activateTabの実装

	function activateTab (element) {
		if(!element || !element.tagName ||
			element.tagName.toLowerCase() != this.tabTagName){
			return;
		}

		var className = "activate-tab";
		dom.removeClassName(this.prevTab, className);
		dom.addClassName(element, className);
		var previous = this.prevTab;
		this.prevTab = element;

		this.onTagChange(element, previous);
	}

	tddjs.namespace('ui').tabController = {
		activateTab : activateTab,
		onTagChange : function (anchor, previous) {},
		tabTagName : "a"
	};
}());