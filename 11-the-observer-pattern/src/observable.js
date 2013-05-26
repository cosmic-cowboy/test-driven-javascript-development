// list 11-5 util名前空間を作る

tddjs.namespace('util');

// list 11-7 コンストラクタを追加する

(function () {

	function Observable () {
		// list 11-14 配列を正しく追加
		this.observers = [];
	}
	tddjs.util.Observable = Observable;


	// list 11-9 addObserverメソッドを追加する
	// list 11-11 配列をハードコードする
	function addObserver (observer) {
		this.observers.push(observer);
	}
	Observable.prototype.addObserver = addObserver;

	// list 11-16 hasObserverからの応答をハードコードする
	// list 11-18 観察者がいるかどうかを実際にチェックする
	function hasObserver (observer) {
		return this.observers.indexOf(observer) >= 0;
	}
	Observable.prototype.hasObserver = hasObserver;

}());
