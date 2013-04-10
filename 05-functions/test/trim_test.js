
// 5-22 InternetExplore

// only ie
// TestCase("trim Test", {
// 	"test trim" : function(){

// 		// ReferenceError but IE true
// 		assertFunction(trim);

// 		if(!String.prototype.trim){
// 			String.prototype.trim = function trim(){
// 				return this.replace(/^\s+|\s+$/g, "");
// 			};
// 		}

// 		// ReferenceError but IE true
// 		assertFunction(trim);

// 		// ReferenceError but IE true
// 		assertNotSame(trim, String.prototype.trim);
// 		jstestdriver.console.log("trim test" );

// 	}
// });