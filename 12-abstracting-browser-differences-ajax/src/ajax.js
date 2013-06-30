// 12.3 XMLHttpRequestオブジェクトをつくる
// list 12-4 ajax名前空間を作る
// 12.3.3 createを実装する
// list 12-6 XMLHttpRequestオブジェクトをつくる

tddjs.namespace("ajax").create = function(){
	var options = [
		function () {
			return new ActiveXObject("Microsoft.XMLHTTP");
		},
		function () {
			return new XMLHttpRequest();
		}
	];

	for (var i = 0; i < options.length; i++) {
		try{
			return options[i]();
		} catch(e){
			console.log("error:" + options[i]);
		}
	}
	return null;
};