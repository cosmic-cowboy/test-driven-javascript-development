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

	// list 9-5 createメソッドを対象とするテストケース
	TestCase("TabControllerCreateTest", {

		setUp : setUp,

		"test should fail without element" : function () {
			assertException(function () {
				tabController.create();
			},"TypeError");
		},
		"test should fail without element class" : function () {
			assertException(function () {
				tabController.create({});
			}, "TypeError");
		},
		"test should return object" : function () {
			var controller = tabController.create(this.tabs);

			assertClassName("js-tab-controller",this.tabs);
		}

	});

}());