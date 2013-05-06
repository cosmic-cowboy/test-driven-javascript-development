// list 10-3 機能検出を使ってイベントの処理方法を変える


function addEventHandler (element, type, listener) {
	if(element.addEventListener){
		element.addEventListener(type, listener, false);
	}else if(element.attachEvent && element.call){
		element.attachEvent("on" + type, function () {
			return listener.call(element, window.event);
		});
	}else{

		// イベントプロパティにグレードダウンするか、処理を中止する

	}
}