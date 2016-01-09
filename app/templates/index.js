'use strict';
module.exports = <% if (babel) { %>(str, opts) =><% } else { %>function (str, opts)<% } %> {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	opts = opts || {};

	return str + ' & ' + (opts.postfix || 'rainbows');
};
