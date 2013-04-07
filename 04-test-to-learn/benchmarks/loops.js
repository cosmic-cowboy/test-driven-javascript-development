var loopLength = 500000;

// ループ実行のために配列に値をセット
var array = [];

for(var i = 0; i < loopLength; i++){
	array[i] = "item" + i;
};

function forLoop(){
	for (var i = 0, item; i < array.length; i++) {
		item = array[i]
	};
}

function forLoopCachedLength(){
	for (var i = 0, l = array.length, item; i < l; i++) {
		item = array[i]
	};
}

function forLoopDirectAccess(){
	for (var i = 0, item; (item = array[i]); i++) {

	};
}

// テストを実行
runBenchmark("for-loop", forLoop);