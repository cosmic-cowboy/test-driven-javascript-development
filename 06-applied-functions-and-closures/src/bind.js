// list6-4 bindの実装

if(!Function.prototype.bind) {
	Function.prototype.bind = function(thisObj) {
		var target = this;

		return function(){
			return target.apply(thisObj, arguments);
		};
	};
}