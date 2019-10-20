/**
 * @time  2019/10/17 21:37
 * @author  Eric Wang <vuejs@vip.qq.com>
 * @desc  抽象类的作用以及注意事项：
 *          抽象类是不需要被实例化的，但是抽象方法必须被实现
 */

abstract class Animals {
    public type;
    public constructor(type) {
        this.type = type;
    }

    // 抽象方法
    public abstract getType();
}

class Bird extends Animals {
    public getType() {
        return this.type;
    }
}

const b = new Bird("Bird");
b.getType();