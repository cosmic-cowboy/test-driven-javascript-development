// argumentsで配列メソッドを使う

function addToArray(){

	// 文字列によるプロパティへのアクセス

	var targetArr = arguments["0"];
	var add = Array.prototype.slice.call(arguments, 1);

	return targetArr.concat(add);
}