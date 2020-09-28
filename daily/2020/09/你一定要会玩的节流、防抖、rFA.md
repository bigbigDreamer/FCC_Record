# 你一定要会玩的节流、防抖、rAF

## 写在前面的工具函数

本文开头假设你不了解`performance`是什么？

首先谈一谈`performance`，它可以获取当前页面性能相关的信息。

`performance.now()`返回一个表示从性能测量时刻开始经过的毫秒数 `DOMHighResTimeStamp`,是用于页面级别，并且在精度数上更为精确（内部利用了浮点数达到微秒级别的样子），诸如动画等高分辨率的场景。

与它相似的`Date.now()`

` Date.now()`精确在1毫秒级别内，并且受系统时间的影响，如果更改系统时间会导致`Date.now()`紊乱。

但是前者有一个限制，只能在浏览器环境下运行，且对于浏览器有一定限制。

我们再介绍之前先来写一个`polyfill`：

```js
// 判断当前环境是否有performence
const hasPerformance = typeof performance === 'object' && typeof performance.now === 'function';

// 获取当前时间戳
const Now = () => hasPerformance ? performance.now() : Date.now();
```

## 节流(throttle)

什么是节流？节约流，什么流？动作流，任务流，事件流等。

怎么节呢？

我们先建立一个概念，在有限的时间内控制资源的消耗。再次引申一下，在有限的时间内，控制函数或者任务的触发次数。

现在就好办了，直接上代码：

```js

const _throttle = (fn, delay) => {
    let _lastTimeStamp = Now();
    
    return (args) => {
        let _now = Now();
        if(_now - _lastTimeStamp > delay) {
            _lastTimeStamp = _now;
            fn.apply(null, args);
        }
    }
}

// 测试一下

setInterval(_throttle(() => {
            console.log('我想每三秒打印一次')
}, 3000), 0);

```

## 防抖（debounce）

老套路，灵魂拷问，什么是防抖？为什么要防抖。

当速度以人为规定的可控的速率运行可以叫`normal speed`，但是超出控制`就会发生抖动`。

那么可以这样定义防抖，在以一定的时间频次去控制函数或者任务的执行。

```js

const _debounce = (fn, delay) => {
    let _timeCount = null;
    
    return (args) => {
        clearTimeout(_timeCount);
        _timeCount = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    }
}

```

## `rAF`

这个`rAF`有点懵吗？好像确实有点；

全称叫`requestAnimationFrame`

>`requestAnimationFrame`是浏览器用于定时循环操作的一个接口，类似于setTimeout，主要用途是按帧对网页进行重绘。 代码中使用这个API，就是告诉浏览器希望执行一个动画，让浏览器在下一个动画帧安排一次网页重绘。

首先引玉抛砖，引用`react-virtualized`库中的`timer`源码，主要用了模拟一个平滑帧的`setTimeout`；

```ts
const hasNativePerformance: boolean = typeof performance === 'object' && typeof performance.now === 'function';

const now: Function = hasNativePerformance ? () => performance.now() : () => Date.now();

export type TimeoutID = {
  id: any
};

export function cancelTimeout (timeoutID: TimeoutID) {
    cancelAnimationFrame(timeoutID.id);
}

export function requestTimeout (callback: Function, delay: number): TimeoutID {

    const start: any = now();

    function tick () {
        if(now() - start >= delay) {
            callback.call(null);
            return;
        }
        timeoutID.id = requestAnimationFrame(tick);
    }

    const timeoutID: TimeoutID = {
        id: requestAnimationFrame(tick)
    }

    return timeoutID;
}
```

还可以以这种平滑帧率去做动画效果，达到最佳的效果。

例如：滚动页面、平移动画等操作。

## End

你会玩了吗，这些好玩又好玩又好玩的武功秘籍。

