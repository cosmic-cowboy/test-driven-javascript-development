// lsit6-21 tddjs.iteratorメソッドのふるまい

TestCase("IteratorTest",{
	"test next should return first item": function () {
		var collection = [1, 2, 3, 4, 5];
		var next = tddjs.iterator(collection);

		assertSame(collection[0], next());
		assertTrue(next.hasNext);
	},

	"test hasNext should be false after last time" : function () {
		var collection = [1, 2];
		var next = tddjs.iterator(collection);
		next();
		next();
		assertFalse(next.hasNext);
	},

	"test should loop collection with iterator" : function () {
		var collection = [1, 2, 3, 4, 5];
		var next = tddjs.iterator(collection);
		var result = [];

		while(next.hasNext){
			result.push(next());
		}

		assertEquals(collection, result);
	}
});