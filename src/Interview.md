# 面试题精要总结

- 1.阅读下面的代码回答问题：
```html
<div style=”width:400px;height:200px;”>
       <span style=”float:left;width:auto;height:100%;”>
                <i style=”position:absolute;float:left;width:100px;height:50px;”>hello</i>
       </span>
     </div>
```
*问题：span标签的width和height分别为多少？*

**答：width = 0px，height = 200px**

**解析：**  在W3C标准解析中，float 会使元素脱离文档流，并且浮动元素会生成一个块级框，而不论它是块级或者行内元素    

对于这个块级框我是这样理解的：它把这个元素变成了一个（类似）行内块级元素，也就是inline-block，当你把题中float: left; 替换为 display: inline-block;          

你会发现，会有一样的结果，为什么说类似呢，因为inline-block 元素之间会默认产生空白符，而float 之间却没有
       
既然和inline-block 类似，那么当然可以设置宽高了，虽然float 使元素脱离文档流，但是并不影响div 仍然是它的父元素

因此.height: 100%;也就是继承了父元素的高度，200px

而width: auto;其实是坑人的，因为元素的默认width 就是auto，而inline-block 元素的宽是内容宽度

这个时候我们看子元素<i>,它设置了position: absolute;同样脱离的文档流，它并不会影响父元素，所以span 的width:0px;

- 2.请选择下面的行内块级元素：（A、B、C）

A、input   &emsp;    B、button  &emsp;       C、img   &emsp;   D、span

- 3.执行代码说明答案

```javascript
Promise.resolve(1)
.then(2)
.then(Promise.resolve(3))
.then(console.log)
```
**答案解析：** Promise的then方法传递参数期望是函数，如果不是函数则会发生值穿透，所以打印结果为3也就不奇怪了。

- 4.执行代码说明结果

```javascript
var promise = new Promise((resolve,reject)=> {
     resolve(true);
     reject(false);
})

promise.then(data => {
    console.log(data)
})
//true;考虑为什么不会为reject报错
```

**答案解析：** 因为Promise的状态一旦改变就无法发生变更。