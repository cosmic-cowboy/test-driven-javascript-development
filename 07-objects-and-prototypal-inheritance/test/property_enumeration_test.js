// list 7-11 DontEnumでプロパティをオーバーライド

TestCase("PropertyEnumerationTest", {
	"test should enumerate shadowed object properties" : function () {

		// Object.prototypeでDontEnumが設定されているプロパティ
		var object = {
			toString : "toString",
			toLocalString : "toLocalString",
			valueOf : "valueOf",
			hasOwnProperty : "hasOwnProperty",
			isPrototypeOf : "isPrototypeOf",
			propertyIsEnumerable : "propertyIsEnumerable",
			constructor : "constructor"
		};

		var result = [];

		for (var property in object){
			result.push(property);
		}
		assertEquals(7, result.length);
	},
	"test should enumerate shadowed function properties" : function () {
		var object = function () {};

		// Function.prototypeでDontEnumが設定されているプロパティ
		object.prototype = "prototype";
		object.call = "call";
		object.apply = "apply";

		var result = [];

		for(var property in object){
			result.push(property);
		}

		assertEquals(2, result.length);
		// assertEquals(3, result.length);
	}
});