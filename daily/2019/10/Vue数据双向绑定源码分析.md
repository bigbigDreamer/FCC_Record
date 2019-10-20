# Vue数据双向绑定原理

## 原理

&emsp;&emsp;其实数据绑定的原理无非就是利用了`Object.defineProperty`的`getter`和`setter`数据观测机制。

&emsp;&emsp;As we can see it as follow: 

```javascript
const obj = {
    name: '数据内部对象'
};
const cache = {};

// 对于name进行数据观测，如果发生变化则利用缓存存储
Object.defineProperty(obj,'name',{
    get() {
        return cache['name'];
    },
    
    set(v) {
        cache['name'] = v;
    }
});
```

## 表单输入双向绑定原理

```vue
<template>   
<input type="text" @input="handleInput" ref="input">
</template>

<script>
export default {
    name:'Input',
    data(){
        return {
         username:''
        }
    },
    methods: {
        handleInput(e) {
            this.username = e.target.value;
        }
    }

}
</script>
```


