/**
 * @time  2019/10/17 21:26
 * @author  Eric Wang <vuejs@vip.qq.com>
 * @desc 实例化接口，面向接口编程
 */

interface Requests {
    get();

    post();
}

class Https implements Requests {
    public constructor() {

    }

    public post() {

    }

    public get() {

    }
}