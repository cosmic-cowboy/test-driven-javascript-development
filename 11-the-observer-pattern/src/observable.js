// list 11-5 util名前空間を作る

// tddjs.namespace('util');

// list 11-7 コンストラクタを追加する
// list 11-31 任意のオブジェクトの観察（サブクラスの生成）

(function () {

	// list 11-39 コンストラクタからオブジェクトへ コンストラクタを削除
	// function Observable () {
	// 	// list 11-14 配列を正しく追加
	// 	// list 11-35 コンストラクタを空にする
	// 	// this.observers = [];
	// }
	// tddjs.util.Observable = Observable;

	// list 11-46 配列ではなくオブジェクトに観察者を格納する
	function _observers (observable, event) {
		// まずobserverを格納するオブジェクトを作成
		if(!observable.observers){
			observable.observers = {};
		}
		// オブジェクトの中にeventごとの配列を用意
		// ここにアクションが入る
		if(!observable.observers[event]){
			observable.observers[event] = [];
		}

		// 返却値には引数にしていされたeventの配列が返却される
		// アクションを追加するも良し、確認するも良し。
		return observable.observers[event];
	}

	// list 11-9 addObserverメソッドを追加する
	// list 11-11 配列をハードコードする
	// list 11-27 呼び出せない観察者を追加した時に例外を投げる
	// list 11-36 observers配列が存在しなければ、配列を定義する
	// list 11-41 メソッドの名称変更
	// list 11-43 仮引数eventを追加（複数イベントに対応）
	// list 11-46 配列ではなくオブジェクトに観察者を格納する
	function observe (event, observer) {
		if(typeof observer != "function"){
			throw new TypeError("observer is not function");
		}
		// if(!this.observers){
		// 	this.observers = [];
		// }

		_observers(this, event).push(observer);
	}
	// Observable.prototype.addObserver = addObserver;

	// list 11-16 hasObserverからの応答をハードコードする
	// list 11-18 観察者がいるかどうかを実際にチェックする
	// list 11-20 手作業で配列をループで処理する
	// list 11-37 観察者がなければ、falseを返す
	// list 11-46 配列ではなくオブジェクトに観察者を格納する
	function hasObserver (event, observer) {
		// if(!this.observers){
		// 	return false;
		// }
		// 確認するだけでeventの配列ができてしまうのが、気になりますが...
		var observers = _observers(this, event);
		for (var i = 0, l = observers.length; i < l; i++){
			if(observers[i] === observer){
				return true;
			}
		}
		return false;
	}

	// Observable.prototype.hasObserver = hasObserver;

	// list 11-23 すべての観察者を呼び出す
	// list 11-25 applyを使ってnotifyObserverに渡された引数を渡す
	// list 11-38 観察者がなければ、falseを返す
	// list 11-41 メソッドの名称変更
	// list 11-44 第1引数以外の引数を観察者に渡す
	// list 11-46 配列ではなくオブジェクトに観察者を格納する
	function notify (event) {
		// if(!this.observers){
		// 	return false;
		// }
		var observers = _observers(this, event);
		arguments.slice = Array.prototype.slice;
		// var args = Array.prototype.slice(arguments, 1);

		for (var i = 0, l = observers.length; i < l; i++) {
			try {
				observers[i].apply(this, arguments.slice(1));
			} catch(e){}
		}

	}

	// Observable.prototype.notify = notify;
	// list 11-39 コンストラクタからオブジェクトへ メソッドをオブジェクトに追加
	// list 11-41 メソッドの名称変更
	tddjs.namespace('util').observable = {
		observe : observe,
		hasObserver : hasObserver,
		notify : notify
	}
}());
