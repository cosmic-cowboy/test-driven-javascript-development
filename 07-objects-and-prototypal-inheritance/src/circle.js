// list 7-13 コンストラクタでオブジェクトを作成する
// list 7-24 コンストラクタの誤用を検出する

function Circle (radius) {

	if(!(this instanceof Circle)){
		return new Circle(radius);
	}
	this.radius = radius;
}


// list 7-22 constructorプロパティがつくられない問題をクロージャで解決

(function (p) {
	p.diameter = function() {
		return this.radius * 2;
	};

	p.circumference = function() {
		return this.diameter * Math.PI;
	};

	p.area = function() {
		return this.radius * this.radius * Math.PI;
	};
}(Circle.prototype));


// // list 7-16 Circle.prototypeへのプロパティの追加
// Circle.prototype.diameter = function() {
// 	return this.radius * 2;
// };

// Circle.prototype.circumference = function() {
// 	return this.diameter * Math.PI;
// };

// Circle.prototype.area = function() {
// 	return this.radius * this.radius * Math.PI;
// };

// list 7-18 Circle.prototypeへのプロパティの追加にオブジェクトリテラルを利用
// prototypeに新しいオブジェクトが代入されたため、constructorプロパティがつくられない
// list 7-21 constructorプロパティがつくられない問題を原始的に解決（解決といえるのか？）
// Circle.prototype = {
// 	constructor : Circle,
// 	diameter : function() {
// 		return this.radius * 2;
// 	},

// 	circumference : function() {
// 		return this.diameter * Math.PI;
// 	},

// 	area : function() {
// 		return this.radius * this.radius * Math.PI;
// 	}
// };