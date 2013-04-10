// argumentsで配列メソッドを使う

function addToArray(){

	// 文字列によるプロパティへのアクセス

	var targetArr = arguments["0"];
	arguments.slice = Array.prototype.slice;
	var add = arguments.slice(1);

	return targetArr.concat(add);
}