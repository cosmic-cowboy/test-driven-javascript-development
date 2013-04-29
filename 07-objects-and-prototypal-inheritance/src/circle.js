// list 7-13 コンストラクタでオブジェクトを作成する

function Circle (radius) {
	this.radius = radius;
}

// 円オブジェクトを作成する
// Object.prototypeから継承したプロパティ
// radiusプロパティを持つ

var circ = new Circle(6);

var circ2  = {radius : 6};