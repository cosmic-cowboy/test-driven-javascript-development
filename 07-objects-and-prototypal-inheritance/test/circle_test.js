// list 7-14 オブジェクトの身元調査

TestCase("CircleTest",{
	"test inspect objects" : function () {

		// 円オブジェクトを作成する
		// Object.prototypeから継承したプロパティ
		// radiusプロパティを持つ

		var circ = new Circle(6);
		var circ2 = {radius : 6};


		assertTrue(circ instanceof Object);
		assertTrue(circ instanceof Circle);
		assertTrue(circ2 instanceof Object);
		assertEquals(Circle, circ.constructor);
		assertEquals(Object, circ2.constructor);
	}
});