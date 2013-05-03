// list 7-26 新しいSphereコンストラクタのテスト

TestCase("SphereTest", {
	"test sphere are circles in 3D" : function () {
		var radius = 6;
		var sphere = new Sphere(radius);

		assertTrue(sphere instanceof Sphere);
		assertTrue(sphere instanceof Circle);
		assertTrue(sphere instanceof Object);
		assertEquals(12, sphere.diameter());

	},

	// list 7-32 表面積の計算
	"test should calculate sphere area" : function () {
		var sphere = new Sphere(3);

		assertEquals(113, Math.round(sphere.area()));
	}
});