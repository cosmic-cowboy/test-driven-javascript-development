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