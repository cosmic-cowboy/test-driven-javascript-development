
TestCase("Circle2Test",{

	// list 7-41 非公開関数の定義テスト

	"test circle2 list 7-41" : function () {

		var circ2 = new Circle2(6);

		circ2.radius = 9;
		assertEquals(9, circ2.radius);
		assertTrue(typeof circ2.getRadius == "function");
		assertTrue(typeof circ2.setRadius == "function");
		assertTrue(circ2.ensureValidRadius === undefined);
	}
});