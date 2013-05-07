// list 10-9 守りの堅いstrftimeの定義

(function () {

	if(Date.prototype.strftime || !String.prototype.replace){
		return;
	}

	var str = "%a %b";
	var regexp = /%[a-zA-Z]/g;
	var replaced = str.replace(regexp, function (m, c) {
		return "[" + m + " " + c + "]";
	});
	if(replaced != "[%a a] [%b b]"){
		return;
	}

	Date.prototype.strftime = function() {

	};

	Date.formats = {};

}());