var loopLength = 100000;

// ループ実行のために配列に値をセット
var array = [];

for(var i = 0; i < loopLength; i++){
	array[i] = "item" + i;
}

// benchmark.js benchmark(name, tests, iterations)
benchmark("Loop performance", {

	// test01
	"for-loop" : function(){
		for (var i = 0, item; i < array.length; i++) {
			item = array[i];
		}
	},

	// test02
	"for-loop, cached length" : function(){
		for (var i = 0, l = array.length, item; i < l; i++) {
			item = array[i];
		}
	},

	// test03
	"for-loop, direct access" : function(){
		for (var i = 0, item; (item = array[i]); i++) {

		}
	},

	// test04
	"while-loop" : function(){
		var i = 0, item;

		while(i < array.length){
			item = array[i];
			i++;
		}
	},

	// test05
	"while-loop, cached length" : function(){
		var i = 0, l = array.length, item;

		while(i < l){
			item = array[i];
			i++;
		}
	},

	// test06
	"reverse-while-loop" : function(){
		var l = array.length, item;

		while(l--){
			item = array[l];
		}
	},

	// test07
	"double-reverse-while-loop" : function (){
		var l = array.length, i = l, item;

		while(i--){
			item = array[l - i - 1];
		}
	}

}, 1000);






