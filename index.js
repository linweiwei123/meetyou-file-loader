/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var loaderUtils = require("loader-utils");

module.exports = function(content) {
	this.cacheable && this.cacheable();
	if(!this.emitFile) throw new Error("emitFile is required from module system");
	var query = loaderUtils.parseQuery(this.query);
    var requestUrl = this._module.request;
    var url = loaderUtils.interpolateName(this, query.name || "[hash].[ext]", {
		context: query.context || this.options.context,
		content: content,
		regExp: query.regExp
	});
    if(requestUrl.indexOf('?<%-')>-1){
        url += requestUrl.substring(requestUrl.lastIndexOf('?'),requestUrl.length);
    }
	this.emitFile(url, content);
	return "module.exports = __webpack_public_path__ + " + JSON.stringify(url) + ";";
}
module.exports.raw = true;
