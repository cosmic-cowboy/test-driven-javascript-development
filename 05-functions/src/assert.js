// 関数式, 無名関数が作られる
// 使用法1. ほかに関数に渡す
// 使用法2. 関数の戻り値に
// 使用法3. 変数・オブジェクトのプロパティに代入

var assert = function(message, expr){

	if(!expr){
		throw new Error(message);
	}

	assert.count++;

	return true;
// 関数式には終端子としてセミコロンをつける
};

assert.count = 0;