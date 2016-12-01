'use strict';

var should = require('chai').should();
var ytTrim = require('../src/ytTrim.js');
describe('ytTrim', function () {
	it('should split a substring for YouTube code', function () {
		ytTrim('https://www.youtube.com/watch?v=ZN_vT9uQzZY').should.equal('ZN_vT9uQzZY');
	});
	it('should accept YouTube codes that match 11 characters', function () {
		ytTrim('https://www.youtube.com/watch?v=ZN_vT9uQzZY').length.should.equal(11);
	});
});

ytTrim('https://www.youtube.com/watch?v=ZN_vT9uQzZY');