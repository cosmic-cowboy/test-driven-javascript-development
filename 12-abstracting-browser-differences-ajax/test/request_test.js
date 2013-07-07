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
// list 12-26 ajax.createとXMLHttpRequestの自動スタブ作成
// スタブをsetUpで事前に作成し、TestCase内で共有する
// 12.4.3 状態変更の処理の準備
// list 12-28 レディ状態ハンドラに関数が代入されていることを確認
// list 12-31 sendメソッドが呼び出されたことを確認
// 12.4.4 状態変更の処理
// list 12-33 レディ状態ハンドラをテストして要求が成功したがどうか確認
// list 12-35 要求が成功してもコールバックがないときに対応
// 大きな応答を返す要求では、ハンドラが何度も呼び出され、不要なオーバーヘッドが加わるため、関数呼び出しを一度にする
// list 12-40 sendが引数つきで呼び出されることをアサートする
// list 12-42 循環参照が切れていることをアサートする
// list 12-44 ローカル要求でも成功ハンドラが呼び出せるようにする

(function (){

	var ajax = tddjs.ajax;

	TestCase("GetRequestTest", {
		// 元のメソッドの参照を保存
		setUp : function () {
			this.ajaxCreate = ajax.create;
			this.xhr = Object.create(fakeXMLHtppRequest);
			ajax.create = stubFn(this.xhr);
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

			ajax.get("/url");

			assert(ajax.create.called);
		},
		"test should call open with method, url, async flag" : function () {

			var url = "/url";
			ajax.get(url);

			assertEquals(["GET", url, true], this.xhr.open.args);
		},
		"test should add onreadystatechange handler" : function () {
			ajax.get("/url");
			assertFunction(this.xhr.onreadystatechange);
			assertFunction(ajax.create().onreadystatechange);
		},
		"test should call send" : function () {
			ajax.get("/url");

			assert(this.xhr.send.called);
		},
		"test should pass null as argument to send" : function () {
			ajax.get("/url");

			assertNull(this.xhr.send.args[0]);
		}
	});

	TestCase("ReadyStateHandlerTest", {
		// 元のメソッドの参照を保存
		setUp : function () {
			this.ajaxCreate = ajax.create;
			this.xhr = Object.create(fakeXMLHtppRequest);
			ajax.create = stubFn(this.xhr);
		},

		// 元のメソッドを復元
		tearDown : function () {
			ajax.create = this.ajaxCreate;
		},

		"test should call success handler for status 200" : function () {
			// レディ状態：要求完了時 4
			this.xhr.readyState = 4;
			// HTTPステータス 200
			this.xhr.status = 200;
			// 成功時のAction
			var success = stubFn();

			ajax.get("/url", {success : success});
			this.xhr.onreadystatechange();

			assert(success.called);
		},

		"test should not throw error without success handler" : function () {
			// レディ状態：要求完了時 4
			this.xhr.readyState = 4;
			// HTTPステータス 200
			this.xhr.status = 200;

			ajax.get("/url");
			assertNoException(
				function(){
					this.xhr.onreadystatechange();
				}.bind(this)
			);
		},

		"test should reset onreadystatechange when complete": function (){
			this.xhr.readyState = 4;
			ajax.get("/url");

			this.xhr.onreadystatechange();
			assertSame(tddjs.noop, this.xhr.onreadystatechange);
		},

		"test should call success handler for local requests": function () {
			this.xhr.readyState = 4;
			this.xhr.status = 0;
			var success = stubFn();
			tddjs.isLocal = stubFn(true);

			ajax.get("file.html", {
				success : success
			});
			this.xhr.onreadystatechange();
			assert(success.called);
		}
	});

}());
