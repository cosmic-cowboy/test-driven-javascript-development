var loopLength = 500000;

// ループ実行のために配列に値をセット
var array = [];

for(var i = 0; i < loopLength; i++){
	array[i] = "item" + i;
}

// test01
function forLoop(){
	for (var i = 0, item; i < array.length; i++) {
		item = array[i];
	}
}

// test02
function forLoopCachedLength(){
	for (var i = 0, l = array.length, item; i < l; i++) {
		item = array[i];
	}
}

// test03
function forLoopDirectAccess(){
	for (var i = 0, item; (item = array[i]); i++) {

	}
}

// test04
function whileLoop(){
	var i = 0, item;

	while(i < array.length){
		item = array[i];
		i++;
	}
}

// test05
function whileLoopCachedLength(){
	var i = 0, l = array.length, item;

	while(i < l){
		item = array[i];
		i++;
	}
}

// test06
function reverseWhileLoop(){
	var l = array.length, item;

	while(l--){
		item = array[l];
	}
}

// test07
function doubleReverseWhileLoop(){
	var l = array.length, i = l, item;

	while(i--){
		item = array[l - i - 1];
	}
}


// テストを実行
runBenchmark("for-loop", forLoop);

runBenchmark("for-loop, cached length", forLoopCachedLength);

runBenchmark("for-loop, direct access", forLoopDirectAccess);

runBenchmark("while-loop", whileLoop);

runBenchmark("while-loop, cached length", whileLoopCachedLength);

runBenchmark("reverse-while-loop", reverseWhileLoop);

runBenchmark("double-reverse-while-loop", doubleReverseWhileLoop);


