TestCase("Function Test",{
	"test function length property" : function(){
		assertEquals(2, assert.length);
		// chrome can't
		// assertEquals(1, document.getElementById.length);
		// in firebug
		assertEquals(0, console.log.length);
	},

	"test call function directly" :function(){
		assert("Should be true", typeof assert == "function");
	},

	"test addToArray(list5-7)" :function(){
		var targetArr = addToArray("a","b");
		assert("addToArray", typeof targetArr == "string");
	},

	"test scope" : function(){

		// declaration
		function sum(){
			// i undefined
			assertUndefined(i);

			// someVar TypeError
			assertException(function(){
				assertUndefined(someVar);
			}, "ReferenceError");

			var total = arguments[0];

			if(arguments.length > 1){
				for (var i = 1, l = arguments.length; i < l; i++) {
					total += arguments[i];
				}
			}

			// i can be accessed
			assertEquals(5, i);

			return total;
		}

		// execute
		sum(1,2,3,4,5);
	}

});

function modify(a,b){
	b = 42;
	arguments[0] = arguments[1];

	return a;
}

TestCase("FormalParametersArgumentsTest", {
	"test dynamic relationship" : function(){
		assertEquals(42, modify(1,2));
	},

	"test no dynamic mapping for missing parameters": function () {
		assertUndefined(modify(1));
	}


});