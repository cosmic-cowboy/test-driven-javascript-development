TestCase("ArgumentsTest", {

	// list 7-50 Array.prototype からの借用

	"test arguments should borrow from Array.prototype" : function () {
		function addToArray () {
			var args = Array.prototype.slice.call(arguments);
			var arr  = args.shift();

			return arr.concat(args);
		}

		var result = addToArray([], 1, 2, 3);

		assertEquals([1, 2, 3], result);
    },

    // list 7-51 明示的な借用

    "test arguments should borrow explicitly from Array.prototype" : function () {

		function addToArray() {
			arguments.slice = Array.prototype.slice;
			var args = arguments.slice();
			var arr = args.shift();

			return arr.concat(args);
		}

		var result = addToArray([], 1, 2, 3);

		assertEquals([1, 2, 3], result);
    }
});

