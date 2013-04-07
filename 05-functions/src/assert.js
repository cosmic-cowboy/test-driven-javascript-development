// 名前付き関数式
// 識別子はオプション 外側のスコープからは無名関数

var assert = function assert(message, expr){

	if(!expr){
		throw new Error(message);
	}

	assert.count++;

	return true;
// 関数式には終端子としてセミコロンをつける
};

assert.count = 0;