// list5-20 条件に基づいて文字列メソッドを提供する

var trim;

if(!String.prototype.trim){
	String.prototype.trim = function (str) {
		return str.replace(/^\s+|\s+$/g, "");
	};
}