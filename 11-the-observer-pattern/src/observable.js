// list 11-5 util名前空間を作る

tddjs.namespace('util');

// list 11-7 コンストラクタを追加する
// list 11-31 任意のオブジェクトの観察（サブクラスの生成）

(function () {

	function Observable () {
		// list 11-14 配列を正しく追加
		// list 11-35 コンストラクタを空にする
		// this.observers = [];
	}
	tddjs.util.Observable = Observable;


	// list 11-9 addObserverメソッドを追加する
	// list 11-11 配列をハードコードする
	// list 11-27 呼び出せない観察者を追加した時に例外を投げる
	// list 11-36 observers配列が存在しなければ、配列を定義する
	function addObserver (observer) {
		if(typeof observer != "function"){
			throw new TypeError("observer is not function");
		}
		if(!this.observers){
			this.observers = [];
		}
		this.observers.push(observer);
	}
	Observable.prototype.addObserver = addObserver;

	// list 11-16 hasObserverからの応答をハードコードする
	// list 11-18 観察者がいるかどうかを実際にチェックする
	// list 11-20 手作業で配列をループで処理する
	// list 11-37 観察者がなければ、falseを返す
	function hasObserver (observer) {
		if(!this.observers){
			return false;
		}
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
			try {
				this.observers[i].apply(this, arguments);				
			} catch(e){}
		}

	}

	Observable.prototype.notifyObservers = notifyObservers;

}());
