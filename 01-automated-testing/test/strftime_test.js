testCase("strftime test", {
	
	setUp : function(){
		this.date = new Date(2009, 9 , 2);
	},
	"test format specifier %Y" : function(){
		assert(
			"%Y should return full year",
			Date.formats.Y(this.date) === "2009");
			// this.date.strftime("%Y") === "2009");
	},
	"test format specifier %m" : function(){
		assert(
			"%m should return month",
			Date.formats.m(this.date) === "10");
			// this.date.strftime("%m") === "10");
	},
	"test format specifier %d" : function(){
		assert(
			"%d should return date",
			Date.formats.d(this.date) === "02");
			// this.date.strftime("%d") === "02");
	},
	"test format specifier %y" : function(){
		assert(
			"%y should return year as two digits",
			Date.formats.y(this.date) === "09");
			// this.date.strftime("%y") === "09");
	},
	"test format specifier %F" : function(){
		assert(
			"%F should act as %Y-%m-%d",
			Date.formats.F === "%Y-%m-%d");
			// this.date.strftime("%F") === "2009-10-02");
	}
});



// list 1-8
// var date = new Date(2009, 9 , 2);

// try {
// 	assert(
// 		"%Y should return full year",
// 		date.strftime("%Y") === "2009");
// 	assert(
// 		"%Y should return full year",
// 		date.strftime("%m") === "10");
// 	assert(
// 		"%Y should return full year",
// 		date.strftime("%d") === "02");
// 	assert(
// 		"%Y should return full year",
// 		date.strftime("%y") === "09");
// 	assert(
// 		"%F should act as %Y-%m-%d",
// 		date.strftime("%F") === "2009-10-02");
// }catch(e){
// 	console.log("Test failed " + e.message);	
// }


// list 1-5 strftime_test.js
// var date = new Date(2009, 9 , 2);
// console.log(date.strftime("%Y"));
// console.log(date.strftime("%m"));
// console.log(date.strftime("%d"));
// console.log(date.strftime("%y"));
// console.log(date.strftime("%F"));