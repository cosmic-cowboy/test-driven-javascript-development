// list 8-4 Object.sealの実装例

if(!Object.seal &&
	Object.getOwnPropertyNames &&
	Object.getOwnPropertyDescriptor &&
	Object.defineProperty &&
	Object.preventExtensions){

	Object.seal = function (object) {

		// オブジェクトのすべてのプロパティを返す
		var properties = Object.getOwnPropertyNames(object);
		var desc, prop;

		for (var i = 0, l = properties.length; i < l; i++) {
			prop = properties[i];

			// 上書き禁止
			desc = Object.getOwnPropertyDescriptor(object, prop);

			if(desc.configurable){
				desc.configurable = false;
				Object.defineProperty(object, prop, desc);
			}
		}

		// プロパティの拡張禁止
		Object.preventExtensions(object);

		return object;
	};
}