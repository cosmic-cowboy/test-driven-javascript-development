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
// list 12-29 空のonreadystatechangeハンドラを設定
// list 12-32 sendメソッドを呼び出す
// list 12-34 成功コールバックを受け付け、呼び出す
// list 12-36 options引数をチェックする
// list 12-41 sendメソッドにnullを渡す
// list 12-43 循環参照を破る

tddjs.noop = function () {};

(function () {

	var ajax = tddjs.namespace("ajax");

	if(!ajax.create){
		return;
	}

	function requestComplete (transport, options) {
		// 本番用
		if(transport.status === 200){
		// ローカルファイル用
		// if(transport.status === 0){
			if(typeof options.success === "function"){
				options.success(transport);
			}
		}
	}

	function get(url, options) {
		if(typeof url !== "string"){
			throw new TypeError("URL should be string");
		}
		options = options || {};
		var transport = tddjs.ajax.create();

		transport.open("GET", url, true);
		transport.onreadystatechange = function () {
			if(transport.readyState === 4){
				requestComplete(transport, options);
				transport.onreadystatechange = tddjs.noop;
			}
		};
		transport.send(null);
	}

	ajax.get = get;
}());
