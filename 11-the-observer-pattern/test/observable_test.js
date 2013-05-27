// list 11-3 addObserverが内部配列に観察者を追加することを確かめる
// list 11-13 ハードコードされたソリューションの問題点を暴く
// list 11-21 重複するテストを取り除く

TestCase("ObservableAddObserverTest", {
	"test should store functions" : function () {
		// 観察対象オブジェクト
		var observable = new tddjs.util.Observable();
		// 観察者
		var observers = [function () {}, function () {}];

		observable.addObserver(observers[0]);
		observable.addObserver(observers[1]);

		assertTrue(observable.hasObserver(observers[0]));
		assertTrue(observable.hasObserver(observers[1]));
	}
});

// list 11-15 既存の観察者があるときには、hasObserverがtrueを返すことを確かめる

TestCase("ObservableHasObserverTest", {

	// list 11-17 観察者がいないときには、hasObserverがfalseを返すことを確かめる
	"test should return false when no observers" : function () {
		var observable = new tddjs.util.Observable();

		assertFalse(observable.hasObserver(function () {}));

	}
});

// list 11-22 notifyObserversがすべての観察者を呼び出していることを確かめる

TestCase("ObservableNotifyObserversTest", {
	"test should call all observers" : function () {
		var observable = new tddjs.util.Observable();
		var observer1 = function () { observer1.called = true; };
		var observer2 = function () { observer2.called = true; };

		observable.addObserver(observer1);
		observable.addObserver(observer2);
		observable.notifyObservers();

		assertTrue(observer1.called);
		assertTrue(observer2.called);
	}
});