// list 7-47 オブジェクトからの直接継承

TestCase("ObjectCreateTest",{
	"test sphere should inherit from circle" : function () {
		var circle = {
			radius : 6,

			area : function () {
				return this.radius * this.radius * Math.PI;
			}
		};

		var sphere = Object.create(circle);

		sphere.area = function () {
			return  4 * circle.area.call(this);
		};

		assertEquals(452, Math.round(sphere.area()));
	}
});