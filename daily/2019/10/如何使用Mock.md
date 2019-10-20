# 如何去使用Mock.js

## Mock

模拟数据，拦截ajax请求。

## 如何去用

- 在网页中
```html
<head>
<script src="http://mockjs.com/dist/mock.js"></script>
</head>
```

```javascript
  Mock.mock(url,'get',{
      'name|1':["June","Bob","Lily"],
      'age|+1':16,
      'hobbies|1-2':{
          'key0':"足球",
          'key1':'篮球',
          'key2':'乒乓球'
      }
    })
```

- 在脚手架项目中

```bash
$ npm i mockjs
```
```vue
<template>

</template>

<script >
import Mock from 'mockjs'
export default {
    name:'App',
    data() {
        return {
            
        }   
    },
    methods:{
    
  },
   mounted(){
         Mock.mock(url,'get',{
             'name|1':["June","Bob","Lily"],
             'age|+1':16,
             'hobbies|1-2':{
                 'key0':"足球",
                 'key1':'篮球',
                 'key2':'乒乓球'
             }
           })
   }   
}
</script>

<style scoped>

</style>
```

## Mock参数

- curl  匹配请求地址，string， RegExp /http:\/\/com\.cn\/getAll/  http://com.cn/getAll
- method  'get' 'post' 'head'  'option' 'delete'  'put'
- {} （模拟数据并返回数据）| fn（请求的处理）
  - 
  ```javascript
  Mock.mock(url,'get',{
      'name|1':["June","Bob","Lily"],
             'age|+1':16,
             'hobbies|1-2':{
                 'key0':"足球",
                 'key1':'篮球',
                 'key2':'乒乓球'
             }
    })
  ```
  
## Mock请求处理

```javascript
  Mock.mock(url,'get',options => {
  return {
      status:200,
      msg:'success'
    }  
})
```


