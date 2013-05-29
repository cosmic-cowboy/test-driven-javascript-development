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
	// list 11-20 手作業で配列をループで処理する
	function hasObserver (observer) {
		for (var i = 0, l = this.observers.length; i < l; i++){
			if(this.observers[i] === observer){
				return true;
			}
		}
		return false;
	}

	Observable.prototype.hasObserver = hasObserver;

	// list 11-23 すべての観察者を呼び出す
	// list 11-25 applyを使ってnotifyObserversに渡された引数を渡す
	function notifyObservers () {
		for (var i = 0, l = this.observers.length; i < l; i++) {
			this.observers[i].apply(this, arguments);
		}

	}

	Observable.prototype.notifyObservers = notifyObservers;

}());
