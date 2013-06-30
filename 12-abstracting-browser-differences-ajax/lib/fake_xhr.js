// list 12-24 fakeXMLHtppRequestを独立させる
// ダミーのXMLHttpRequestを複数のテストで共有できるように外出しする

var fakeXMLHtppRequest = {
	open : stubFn()
};