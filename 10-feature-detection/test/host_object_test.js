
TeseCase("HostObjectTest",{
	"test IE host object behavior" : function () {

		// list 10-5 Internet Exploreでのtypeofとホストオブジェクト
		assertEquals("object", typeof document.attachEvent);

		// list 10-6 フレンドリではないホストオブジェクトのふるまい

		var xhr = new ActiveXObject("Microsoft.XMLHTTP");

		assertException(function () {
			if(xhr.open){
				// プロパティはあるはずだが、例外が投げられる
				// ホストオブジェクトのため...
			}
		});

		assertEquals("unknown", typeof xhr.open);

		var element = document.createElement("div");
		assertEquals("unknown", typeof element.offsetParent);

		assertException(function(){
			var parent = element.offsetParent;
		});
	}
});