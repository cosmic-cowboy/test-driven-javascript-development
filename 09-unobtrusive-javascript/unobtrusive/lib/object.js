// list 7-49 Object.createの実装

if(!Object.create){
	(function () {
		// 中間コンストラクタ
		function F(){}

		Object.create = function (object) {
			F.prototype = object;
			return new F();
		};
	}());
}