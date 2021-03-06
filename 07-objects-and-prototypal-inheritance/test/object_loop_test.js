// list 7-9 hasOwnPropertyでループを限定する

TestCase("ObjectLoopTest", {
	"test looping should only iterate over own properties" : function () {
		var person = {
			name: "Christian",
			profession : "Programmer",
			location : "Norway"
		};

		var result = [];

		for(var prop in person){
			if(person.hasOwnProperty(prop)){
				result.push(prop);
			}
		}

		var expected = ["location", "name", "profession"];
		assertEquals(expected, result.sort());
	}
});