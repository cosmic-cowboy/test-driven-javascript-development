// 関数宣言
function assert(message, expr){

	if(!expr){
		throw new Error(message);
	}

	assert.count++;

	return true;
}

// 関数はオブジェクトなのでプロパティを持つことができる
assert.count = 0;