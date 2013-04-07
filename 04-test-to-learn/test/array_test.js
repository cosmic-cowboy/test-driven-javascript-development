// 配列テスト
TestCase("ArrayTest", {

	// list 4.1 Array.prototype.spliceは配列を書き換えないか
	// list 4.2 Array.prototype.spliceは配列を書き換える
	"test array splice should not modify array": function(){

		var arr = [1, 2, 3, 4, 5];
		var result = arr.splice(2,3);

		assertEquals([1,2], arr);

	},
	// list 4-3 Array.prototype.spliceは部分削除後の配列を返すか
	// list 4-4 Array.prototype.spliceは削除した要素を返してくる
	"test array splice should return modified array" : function(){

		var arr = [1,2,3,4,5];
		var result = arr.splice(2,3);

		assertEquals([3,4,5],result);
	}
});