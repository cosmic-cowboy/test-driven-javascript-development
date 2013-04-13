// list6-5 bindとsetTimeoutを使ったメソッド呼び出しの遅延実行

function bench(func) {
	var start = new Date().getTime();

	for(var i = 0; i < 10000; i++){
		func();
	}

	jstestdriver.console.log(func, new Date().getTime() - start);
}

var benchmarks = [

	function forLoop () {
		// body...
	},
	function forLoopCachedLength () {
		// body...
	}
];

setTimeout(benchmarks.forEach.bind(benchmarks, bench), 5000);
