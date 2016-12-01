'use strict';

var ytTrim = function ytTrim(url) {
	if (typeof url !== 'string') {
		throw new Error ('Something went wrong with your YouTube link. Please check the original URL.');
	} else {
		var ytString = url.substring(32);
		var strLen = ytString.length;
		if (strLen !== 11) {
			throw new Error ('Something went wrong with your YouTube link. Please check the original URL.');
			} else {
			return ytString;
		}
	}
}

module.exports = ytTrim;