// list6-25 フィボナッチ数列

function fibonacci (x) {

	if(x < 2){
		return 1;
	}

	return fibonacci(x - 1) + fibonacci(x - 2);
}