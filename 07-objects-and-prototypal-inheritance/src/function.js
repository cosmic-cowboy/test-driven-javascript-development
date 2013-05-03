// list 7-28 inheritの実装
// list 7-34 プロトタイプへのリンクの実装

if(!Function.prototype.inherit){
	(function () {

		// 中間的なコンストラクタ F
		function F () {}

		Function.prototype.inherit = function(superFn) {
			F.prototype = superFn.prototype;
			this.prototype = new F();
			this.prototype.constructor = this;
			this.prototype._super = superFn.prototype;

		};

	})();
}