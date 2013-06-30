// 12.4 要求の発行
// URLとHTTP同士でサーバーに要求を発行するインターフェイスをつくる
// 成功時、失敗時のコールバックを指定する
// list 12-9 tddjs.ajax.getが定義されていることを確認
// 12.4.1 URLの要件とする
// list 12-11 URLが必須とされていることをテストする
// list 12-13 テストにajax名前空間を「インポート」する
// list 12-15 createメソッドを手作業でスタブに置き換える
//（ajax.createをスタブに置き換えている）
(function (){

	var ajax = tddjs.ajax;

	TestCase("GetRequestTest", {
		"test should define get method" : function () {
			assertFunction(ajax.get);
		},
		"test should throw error without url" : function () {
			assertException(function () {
				ajax.get();
			}, "TypeError");
		},
		"test should obtain an XMLHttpRequest object" : function () {
			// 元のメソッドの参照を保存
			var originalCreate = ajax.create;
			// スタブ関数で上書き
			ajax.create = function () {
				ajax.create.called = true;
			};
			ajax.get("/url");

			assert(ajax.create.called);
			// 元のメソッドを復元
			ajax.create = originalCreate;
		}
	});

}());
