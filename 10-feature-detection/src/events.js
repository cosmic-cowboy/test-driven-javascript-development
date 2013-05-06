// list 10-4 機能の型チェック


function addEventHandler (element, type, listener) {
	if(typeof element.addEventListener == "function"){
		element.addEventListener(type, listener, false);
	}else if(typeof element.attachEvent == "function" &&
			typeof element.call == "function"){
		element.attachEvent("on" + type, function () {
			return listener.call(element, window.event);
		});
	}else{

		// イベントプロパティにグレードダウンするか、処理を中止する

	}
}