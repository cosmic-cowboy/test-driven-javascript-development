/*jslint indent: 2, onevar: false, plusplus: false, eqeqeq: false, nomen: false*/
var tddjs = (function () {
  function namespace(string) {
    var object = this;
    var levels = string.split(".");

    for (var i = 0, l = levels.length; i < l; i++) {
      if (typeof object[levels[i]] == "undefined") {
        object[levels[i]] = {};
      }

      object = object[levels[i]];
    }

    return object;
  }

  return {
    namespace: namespace
  };
}());

tddjs.uid = (function () {
  var id = 0;

  function uid(object) {
    if (typeof object.__uid != "number") {
      object.__uid = id++;
    }

    return object.__uid;
  }

  return uid;
}());

tddjs.iterator = (function () {
  function iterator(collection) {
    var index = 0;
    var length = collection.length;

    function next() {
      var item = collection[index++];
      next.hasNext = index < length;

      return item;
    }

    next.hasNext = index < length;

    return next;
  }

  return iterator;
}());

// list 7-10 hasOwnProperty SandBox
tddjs.isOwnProperty = (function () {
  var hasOwn = Object.prototype.hasOwnProperty;

  if (typeof hasOwn == "function") {
    return function (object, property) {
      return hasOwn.call(object, property);
    };
  } else {
    // Provide an emulation if you can live with possibly
    // inaccurate results
  }
}());

// list 7-12 クロスブラウザでプロパティのループ処理に使えるeachメソッド
	// 引数のオブジェクトのプロパティでfor-inループに姿を現さないものの配列を返す

tddjs.each = (function () {

	function unEnumerated (object, properties) {
		var length = properties.length;

		for (var i = 0; i < length; i++) {
			object[properties[i]] = true;
		}

		var enumerated = length;

		for(var prop in object){
			if(tddjs.isOwnProperty(object, prop)){
				enumerated -= 1;
				object[prop] = false;
			}
		}

		if(!enumerated){
			return;
		}

		var needsFix = [];

		for (var i = 0; i < length; i++) {
			if(object[properties[i]]){
				needsFix.push(properties[i]);
			}
		}
		return needsFix;
	}

	var oFixes = unEnumerated({},
		["toString", "toLocalString", "valueOf", 
		"hasOwnProperty", "isPrototypeOf",
		"constructor", "propertyIsEnumerable"];

	var fFixes = unEnumerated(
			function () {}, ["call", "apply","prototype"]
		);

	if(fFixes && oFixes){
		fFixes = oFixes.concat(fFixes);
	}

	var needsFix = {"object" : oFixes, "function" : fFixes};

	return funciton(object, callback){
		if(typeof callback != "function"){
			throw new TypeError("callback is not a function");
		}

		// 通常のループ
		for(var prop in object){
			if(tddjs.isOwnProperty(object, prop)){
				callback(prop, object[prop]);
			}
		}

		var fixes = needsFix[typeof object];

		if(fixes){
			var property;
			for(var i = 0, l = fixes.length; i < l; i++){
				property = fixes[i];

				if(tddjs.isOwnProperty(object, property)){
					callback(property, object[property]);
				}
			}
		}
	};
}());

