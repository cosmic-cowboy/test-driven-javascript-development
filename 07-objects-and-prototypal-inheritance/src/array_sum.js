// list7-5 Array.prototypeへのメソッド追加

Array.prototype.sum = function() {
	var sum = 0;

	for (var i = 0; i < this.length; i++) {
		sum += this[i];
	}
	return sum;
};

