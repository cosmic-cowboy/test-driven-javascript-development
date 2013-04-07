// テストメソッドの先頭は「test」で始まる
TestCase = ("strftimeTest", {

	// テスト前のテストテクスチャ作成
	setUp : function(){
		this.date = new Date(2009, 9, 2, 22, 14, 45);
	},

	// テスト後のテストテクスチャの後始末
	tearDown : function(){
		delete this.date;
	},

	"test %Y should return year" : function(){
		var year = Date.formats.Y(this.date);

		assert.isString(year);
		assert.areEqual("2009",year);

	},
	"test %m should return month" : function(){
		var month = Date.formats.m(this.date);

		assert.isString(month);
		assert.areEqual("10",month);

	},
	"test %d should return date" : function(){

		assert.areEqual("02",Date.formats.d(this.date));

	},
	"test %y should return year as two digits" : function(){

		assert.areEqual("09",Date.formats.y(this.date));

	},

	"test %F should act as %Y-%m-%d" : function(){

		assert.areEqual("2009-10-02", this.date.strftime("%F"));

	}

});