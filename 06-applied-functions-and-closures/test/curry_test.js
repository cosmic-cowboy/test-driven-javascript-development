// list6-8 curryと元のメソッドから別のメソッドを実装する

(function () {
	String.prototype.trim = String.prototype.replace.curry(/^\s+|\s+$/g, "");

	TestCase("CurryTest", {
		"test should trim spaces" : function(){

			var str = "  some spaced string ";

			assertEquals("some spaced string", str.trim());
		}
	});
}());