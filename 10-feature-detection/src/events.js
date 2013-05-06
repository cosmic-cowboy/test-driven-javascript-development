// list 10-8 addEventHandlerの機能検出コードの改良

function addEventHandler (element, type, listener) {
	if(tddjs.isHostMethod(element, "addEventListener")){
		element.addEventListener(type, listener, false);
	}else if(tddjs.isHostMethod(element, "attachEvent") && listener.call){
		element.attachEvent("on" + type, function () {
			return listener.call(element, window.event);
		});
	}else{

		// イベントプロパティにグレードダウンするか、処理を中止する

	}
}