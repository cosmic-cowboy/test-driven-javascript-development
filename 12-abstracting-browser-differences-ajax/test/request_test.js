// 12.4 要求の発行
// URLとHTTP同士でサーバーに要求を発行するインターフェイスをつくる
// 成功時、失敗時のコールバックを指定する
// list 12-9 tddjs.ajax.getが定義されていることを確認

TestCase("GetRequestTest", {
	"test should define get method" : function () {
		assertFunction(tddjs.ajax.get);
	}
});
