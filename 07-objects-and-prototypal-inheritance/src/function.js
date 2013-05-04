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
// すべての関数を再定義、クロージャでラップ

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


// list 7-39 もっと単純な_super実装

function _super (object, methodName) {
	var method = object._super && object._super[methodName];

	if(typeof methodName != "function"){
		return;
	}

	// 最初の２つの引数（オブジェクトとメソッド）を取り除く
	var args = Array.prototype.slice.call(arguments, 2);

	// 残りの引数をsuperに渡す
	return method.apply(object, args);
}











