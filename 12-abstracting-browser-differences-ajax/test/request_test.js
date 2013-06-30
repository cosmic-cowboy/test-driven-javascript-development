// 12.4 要求の発行
// URLとHTTP同士でサーバーに要求を発行するインターフェイスをつくる
// 成功時、失敗時のコールバックを指定する
// list 12-9 tddjs.ajax.getが定義されていることを確認
// 12.4.1 URLの要件とする
// list 12-11 URLが必須とされていることをテストする
// list 12-13 テストにajax名前空間を「インポート」する
// list 12-15 createメソッドを手作業でスタブに置き換える
//（ajax.createをスタブに置き換えている）
// list 12-16 ajax.createを安元にスタブに置き換え、復元する
//（list 12-15ではテストが不合格だとメソッドが復元されない）
// list 12-19 スタブヘルパーを使ってコードを書き直す
// list 12-20 openメソッドが正しく使われていることをテスト
// 取得したXMLHttpRequestオブジェクトのopenメソッドが呼び出せるようにする
// list 12-23 改良されたスタブ作成ヘルパーを使う

(function (){

	var ajax = tddjs.ajax;

	TestCase("GetRequestTest", {
		// 元のメソッドの参照を保存
		setUp : function () {
			this.ajaxCreate = ajax.create;
		},

		// 元のメソッドを復元
		tearDown : function () {
			ajax.create = this.ajaxCreate;
		},

		"test should define get method" : function () {
			assertFunction(ajax.get);
		},
		"test should throw error without url" : function () {
			assertException(function () {
				ajax.get();
			}, "TypeError");
		},
		"test should obtain an XMLHttpRequest object" : function () {
			// スタブ関数で上書き
			ajax.create = stubFn({
				open : function () {}
			});
			ajax.get("/url");

			assert(ajax.create.called);
		},
		"test should call open with method, url, async flag" : function () {

			var openStub = stubFn();
			assertUndefined(openStub.args);
			assertFalse(openStub.called);

			// スタブ関数で上書き
			ajax.create = stubFn({
				open : openStub
			});
			assertUndefined(ajax.create.args);
			assertFalse(ajax.create.called);

			var url = "/url";
			ajax.get(url);

			// request.js tddjs.ajax.create()
			assertEquals([], ajax.create.args);
			assert(ajax.create.called);
			// request.js transport.open("GET", url, true);
			assert(openStub.called);
			assertEquals(["GET", url, true], openStub.args);
		}
	});

}());
