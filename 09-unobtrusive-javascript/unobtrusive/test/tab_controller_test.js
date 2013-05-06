// list 9-3 共有されるsetUp関数を使ったテストのセットアップ
(function () {
	var tabController = tddjs.ui.tabController;

	function setUp () {
		/*:DOC += <ol id="tabs">
			<li><a href="#news">News</a></li>
			<li><a href="#sports">Sports</a></li>
			<li><a href="#economy">Economy</a></li>
		</ol>*/

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

			assertObject(controller);
		}

	});

	// list 9-8 activateTabメソッドを対象とするテストケース
	TestCase("TabbedControllerActivateTabTest", {
		setUp : function  () {
			setUp.call(this);
			this.controller = tabController.create(this.tabs);
			this.links = this.tabs.getElementsByTagName("a");
			this.lis = this.tabs.getElementsByTagName("li");
		},

		"test should not fail without anchor" : function () {
			var controller = this.controller;

			assertNoException(function () {
				controller.activateTab();
			});
		},

		"test should mark anchor as active" : function () {
			this.controller.activateTab(this.links[0]);

			assertClassName("activate-tab", this.links[0]);

		},

		"test should deactivate previous tab" : function () {
			this.controller.activateTab(this.links[0]);
			this.controller.activateTab(this.links[1]);

			assertNoMatch(/(^|\s)activate-tab(\s|$)/, this.links[0]);
			assertClassName("activate-tab", this.links[1]);
		},

		"test should not activate unsupported element type": function () {
			this.controller.activateTab(this.links[0]);
			this.controller.activateTab(this.lis[0]);

			assertNoMatch(/(^|\s)activate-tab(\s|$)/, this.lis[0]);
			assertClassName("activate-tab", this.links[0]);
		},

		"test should fire onTabChange": function () {
			var actualPrevious, actualCurrent;
			this.controller.activateTab(this.links[0]);
			this.controller.onTabChange = function (curr, prev) {
				actualPrevious = prev;
				actualCurrent = curr;
			};

			this.controller.activateTab(this.links[1]);

			assertSame(actualPrevious, this.links[0]);
			assertSame(actualCurrent, this.links[1]);
		}
	});
}());