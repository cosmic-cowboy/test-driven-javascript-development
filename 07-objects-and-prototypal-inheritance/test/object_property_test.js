// list7-3 継承とプロパティのシャドウイング

TestCase("ObjectPropertyTest", {
	"test setting property shadows property on prototype" : function () {
		var object1 = {};
		var object2 = {};

		// 両方のオブジェクトがtoStringを継承

		assertEquals(object1.toString, object2.toString);

		var chris = {
			name : "Chris",
			toString : function () {
				return this.name;
			}
		};

		// prototypeとは異なる独自のtoString()が定義されている

		assertFalse(object1.toString === chris.toString);

		// カスタムプロパティを削除すると、継承したprototypeが見えるようになる。

		delete chris.toString;
		assertEquals(object1.toString, chris.toString);
	}
});