// 12.4 要求の発行
// URLとHTTP同士でサーバーに要求を発行するインターフェイスをつくる
// 成功時、失敗時のコールバックを指定する
// list 12-10 tddjs.ajax.getを定義する
// 12.4.1 URLの要件とする
// list 12-12 URLが文字列でなければ例外を投げる
// list 12-14 ソースにajax名前空間を「インポート」する
// list 12-17 XMLHttpRequestオブジェクトをつくる
// list 12-21 openを呼び出す
// list 12-27 ajax.createが定義されていない場合には途中で終了する
// ajax.getはajax.createメソッドに依存しているため、ajax.getを使う前に、ajax.createがあることを確認
(function () {

	var ajax = tddjs.namespace("ajax");

	if(!ajax.create){
		return;
	}
	function get(url) {
		if(typeof url !== "string"){
			throw new TypeError("URL should be string");
		}
		var transport = tddjs.ajax.create();

		transport.open("GET", url, true);
	}

	ajax.get = get;
}());
