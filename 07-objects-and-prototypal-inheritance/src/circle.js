// list 7-13 コンストラクタでオブジェクトを作成する

function Circle (radius) {
	this.radius = radius;
}

// list 7-16 Circle.prototypeへのプロパティの追加

Circle.prototype.diameter = function() {
	return this.radius * 2;
};

Circle.prototype.circumference = function() {
	return this.diameter * Math.PI;
};

Circle.prototype.area = function() {
	return this.radius * this.radius * Math.PI;
};