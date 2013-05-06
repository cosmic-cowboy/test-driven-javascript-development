
TeseCase("HostObjectTest",{
	"test IE host object behavior" : function () {

		// list 10-5 Internet Exploreでのtypeofとホストオブジェクト
		assertEquals("object", typeof document.attachEvent);

	}
});