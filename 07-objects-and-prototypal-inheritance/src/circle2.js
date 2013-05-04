
// list 7-42 コンストラクタ内部の非公開関数の使い方

function Circle2 (radius) {
	this.radius = radius;

	function ensureValidRadius (radius) {
		return radius >= 0;
	}

	function getRadius() {
		return this.radius;
	}

	function setRadius(radius) {
		if(ensureValidRadius(radius)){
			this.radius = radius;
		}
	}

	// 公開メソッドを外から見えるように
	this.getRadius = getRadius;
	this.setRadius = setRadius;
}


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