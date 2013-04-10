// list5-18 条件に基づく関数定義

var trim;

if(String.prototype.trim){
	trim = function (str) {
		return str.trim();
	};
}else{
	trim = function (str) {
		return str.replace(/^\s+|\s+$/g, "");
	};
}