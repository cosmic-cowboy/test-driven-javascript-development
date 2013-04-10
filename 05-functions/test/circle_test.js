// list5-23

var circle = {

	radius : 6,

	diameter : function () {
		return this.radius * 2;
	}
};

TestCase("CircleTest", {
	"test should implicitly bind to object" : function(){
		assertEquals(12, circle.diameter());
	}
});