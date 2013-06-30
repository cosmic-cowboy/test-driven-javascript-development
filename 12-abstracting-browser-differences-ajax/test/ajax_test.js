// 12.3 XMLHttpRequestオブジェクトをつくる
// list 12-3 XMLHttpRequestが存在することを確かめる

TestCase("AjaxCreateTest",{
	"test should return XMLHttpRequest object" : function () {
		var xhr = tddjs.ajax.create();
		assertNumber(xhr.readyState);
		assert(tddjs.isHostMethod(xhr, "open"));
		assert(tddjs.isHostMethod(xhr, "send"));
		assert(tddjs.isHostMethod(xhr, "setRequestHeader"));
	}
});