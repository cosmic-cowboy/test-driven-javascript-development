// list 7-25 深い継承

function Sphere (radius) {
	this.radius = radius;
}

// 7-29 inheritを使ってSphereにCircleを継承させる
Sphere.inherit(Circle);

// Sphere.prototype = (function() {
// 	function F (){}
// 	F.prototype = Circle.prototype;
// 	return new F();
// }());

// // コンストラクタ
// // プロトタイプチェーンがおかしくなるので補正
// Sphere.prototype.constructor = Sphere;