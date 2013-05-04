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


// list 7-37 _superをメソッドとして実装する

if(!Function.prototype.inherit2){

	// 無名関数の即時実行

	(function () {

		function F () {}

		Function.prototype.inherit2 = function(superFn, methods) {
			F.prototype = superFn.prototype;
			this.prototype = new F();
			this.prototype.constructor = this;

			var subProto = this.prototype;

			tddjs.each(methods, function (name, method) {

				// 元のメソッドをラップする
				subProto[name] = function () {
					var returnValue;
					var oldSuper = this._super;
					this._super = superFn.prototype[name];

					try{
						returnValue = method.apply(this, arguments);
					} finally {
						this._super = oldSuper;
					}

					return returnValue;
				};
			});
		};
	})();

}