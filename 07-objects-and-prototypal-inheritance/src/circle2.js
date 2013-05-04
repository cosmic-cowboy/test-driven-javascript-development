// list 7-44 関数継承を使ったCircle2の実装

function circle (radius) {

	// ネスト関数は自由変数にアクセスできる
	// 内部非公開関数

	function getSetRadius () {
		if(arguments.length > 0){
			if(arguments[0] < 0){
				throw new TypeError("Radius should be >= 0");
			}

			radius = arguments[0];
		}
		return radius;
	}

	function diameter () {
		return radius * 2;
	}

	function circumference () {
		return diameter() * Math.PI;
	}

	function area() {
		return radius * radius * Math.PI;
	}

	// プロパティに代入

	return {
		radius : getSetRadius,
		diameter : diameter,
		area : area,
		circumference : circumference
	};
}



// // list 7-43 非公開メンバーと特権メソッド

// function Circle2 (radius) {
// 	function getSetRadius () {
// 		if(arguments.length > 0){
// 			if(arguments[0] < 0){
// 				throw new TypeError("Radius should be >= 0");
// 			}

// 			radius = arguments[0];
// 		}
// 		return radius;
// 	}

// 	function diameter () {
// 		return radius * 2;
// 	}

// 	function circumference () {
// 		return diameter() * Math.PI;
// 	}

// 	// 特権メソッドへのアクセス手段
// 	this.radius = getSetRadius;
// 	this.diameter = diameter;
// 	this.circumference = circumference;

// 	this.radius(radius);
// }


// // list 7-42 コンストラクタ内部の非公開関数の使い方

// function Circle2 (radius) {
// 	this.radius = radius;

// 	function ensureValidRadius (radius) {
// 		return radius >= 0;
// 	}

// 	function getRadius() {
// 		return this.radius;
// 	}

// 	function setRadius(radius) {
// 		if(ensureValidRadius(radius)){
// 			this.radius = radius;
// 		}
// 	}

// 	// 公開メソッドを外から見えるように
// 	this.getRadius = getRadius;
// 	this.setRadius = setRadius;
// }


// // list 7-41 非公開関数の定義

// function Circle2 (radius) {
// 	this.radius = radius;
// }

// (function (circleProto) {

// 	// スコープ内で宣言された関数は非公開

// 	function ensureValidRadius (radius) {
// 		return radius >= 0;
// 	}

// 	function getRadius() {
// 		return this.radius;
// 	}

// 	function setRadius(radius) {
// 		if(ensureValidRadius(radius)){
// 			this.radius = radius;
// 		}
// 	}

// 	// プロトタイプのプロパティに関数を代入すると公開メソッドになる

// 	circleProto.getRadius = getRadius;
// 	circleProto.setRadius = setRadius;

// })(Circle2.prototype);