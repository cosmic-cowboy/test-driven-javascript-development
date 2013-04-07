var benchmark = (function(){

	// 時間を計測する
	var times;

	// Initialization create Ordered List
	function init(name){
		var heading = document.createElement("h2");
		heading.innerHTML = name;
		document.body.appendChild(heading);

		var ol = document.createElement("ol");
		document.body.appendChild(ol);

		return ol;
	}

	function runTests(tests, view, iterations){
		for (var label in tests){
			if(!tests.hasOwnProperty(label) || typeof tests[label] != "function"){
				continue;
			}

			// Inside runTests
			(function (name, test){
				setTimeout(function(){
					// test start
					var start = new Date().getTime();
					var l = iterations;

					// test
					if(!test.length){
						while(l--){
							test();
						}
					} else {
						test(1);
					}

					// test end 
					var total = new Date().getTime() - start;
					times[name] = total;

					var li = document.createElement("li");
					li.innerHTML = name + " : " + total + "ms(total), " + (total / iterations) + "ms(avg)";
					view.appendChild(li);

				}, 15);
			}(label, tests[label]));
		}
	}

	function highlightExtremes(view){

		// タイムアウトは他のすべてのタイマーのあとにキューイングされる
		// すべてのテストが実行を終了し、
		// timesオブジェクトに値がセットされていることが保証されている
		setTimeout(function(){

			var min = new Date().getTime();
			var max = 0;
			var fastest, slowest;

			for(var label in times){
				if(!times.hasOwnProperty(label)){
					continue;
				}

				if(times[label] < min){
					min = times[label];
					fastest = label;
				}

				if(times[label] > max){
					max = times[label];
					slowest = label;
				}
			}

			var lis = view.getElementsByTagName("li");
			var fastRegexp = new RegExp("^" + fastest + " :");
			var slowRegexp = new RegExp("^" + slowest + " :");

			for (var i = 0; i < lis.length; i++) {
				if(slowRegexp.test(lis[i].innerHTML)){
					lis[i].style.color = '#c00';
				}

				if(fastRegexp.test(lis[i].innerHTML)){
					lis[i].style.color = '#0c0';
				}
			}
		}, 15);

	}

	function benchmark(name, tests, iterations){
		iterations = iterations || 1000;
		times = {};
		var view = init(name);
		runTests(tests, view, iterations);
		highlightExtremes(view);
	}

	return benchmark;
}());