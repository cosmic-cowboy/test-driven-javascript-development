var benchmark = (function(){

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

					var li = document.createElement("li");
					li.innerHTML = name + " : " + total + "ms(total), " + (total / iterations) + "ms(avg)";
					view.appendChild(li);

				}, 15);

			}(label, tests[label]));
		}	
	}

	function benchmark(name, tests, iterations){
		iterations = iterations || 1000;
		var view = init(name);
		runTests(tests, view, iterations);
	}

	return benchmark;
}());