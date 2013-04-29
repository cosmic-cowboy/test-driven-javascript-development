// list7-4 Array.prototype.sumが実装すべき操作

TestCase("ArraySumTest", {
	"test should summarize numbers in array" : function () {
		var array = [1, 2, 3, 4, 5, 6];
		assertEquals(21, array.sum());
	}
});