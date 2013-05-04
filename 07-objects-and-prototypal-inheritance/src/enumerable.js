// list 7-59 RubyのenumerableのJavaScript移植版の改訂版
var enumerable = {

	reject : function (callback) {
		var result = [];
		this.forEach(function (item) {
			if(!callback(item)){
				result.push(item);
			}
		});
		return result;
	}
};