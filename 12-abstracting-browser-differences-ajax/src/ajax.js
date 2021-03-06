// 12.3 XMLHttpRequestオブジェクトをつくる
// list 12-4 ajax名前空間を作る
// 12.3.3 createを実装する
// list 12-6 XMLHttpRequestオブジェクトをつくる
//（オブジェクトがないとexceptionが発生する）
// list 12-7 あらかじめサポートされているかどうかをチェックする
//（即時関数を利用して、ロード時に一回だけ実行されるようにする）
// 12.3.4 より強力な機能検出
// list 12-8 より強い機能検出の追加（もっと自信を持てるように）

(function () {
	var xhr;
	var ajax = tddjs.namespace("ajax");



	var options = [
		function () {
			return new ActiveXObject("Microsoft.XMLHTTP");
		},
		function () {
			return new XMLHttpRequest();
		}
	];

	for (var i = 0; i < options.length; i++) {
		try{
			// 実行できると、createに代入、実行できないとexception
			xhr = options[i]();

			// オブジェクトの機能テスト
			if(typeof xhr.readyState === "number" &&
				tddjs.isHostMethod(xhr, "open") &&
				tddjs.isHostMethod(xhr, "send") &&
				tddjs.isHostMethod(xhr, "setRequestHeader")){
				ajax.create = options[i];
				break;
			}
		} catch(e){
			console.log("error:" + options[i]);
		}
	}
}());
