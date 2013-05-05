
TestCase("StrictModeTest",{

	// list 8-18 暗黙のグローバル

	"test ReferenceError" : function () {
		assertException(function () {
			sum(9,3);
		});
	},

	// list 8-19 複数の仮引数に対して同じ識別子を使った場合

	"test repeated identifiers in parameters" : function () {
		// ES5 厳密モードでは構文エラー
		function es3VsEs5 (a,a,a) {
			// "use strict";
			return a;
		}

		// ES3ではTrue
		assertEquals(6, es3VsEs5(2,3,6));
	}
});


// list 8-20 
function switchArgs (a, b) {
	"use strict";
	var c = b;
	b = a;
	a = c;

	return [].slice.call(arguments);
}

TestCase("ArgumentsParametersTest", {
	"test should switch arguments" : function () {
		// ES5 厳密モード
		assertEquals([2,3], switchArgs(2,3));

		// // ES3モード
		// assertEquals([3,2], switchArgs(2,3));
	}
});