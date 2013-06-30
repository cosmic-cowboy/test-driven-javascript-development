// 12.4 要求の発行
// URLとHTTP同士でサーバーに要求を発行するインターフェイスをつくる
// 成功時、失敗時のコールバックを指定する
// list 12-9 tddjs.ajax.getが定義されていることを確認
// 12.4.1 URLの要件とする
// list 12-11 URLが必須とされていることをテストする

TestCase("GetRequestTest", {
	"test should define get method" : function () {
		assertFunction(tddjs.ajax.get);
	},
	"test should throw error without url" : function () {
		assertException(function () {
			tddjs.ajax.get();
		}, "TypeError");
	}
});
