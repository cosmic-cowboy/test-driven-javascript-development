
TestCase("Circle2Test",{

	// list 7-41 非公開関数の定義テスト
	// list 7-42 コンストラクタ内部の非公開関数のテスト
	// "test circle2 list 7-41" : function () {

	// 	var circ2 = new Circle2(6);

	// 	circ2.radius = 9;
	// 	assertEquals(9, circ2.radius);
	// 	assertTrue(typeof circ2.getRadius == "function");
	// 	assertTrue(typeof circ2.setRadius == "function");
	// 	assertTrue(circ2.ensureValidRadius === undefined);
	// }


	"test circle2 list 7-43" : function () {

		var circ2 = new Circle2(6);
		assertEquals(6, circ2.radius());
		assertEquals(3, circ2.radius(3));

		assertTrue(circ2.getSetRadius === undefined);
		assertTrue(typeof circ2.radius == "function");
		assertTrue(typeof circ2.diameter == "function");
		assertTrue(typeof circ2.circumference == "function");
		assertEquals(6, circ2.diameter());
		assertEquals(19, Math.round(circ2.circumference()));

	}

});