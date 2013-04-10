// list5-19 条件に基づく関数定義 危険

var trim;

if(String.prototype.trim){
	function trim(str) {
		return str.trim();
	};
}else{
	function trim (str) {
		return str.replace(/^\s+|\s+$/g, "");
	};
}