TestCase("CircleTest", {
	// list 8-12 ハイブリッドCircleの使い方
	"test Object.create backed constructor" : function () {
		var circle = new Circle(3);

		assert(circle instanceof Circle);
		assertEquals(6, circle.diameter);

		circle.radius = 6;
		assertEquals(12, circle.diameter);

		delete circle.radius;
		assertEquals(6, circle.radius);
	},

	// list 8-13 newなしでCircleを使う
	"test omitting new when creating circle" : function () {
		var circle = Circle(3);

		assert(circle instanceof Circle);
		assertEquals(6, circle.diameter);
	}
});