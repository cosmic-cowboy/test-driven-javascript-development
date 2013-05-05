// list 8-2 強化されてES5 プロパティ

TestCase("ES5ObjectTest", {
	"test defineProperty" : function () {
		var circle = {};

		Object.defineProperty(circle, "radius", {
			value : 4,
			writable : false,
			configurable : false
		});

		assertEquals(4, circle.radius);
	},

	// list 8-3 プロパティデスクリプターの変更
	// enumerable:for-inループでプロパティを反復処理できるか
	// configurable:delete演算子でプロパティを削除できるか
	// writable:プロパティを上書きできるか

	"test changing a propety descriptor" : function () {
		var circle = {radius : 3};
		var descriptor = Object.getOwnPropertyDescriptor(circle, "radius");
		descriptor.configurable = false;

		Object.defineProperty(circle, "radius", descriptor);
		delete circle.radius;

		// configurableでないradiusは削除できない
		assertEquals(3, circle.radius);
	},

	// list 8-5 ES3でほかのオブジェクトを継承するオブジェクトを作るための方法
	"test es3 inheritance via constructors" : function () {
		var circle = {};

		function CircleProxy () {}
		CircleProxy.prototype = circle;

		var sphere = new CircleProxy();

		assert(circle.isPrototypeOf(sphere));
	},

	// list 8-6 プロトタイプを取得設定するためのベンダー拡張
	"test inheritance via proprietary __photo__" : function () {
		var circle = {};
		var sphere = {};
		sphere.__proto__ = circle;

		assert(circle.isPrototypeOf(sphere));
	}
});