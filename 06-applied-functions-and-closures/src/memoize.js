// list6-27 汎用メモ化メソッド

if(!Function.prototype.memoize){

	Function.prototype.memoize = function() {
		var cache = {};
		var func  = this;
		var join = Array.prototype.join;

		return function (x) {
			var key = join.call(arguments);
			if(!(x in cache)){
				cache[key] = func.apply(this, arguments);
			}

			return cache[x];
		};

	};
}