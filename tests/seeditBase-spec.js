var expect = require('expect.js');
var fromSetter = require('../index');
var $ = require('jquery');


describe('on a div', function () {
    it('normal usage', function () {
        $('body').append('<div data-from="hello" id="demo"><a href="hello.html?aaaa=bbbb" id="test1">test1</a><a href="hello.html" id="test2">test2</a><a href="hello.html?aaaa=bbbb&from=hello2" id="test3">test3</a><a href="hello.html?aaaa=bbbb&from=hello" id="test4">test4</a></div>');
        fromSetter.walk(document, true);
        // shoud append from value
        expect(/&from=hello/.test($('#test1').attr('href'))).to.be(true);
        expect(/\?from=hello/.test($('#test2').attr('href'))).to.be(true);
        expect(/&from=hello/.test($('#test3').attr('href'))).to.be(true);
        $('#demo').remove();
    });

    it('no href value', function () {
        $('body').append('<a href="#" id="sharp" data-from="sharp">hello</a>');
        fromSetter.walk(document, true);
        $('#sharp').remove();
        $('body').append('<a href="javascript:" id="sharp" data-from="sharp">hello</a>');
        expect($('#sharp').attr('href')).to.be('javascript:');
    });
});

describe('on a link', function () {
    it('normal usage', function () {
        $('body').append('<a href="hello.html?aaaa=bbbb" id="test1" data-from="hello">test1</a><a href="hello.html" id="test2" data-from="hello">test2</a><a href="hello.html?aaaa=bbbb&from=hello2" id="test3" data-from="hello">test3</a><a href="hello.html?aaaa=bbbb&from=hello" id="test4" data-from="hello">test4</a>');
        fromSetter.walk(document, true);
        // shoud append from value
        expect(/&from=hello/.test($('#test1').attr('href'))).to.be(true);
        expect(/\?from=hello/.test($('#test2').attr('href'))).to.be(true);
        expect(/&from=hello/.test($('#test3').attr('href'))).to.be(true);
        $('#demo').remove();
    });
});


describe('data-from-index', function () {
    it('normal usage', function () {
        var html = '<ul data-from="hello" id="demoo" data-from-index="true"><li><a href="hello.html?aaaa=bbbb" id="test11">test11</a></li><li><a href="hello.html" id="test22">test22</a></li><li><a href="hello.html?aaaa=bbbb&from=hello2" id="test33">test33</a></li><li><a href="hello.html?aaaa=bbbb&from=hello" id="test44">test44</a></li></ul>';
        $('body').append(html);
        fromSetter.walk(document, true);
        // shoud append from value
        expect(/&from=hello_/.test($('#test11').attr('href'))).to.be(true);
        expect(/\?from=hello_/.test($('#test22').attr('href'))).to.be(true);
        expect(/&from=hello_/.test($('#test33').attr('href'))).to.be(true);
        $('#demo').remove();
    });
});

$('[data-from]').remove();
