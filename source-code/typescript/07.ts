/**
 * @time  2019/10/20 9:29
 * @author  Eric Wang <vuejs@vip.qq.com>
 * @desc  利用TS去修改设计模式
 */

// 函数防抖
class Options {
    private readonly domObj;
    private timer;

    constructor(domStr: string) {
        this.domObj = document.getElementById(domStr);
        this.timer = null;
    }

    public option(fn, delay) {
        clearTimeout(this.timer);
        this.timer = setTimeout(fn, delay);
    }

    public select() {
        return this.domObj;
    }
}

