/**
 * @time  2019/8/28 14:05
 * @author  Eric Wang <vuejs@vip.qq.com>
 * @desc  玩玩es6的set与get
 */

class Person {
    constructor(name) {
        this.name = name;
    }

    set getName(val) {
        this.name = val;
    }

    get getName() {
        return this.name;
    }
}

const p = new Person("张三");

p.getName = "李四";
console.log(p.getName);