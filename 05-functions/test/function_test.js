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
	}

});


TestCase("FormalParametersArgumentsTest", {
	"test dynamic relationship" : function(){
		function modify(a,b){
			b = 42;
			arguments[0] = arguments[1];

			return a;
		}
		assertEquals(42, modify(1,2));
	}
});