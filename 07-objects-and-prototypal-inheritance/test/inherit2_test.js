TestCase("Inherit2Test",{
	"test super should call method of same name on prototype" : function () {
		function Person(name){
			this.name = name;
		}

		Person.prototype = {
			constructor : Person,

			getName : function () {
				return this.name;
			},

			speak : function () {
				return "Hello";
			}
		};
		// P152
	}	
});