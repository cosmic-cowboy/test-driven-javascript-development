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
	},

	// list 8-14 Object.create と関数を使う
	"test using a custom create method" : function () {
		var circle = Object.create({},{
			diameter : {
				get : function () {
					return this.radius * 2;
				}
			},

			circumference : {},
			area : {},
			create : {
				value : function (radius) {
					var circ = Object.create(this, {
						radius : {value : radius}
					});

					return circ;
				}
			}
		});

		var myCircle = circle.create(3);

		assertEquals(6, myCircle.diameter);
		assert(circle.isPrototypeOf(myCircle));

		// circle は関数ではない
		assertException(function () {
			assertFalse(myCircle instanceof circle);
		});
	}
});