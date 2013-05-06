// list 10-2 オブジェクトの検出を使ったブラウザの推測
// 悪い例
// IEがグローバルなActiveXObjectを提供していることを利用

function addEventHandler (element, type, listener) {
	if(window.ActiveXObject){
		element.attachEvent("on" + type, function () {
			return listener.call(element, window.event);
		});
	}else{
		element.addEventListener(type, listener, false);
	}
}