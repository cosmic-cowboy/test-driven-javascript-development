// Functionを使った関数の作成
var assert = Function("message", "expr",
	"if(!expr){" +
	"	throw new Error(message);" +
	"}" +
	"assert.count++;" +
	"return true;"
);

// 関数はオブジェクトなのでプロパティを持つことができる
assert.count = 0;