// 自動的なスタブ化
// 冗長な関数をまとめる
// list 12-18 スタブ関数作成ヘルパーを抽出する
// list 12-20 openメソッドが正しく使われていることをテスト
// 取得したXMLHttpRequestオブジェクトのopenメソッドが呼び出せるようにする
function stubFn (returnValue) {
	var fn = function () {
		fn.called = true;
		return returnValue;
	};
	fn.called = false;

	return fn;
}