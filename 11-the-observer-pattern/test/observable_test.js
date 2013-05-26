// list 11-3 addObserverが内部配列に観察者を追加することを確かめる

TestCase("ObservableAddObserverTest", {
	"test should store function" : function () {
		// 観察対象オブジェクト
		var observable = new tddjs.util.Observable();
		// 観察者
		var observer = function () {};

		observable.addObserver(observer);

		assertEquals(observer, observable.observers[0]);
	}
});