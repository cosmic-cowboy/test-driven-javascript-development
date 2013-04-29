// list 7-13 コンストラクタでオブジェクトを作成する

function Circle (radius) {
	this.radius = radius;
}

// list 7-16 Circle.prototypeへのプロパティの追加
// list 7-18 Circle.prototypeへのプロパティの追加にオブジェクトリテラルを利用
// prototypeに新しいオブジェクトが代入されたため、constructorプロパティがつくられない

Circle.prototype = {
	diameter : function() {
		return this.radius * 2;
	},

	circumference : function() {
		return this.diameter * Math.PI;
	},

	area : function() {
		return this.radius * this.radius * Math.PI;
	}
};