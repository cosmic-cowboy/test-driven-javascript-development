// list6-28 fibonacci関数のメモ化

TestCase("FibonacciTest", {
	"test calculate high fib value with momoization" : function () {
		var fibonacciFast = fibonacci.memoize();
		assertEquals(1346269, fibonacciFast(30));
	}
});