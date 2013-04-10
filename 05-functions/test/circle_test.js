
var circle = {

	radius : 6,

	diameter : function () {
		return this.radius * 2;
	}
};

TestCase("CircleTest", {

	// list5-23
	"test should implicitly bind to object" : function(){
		assertEquals(12, circle.diameter());
	},

	// list5-24
	"test implicit binding to the global object" : function(){
		var myDiameter = circle.diameter;
		assertNaN(myDiameter());

		radius = 2;
		assertEquals(4, myDiameter());
	}
});

