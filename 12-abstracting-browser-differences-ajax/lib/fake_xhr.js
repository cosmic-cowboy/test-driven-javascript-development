// list 12-24 fakeXMLHtppRequestを独立させる
// ダミーのXMLHttpRequestを複数のテストで共有できるように外出しする
// list 12-30 スタブのsendメソッドを追加する
var fakeXMLHtppRequest = {
	open : stubFn(),
	send : stubFn()
};