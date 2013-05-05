// list 9-3 共有されるsetUp関数を使ったテストのセットアップ
(function () {
	var tabController = tddjs.ui.tabController;

	function setUp () {

		// すべてのテストケースがこのsetUpを共有できる
		// DOC
		// <ol id="news-tabs" class="nav">
		//	<li><a href="#news">Latest news</a></li>
		//	<li><a href="#sports">Sports</a></li>
		//	<li><a href="#economy">Economy</a></li>
		// </ol>

		this.tabs = document.getElementById("tabs");
	}

}());