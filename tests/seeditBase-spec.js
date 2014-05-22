var expect = require('expect');
var fromSetter = require('index');
var $ = require('jquery');

describe('seeditBase', function() {
    it('normal usage', function() {
        $('body').append('<div data-from="hello" id="demo"><a href="hello.html?aaaa=bbbb" id="test1">test1</a><a href="hello.html" id="test2">test2</a><a href="hello.html?aaaa=bbbb&from=hello2" id="test3">test3</a><a href="hello.html?aaaa=bbbb&from=hello" id="test4">test4</a></div>');
        fromSetter.walk(document, true);
        // shoud append from value
        expect(/&from=hello/.test($('#test1').attr('href'))).to.be(true);
        expect(/\?from=hello/.test($('#test2').attr('href'))).to.be(true);
        expect(/&from=hello/.test($('#test3').attr('href'))).to.be(true);
        $('#demo').remove();
    });
});