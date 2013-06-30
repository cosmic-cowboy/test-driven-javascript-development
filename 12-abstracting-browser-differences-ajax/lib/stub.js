// 自動的なスタブ化
// 冗長な関数をまとめる
// list 12-18 スタブ関数作成ヘルパーを抽出する

function stubFn () {
	var fn = function () {
		fn.called = true;
	};
	fn.called = false;

	return fn;
}