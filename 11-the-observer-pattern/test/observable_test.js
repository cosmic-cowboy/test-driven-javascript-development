// list 11-3 addObserverが内部配列に観察者を追加することを確かめる
// list 11-13 ハードコードされたソリューションの問題点を暴く
// list 11-21 重複するテストを取り除く
// list 11-41 メソッドの名称変更
// list 11-42 呼び出しの更新（複数イベントに対応）

TestCase("ObservableAddObserverTest", {
	// list 11-40 observableオブジェクトを使用
	setUp : function () {
		// 観察対象オブジェクト
		this.observable = Object.create(tddjs.util.observable);
	},
	"test should store functions" : function () {

		// 観察者
		var observers = [function () {}, function () {}];

		this.observable.observe("event", observers[0]);
		this.observable.observe("event", observers[1]);

		assertTrue(this.observable.hasObserver(observers[0]));
		assertTrue(this.observable.hasObserver(observers[1]));
	},

	"test should throw for uncallable observer" : function () {

		assertException(function () {
			this.observable.observe({});
		}, "TypeError");
	}
});

// list 11-15 既存の観察者があるときには、hasObserverがtrueを返すことを確かめる

TestCase("ObservableHasObserverTest", {
	// list 11-40 observableオブジェクトを使用
	setUp : function () {
		// 観察対象オブジェクト
		this.observable = Object.create(tddjs.util.observable);
	},

	// list 11-17 観察者がいないときには、hasObserverがfalseを返すことを確かめる
	"test should return false when no observers" : function () {

		assertFalse(this.observable.hasObserver(function () {}));

	}
});

// list 11-22 notifyObserversがすべての観察者を呼び出していることを確かめる

TestCase("ObservableNotifyObserversTest", {
	// list 11-40 observableオブジェクトを使用
	setUp : function () {
		// 観察対象オブジェクト
		this.observable = Object.create(tddjs.util.observable);
	},
	"test should call all observers" : function () {
		var observer1 = function () { observer1.called = true; };
		var observer2 = function () { observer2.called = true; };

		this.observable.observe("event", observer1);
		this.observable.observe("event", observer2);
		this.observable.notify("event");

		assertTrue(observer1.called);
		assertTrue(observer2.called);
	},

	// list 11-24 notifyObserversに渡されて引数が観察者に渡されることを確かめる
	"test should pass through arguments" : function () {

		var actual;

		this.observable.observe("event", function () {
			actual = arguments;
		});

		this.observable.notify("event", "String", 1, 32);

		assertEquals(["String", 1, 32], actual);
	},

	// list 11-28 クラッシュした観察者があってもnotifyObserversが最後まで処理をすることを確かめる
	"test should notify all even when some fail" : function () {

		var observer1 = function () { throw new Error("Oops"); };
		var observer2 = function () { observer2.called = true; };

		this.observable.observe("event", observer1);
		this.observable.observe("event", observer2);
		this.observable.notify("event");

		assertTrue(observer2.called);

	},

	// list 11-30  呼び出し順を機能として保証する
	"test should call observers in the order they were added" : function () {

		var calls = [];

		var observer1 = function () {
			calls.push(observer1);
		};
		var observer2 = function () {
			calls.push(observer2);
		};

		this.observable.observe("event", observer1);
		this.observable.observe("event", observer2);

		this.observable.notify("event");

		assertEquals(observer1, calls[0]);
		assertEquals(observer2, calls[1]);
	},

	// list 11-34 addObserverの前に呼び出してもnotifyObserversは失敗しないことを確認
	"test should not fail if no observers" : function () {

		var observable = this.observable;
		assertNoException(function () {
			observable.notify("event");
		});
	}
});










