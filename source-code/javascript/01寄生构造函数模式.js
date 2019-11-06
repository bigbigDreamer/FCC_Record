// 构造函数之寄生构造函数模式

function Person(name,age) {
    const obj = new Object();

    obj.name  = name;
    obj.age = age;

    obj.sayName = () => {
        console.log(obj.name);
    };

    return obj;

}

Person.prototype = {
    constructor: Person
};

let o1 = new Person('张三',18);

console.log(Person.prototype === Object.getPrototypeOf(o1));   // false