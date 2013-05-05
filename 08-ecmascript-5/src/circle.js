// list 8-11 Object.create を使ったコンストラクタ

function Circle (radius) {
	var _radius;

	var circle = Object.create(
		Circle.prototype, {
			radius : {
				configurable : false,
				enumerable : true,

				set : function (r) {
					if(typeof r != "number" || r <= 0){
						throw new TypeError("radius should be > 0");
					}

					_radius = r;
				},

				get : function () {
					return _radius;
				}
			}
		}
	);

	circle.radius = radius;

	return circle;
}

Circle.prototype = Object.create(Circle.prototype, {

	diameter : {
		get : function () {
			return this.radius * 2;
		},
		configurable : false,
		enumerable : true
	},

	circumference : {},
	area : {}
});


// // list 8-1 単純な名前/値を代入する

// var circle = {};

// circle.radius = 4;