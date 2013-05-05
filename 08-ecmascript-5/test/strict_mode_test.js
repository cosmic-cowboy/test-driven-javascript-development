
TestCase("StrictModeTest",{

	// list 8-18 暗黙のグローバル

	"test ReferenceError" : function () {
		assertException(function () {
			sum(9,3);
		});
	}

});