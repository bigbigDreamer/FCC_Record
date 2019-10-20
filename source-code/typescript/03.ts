/**
 * @time  2019/10/17 16:24
 * @author  Eric Wang <vuejs@vip.qq.com>
 * @desc  TypeScript中的类与继承
 */

class Person {
    public name;
    public age;
    public constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    private say() {
        console.log('我叫'+this.name);
    }
}

class Male extends Person {
    public constructor(name,age) {
        super(name,age);
    }
}

const p = new Male("张三",18);
const p1 = new Person("张三",18);
