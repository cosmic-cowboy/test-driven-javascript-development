// list 11-5 util名前空間を作る

tddjs.namespace('util');

// list 11-7 コンストラクタを追加する

(function () {
	
	function Observable () {
	}
	tddjs.util.Observable = Observable;

	// list 11-9 addObserverメソッドを追加する
	function addObserver () {
	}
	Observable.prototype.addObserver = addObserver;

}());
