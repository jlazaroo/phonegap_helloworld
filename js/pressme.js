var PRESSME = (function(module) {

	module.DoIt = function(resultObject) {
		resultObject.prepend(Date() + '<br/>');
	};

	return module;
}(PRESSME || {}));