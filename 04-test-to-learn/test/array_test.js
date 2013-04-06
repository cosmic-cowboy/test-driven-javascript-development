// 配列テスト
TestCase("ArrayTest", {

	// Array_prototype_spliceは配列を書き換えない
	"test array splice should not modify array": function(){

		var arr = [1, 2, 3, 4, 5];
		var result = arr.splice(2,3);

		assertEquals([1,2], arr);

	},
	// Array_prototype_spliceは部分削除後の配列を返すか
	"test array splice should return modified array" : function(){

		var arr = [1,2,3,4,5];
		var result = arr.splice(2,3);

		assertEquals(arr,result);
	}

});