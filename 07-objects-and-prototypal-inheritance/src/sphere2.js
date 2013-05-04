// list 7-46 関数型継承を使ったSphere の実装

function sphere (radius) {

	// 拡張したいオブジェクトを生成

	var sphereObj = circle(radius);

	var circleArea = sphereObj.area;
	function area () {
		return 4 * circleArea.call(this);
	}

	// メソッドを追加

	sphereObj.area = area;

	return sphereObj;
}