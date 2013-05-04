// list 7-41 非公開関数の定義

function Circle2 (radius) {
	this.radius = radius;
}

(function (circleProto) {

	// スコープ内で宣言された関数は非公開

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

	// プロトタイプのプロパティに関数を代入すると公開メソッドになる

	circleProto.getRadius = getRadius;
	circleProto.setRadius = setRadius;

})(Circle2.prototype);