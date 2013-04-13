// list6-6 引数のバインドもサポートするbind

if(!Function.prototype.bind) {
	Function.prototype.bind = function(thisObj) {
		var target = this;
		var args   = Array.prototype.slice.call(arguments, 1);

		return function(){
			var received = Array.prototype.slice.call(arguments);

			return target.apply(thisObj, args.concat(received));
		};
	};
}