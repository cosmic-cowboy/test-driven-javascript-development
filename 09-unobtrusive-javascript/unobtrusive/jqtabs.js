// list 9-13 jQueryを使ったコンパクトなタブつきパネル

(function ($) {
	$.fn.tabs = function () {
		$this = $(this);
		$this.addClass("js-tabs").find("ol:first a").live("click", function (event) {
			$target = $(event.target);
			$target.parents("ol").find("a").removeClass("active-tab");
			$target.addClass("active-tab");

			var activehash = $target.attr("href").replace(/^.*#/,"");
			$activePanel = $("[name=" + activehash + "]");
			$activePanel.parents("div").addClass("active-panel").siblings("div.section").removeClass("active-panel");
		});
	};
}(jQuery));