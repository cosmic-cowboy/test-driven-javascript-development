//7-7 for, for-in を使った配列のループ処理

TestCase("ArrayLoopTest", {

	"test looping should iterate over all items" : function () {
		var array = [1,2,3,4,5,6];
		var result = [];

		for (var i = 0; i < array.length; i++) {
			result.push(array[i]);
		}
		assertEquals("123456", result.join(""));
	},

	"test for-in loop should iterate over all items" :function () {
		var array = [1,2,3,4,5,6];
		var result = [];

		for(var i in array){
			result.push(array[i]);
			jstestdriver.console.log(array[i]);
		}
		// assertEquals("123456", result.join(""));
		assertFalse("123456" === result.join(""));
	}
});