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
	}
});