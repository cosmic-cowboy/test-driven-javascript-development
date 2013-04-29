// list 7-14 オブジェクトの身元調査

TestCase("CircleTest",{
	// "test inspect objects" : function () {

	// 	// 円オブジェクトを作成する
	// 	// Object.prototypeから継承したプロパティ
	// 	// radiusプロパティを持つ

	// 	var circ = new Circle(6);
	// 	var circ2 = {radius : 6};


	// 	assertTrue(circ instanceof Object);
	// 	assertTrue(circ instanceof Circle);
	// 	assertTrue(circ2 instanceof Object);
	// 	assertEquals(Circle, circ.constructor);
	// 	assertEquals(Object, circ2.constructor);
	// },

	// // list 7-15 同じ種類のオブジェクトの作成
	// // [[prototype]]内部プロパティについて

	// "test should create another object of same kind": function () {
	// 	var circle = new Circle(6);
	// 	var circle2 = new circle.constructor(9);

	// 	assertEquals(circle.constructor, circle2.constructor);
	// 	assertTrue(circle  instanceof Circle);
	// 	assertTrue(circle2 instanceof Circle);
	// },

	// // list 7-17 Circle.prototype.diameterのテスト
	// "test should inherit properties from Circle prototype" : function () {
	// 	var circle = new Circle(6);

	// 	assertEquals(12, circle.diameter());
	// },

	// list 7-20 constructorプロパティがおかしい
	"test constructor is Object when prototype is overridden" : function () {
		function Circle () {}
		Circle.prototype = {};
		assertEquals(Object, new Circle().constructor)

	}

});