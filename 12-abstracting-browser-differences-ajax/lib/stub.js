// 自動的なスタブ化
// 冗長な関数をまとめる
// list 12-18 スタブ関数作成ヘルパーを抽出する
// list 12-20 openメソッドが正しく使われていることをテスト
// 取得したXMLHttpRequestオブジェクトのopenメソッドが呼び出せるようにする
// list 12-22 スタブ関数作成ヘルパーを改良する（引数を記録する）

function stubFn (returnValue) {
	var fn = function () {
		fn.called = true;
		fn.args = arguments;
		return returnValue;
	};

	fn.called = false;

	return fn;
}