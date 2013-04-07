var ol;
function runBenchmark(name, test){

	if(!ol){
		ol = document.createElement("ol");
		document.body.appendChild(ol);
	}

	setTimeout(function(){
		// スタート時間
		var start = new Date().getTime();
		test();
		// 実行時間
		var total = new Date().getTime() - start ;

		var li = document.createElement("li");
		li.innerHTML = name + " : " + total + "ms";
		ol.appendChild(li);
	}, 15);
}