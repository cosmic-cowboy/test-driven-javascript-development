// 12.4 要求の発行
// URLとHTTP同士でサーバーに要求を発行するインターフェイスをつくる
// 成功時、失敗時のコールバックを指定する
// list 12-10 tddjs.ajax.getを定義する
// 12.4.1 URLの要件とする
// list 12-12 URLが文字列でなければ例外を投げる
// list 12-14 ソースにajax名前空間を「インポート」する
// list 12-17 XMLHttpRequestオブジェクトをつくる
(function () {

	var ajax = tddjs.namespace("ajax");

	function get(url) {
		if(typeof url !== "string"){
			throw new TypeError("URL should be string");
		}
		var transport = tddjs.ajax.create();
	}

	ajax.get = get;
}());
