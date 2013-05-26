TestCase("StrftimeTest", {
  "test should be method on date objects": function () {
    assertFunction(new Date().strftime);
  }
});