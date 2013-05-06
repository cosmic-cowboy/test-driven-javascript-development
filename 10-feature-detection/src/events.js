// list 10-1 ブラウザの推測を使ってイベントリスニングの違いを吸収する
// 悪い例
// listenerの引数としてイベントを渡し、thisの値を修正する
// IEはグローバルオブジェクトをthisとしてlistenerを呼び出す

function addEventHandler (element, type, listener) {
	if(/MSIE/.test(navigator.userAgent)){
		element.attachEvent("on" + type, function () {
			return listener.call(element, window.event);
		});
	}else{
		element.addEventListener(type, listener, false);
	}
}