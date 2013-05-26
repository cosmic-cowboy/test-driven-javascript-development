// list 11-3 addObserverが内部配列に観察者を追加することを確かめる
// list 11-13 ハードコードされたソリューションの問題点を暴く

TestCase("ObservableAddObserverTest", {
	"test should store function" : function () {
		// 観察対象オブジェクト
		var observable = new tddjs.util.Observable();
		// 観察者
		var observers = [function () {}, function () {}];

		observable.addObserver(observers[0]);
		observable.addObserver(observers[1]);

		assertEquals(observers, observable.observers);
	}
});

// list 11-15 既存の観察者があるときには、hasObserverがtrueを返すことを確かめる

TestCase("ObservableHasObserverTest", {
	"test should return true when has observer" : function () {
		var observable = new tddjs.util.Observable();
		var observer = function () {};

		observable.addObserver(observer);

		assertTrue(observable.hasObserver(observer));

	}
});