// lsit6-16 namespace関数	

var tddjs = (function () {
	function namespace(string){
		var object = this;
		var levels = string.split(".");

		for (var i = 0, l = levels.length; i < l; i++) {
			if(typeof object[levels[i]] == "undefined"){
				object[levels[i]] = {};
			}
			object = object[levels[i]];
		}
		return object;
	}

	return {
		namespace : namespace
	};
}());

// lsit6-20 自由変数に状態を格納する

(function(){
	var id = 0;
	function uid (object) {
		if(typeof object._uid != "number"){
			object._uid = id++;
		}
		return object._uid;
	}

	if(typeof tddjs == "object"){
		tddjs.uid = uid;
	}
}());