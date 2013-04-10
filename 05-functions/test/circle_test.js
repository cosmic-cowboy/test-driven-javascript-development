
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
    // WARNING: Never ever rely on implicit globals
    // This is just an example
    "test implicit binding to the global object" : function(){
		var myDiameter = circle.diameter;
		assertNaN(myDiameter());

		radius = 2;
		assertEquals(4, myDiameter());
	},
	// list5-26
	"test should call radius on anonymous object": function () {
		assertEquals(10, circle.diameter.call({radius:5}));
	},
	// list5-26(apply version)
	"test should call radius on anonymous object(apply version)": function () {
		assertEquals(10, circle.diameter.apply({radius:5}));
	}

});

