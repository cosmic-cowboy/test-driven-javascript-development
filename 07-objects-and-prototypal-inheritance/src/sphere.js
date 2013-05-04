// list 7-30 Sphereコンストラクタの中からCircleコンストラクタにアクセス

function Sphere (radius) {
	Circle.call(this, radius);
}


// list 7-38 inherit2でSphereを実装する

Sphere.inherit2(Circle, {
	area : function () {
		return 4 * this._super();
	}
});

// // 7-29 inheritを使ってSphereにCircleを継承させる

// Sphere.inherit(Circle);


// // list 7-35 プロトタイプチェーン上のメソッドを呼び出す

// Sphere.prototype.area = function() {
// 	return 4 * this._super.area.call(this);
// };

// // list 7-31 プロトタイプチェーン上のメソッドを呼び出す
// // inheritの後に書かないと行方不明になる

// Sphere.prototype.area = function() {
// 	return 4 * Circle.prototype.area.call(this);
// };

// list 7-25 深い継承

// function Sphere (radius) {
// 	this.radius = radius;
// }

// Sphere.prototype = (function() {
// 	function F (){}
// 	F.prototype = Circle.prototype;
// 	return new F();
// }());

// // コンストラクタ
// // プロトタイプチェーンがおかしくなるので補正
// Sphere.prototype.constructor = Sphere;