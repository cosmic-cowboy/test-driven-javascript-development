// 関数宣言
function assert(message, expr){

	if(arguments.length < 2){
		throw new Error("Provide message and value to test");
	}

	if(!arguments[1]){
		throw new Error(arguments[0]);
	}

	assert.count++;

	return true;
}

// 関数はオブジェクトなのでプロパティを持つことができる
assert.count = 0;