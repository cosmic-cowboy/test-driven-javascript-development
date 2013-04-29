// list7-2 スペースを含むプロパティ名

var testMethods = {
	"test dots and brackets should behave identically" :
	function () {
		var value = "value";
		var obj   = {prop:value};

		assertEquals(obj.prop, obj["prop"]);
	}
};

// テストを取り出す

var property_name = "test dots and brackets should behave identically";

var testMethod = testMethods[property_name];

var argc = testMethods[property_name].length;