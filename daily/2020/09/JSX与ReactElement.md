# JSX与ReactElement

## 什么是JSX？

> `JSX`是`ECMAScript`类似于`XML`的语法扩展，也是`createElement`的语法糖；

## ReactElement

> `ReactElement`实际就是`React`对于`VDOM`对象的工厂函数；


## EXAMPLE

```jsx
function APP() {
  return (
    <div id="app">
        测试
    </div>
    )
}
```

如上示例转换后的`VDOM`对象实际就是：

```js
const reactElement = createElement('div', { id: 'app' }, 测试); 

// VDOM对象
{
    type: 'div',
    props: {
        id: 'app',
        children: '测试'
    }
}
```
