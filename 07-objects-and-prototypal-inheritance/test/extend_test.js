// list 7-52 tddjs.extend のための初期テストケース

TestCase("ObjectExtendTest",{
	setUp : function () {
		this.dummy = {
			setName : function (name) {
				return (this.name = name);
			},

			getName : function () {
				return this.name || null;
			}
		};
	},

	"test should copy properties" : function () {
		var object = {};
		tddjs.extend(object, this.dummy);

		assertEquals("function", typeof object.getName);
		assertEquals("function", typeof object.setName);
	},

	// list 7-54 nullの拡張

	"test should return new object when source is null" : function () {
		var object = tddjs.extend(null, this.dummy);

		assertEquals("function", typeof object.getName);
		assertEquals("function", typeof object.setName);
	},

	// list 7-56 1個だけの引数を処理するs

	"test should return target untouched when no source" : function () {
		var object = tddjs.extend({});
		var properties = [];

		for(var prop in object){
			if(tddjs.isOwnProperty(object, prop)){
				properties.push(prop);
			}
		}

		assertEquals(0, properties.length);
	}
});