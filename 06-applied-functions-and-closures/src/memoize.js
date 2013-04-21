// list6-27 汎用メモ化メソッド

if(!Function.prototype.memoize){

	Function.prototype.memoize = function() {
		var cache = {};
		var func  = this;

		return function (x) {
			if(!(x in cache)){
				cache[x] = func.call(this, x);
			}

			return cache[x];
		};

	};
}