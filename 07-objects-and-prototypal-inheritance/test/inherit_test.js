// list 7-27 inheritの仕様

TestCase("FunctionInheritTest",{
	"test should link prototypes" : function () {
		var SubFn = function(){};
		var SuperFn = function () {};
		SubFn.inherit(SuperFn);

		assertTrue(new SubFn() instanceof SuperFn);
	},

	// lsit 7-33 _superがプロトタイプを参照するという前提でのテスト
	"test should set up link to super" : function () {
		var SubFn   = function () {};
		var SuperFn = function () {};
		SubFn.inherit(SuperFn);

		assertEquals(SuperFn.prototype, SubFn.prototype._super);
	}
});