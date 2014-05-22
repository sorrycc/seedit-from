# seedit-from

---

[![Build Status](https://secure.travis-ci.org/airyland/seedit-from.png)](https://travis-ci.org/airyland/seedit-from)
[![Coverage Status](https://coveralls.io/repos/airyland/seedit-from/badge.png?branch=master)](https://coveralls.io/r/airyland/seedit-from)



---

## 需求

需要看到一个页面从某个位置点击过来的数据。

google 统计有 campaign,source参数可以使用，但是操作过于复杂，不好规范。因此还是使用最简单的方法用`from`参数来标识来源。

## 使用说明

为整块位置添加 `?from=值` 或者 `&from=值` 参数。该模块会遍历`[data-from]`的链接并加上参数。       


该模块会忽略 `#` 和 以`javascript`开头的链接。 

## API

### walk <em>function(parent,isOverwrite)</em> 

遍历指定区域的链接。

+ parent 默认为 `document`
+ isOverwrite 默认为true, 覆盖原来已经设定的 from 参数

## HTML 约定

可以为任何元素添加 `data-from` 参数。


```html
<div data-from="hello">
    <a href="example.html">test</a>
</div>
```


```html
<a href="example.html" data-from="hello">test</a>
```