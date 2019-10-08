# JS链式调用

---
- date: 2019/10/8
---

## 原理

&emsp;&emsp;阅读了jQuery源码，发现jq的链式调用原理就是在函数调用结束之后对于当前对象的this会做一个返回。

## DEMO

```js
const jQuery = {
  get() {
    // you can write some options that you will do 
    return this;
    },
  post() {
     // you can write some options that you will do 
    return this;
    }
}

// you can call chain call as this 

jQuery.post()
    .get()
    .post()
```