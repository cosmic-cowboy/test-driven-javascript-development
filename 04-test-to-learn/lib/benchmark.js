var ol;
function runBenchmark(name, test){

	if(!ol){
		ol = document.createElement("ol");
		document.body.appendChild(ol);
	}

	// テスト中にブラウザを止めないため、setTimeoutを使用
	// タイマーは長時間実行される可能性のあるテストおの合間にキューイングされたタスクを拾い上げる
	setTimeout(function(){
		// 1. new Date()する（テストスタート時間）
		var start = new Date().getTime();
		// 2. 計測対象のコードを実行する
		test();
		// 3. new Date()する（終了：処理にかかった時間を算出）
		var total = new Date().getTime() - start ;

		var li = document.createElement("li");
		li.innerHTML = name + " : " + total + "ms";
		ol.appendChild(li);
	}, 15);
}