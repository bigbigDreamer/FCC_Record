# 变换莫测的this

## 事件环境

事件环境的`this`，谁触发事件，`this`就只想谁。

## 全局环境

- 浏览器环境

`this`指向的是`window`对象。

- `Node`环境

`this`指向的是`module.exports`。

## 函数内部

总结一句话，函数在哪里调用，`this`就指向谁。

例如：

```js
// 全局环境下
function getThis() {

console.log(this);
// window / module.exports

}

// 在对象环境下

const obj = {
    fn: function() {
        console.log(this)
    }
}

obj.fn();
// obj

// 针对于构造函数

function Animal(age) { 
    this.age = age;
}

// 这里的this指向的是构造函数。









```