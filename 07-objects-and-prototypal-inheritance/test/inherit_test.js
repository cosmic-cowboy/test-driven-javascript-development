// list 7-27 inheritの仕様

TestCase("FunctionInheritTest",{
	"test should link prototypes" : function () {
		var SubFn = function(){};
		var SuperFn = function () {};
		SubFn.inherit(SuperFn);

		assertTrue(new SubFn() instanceof SuperFn);
	},

	// list 7-33 _superがプロトタイプを参照するという前提でのテスト
	"test should set up link to super" : function () {
		var SubFn   = function () {};
		var SuperFn = function () {};
		SubFn.inherit(SuperFn);

		assertEquals(SuperFn.prototype, SubFn.prototype._super);
	},

	// list 7-40 より単純な_superヘルパーの使い方
	"test should access super method with helper": function () {

		function LoudPerson (name) {
			_super(this, "constructor", name);

			LoudPerson.inherit(Person);

			LoudPerson.prototype.getName = function() {
				return _super(this, "getName").toUpperCase();
			};

			LoudPerson.prototype.say = function(words) {
				return _super(this, "speak", words) + "!!!";
			};

			var np = new LoudPerson("Chris");

			assertEquals("CHRIS", np.getName());
			assertEquals("Hello!!!", np.say("Hello"));
		}
	}
});