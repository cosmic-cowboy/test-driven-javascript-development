Boolean.prototype.not = function () {
	return !this;
};

TestCase("Boolean test", {
	"test should flip value of true" : function(){
		assertFalse(true.not());
		assertFalse(Boolean.prototype.not.call(true));
	},

	"test should flip value of false" : function(){
	// Oops! Both fail, false.not() == false
		assertTrue(false.not());
		assertTrue(Boolean.prototype.not.call(false));

	}
});