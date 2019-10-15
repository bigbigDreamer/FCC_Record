/**
 * @time  2019/10/15 21:58
 * @author  Eric Wang <vuejs@vip.qq.com>
 * @desc   设计模式第一篇
 *         构造器模式，其实无非就是利用JS函数去模拟构造函数实现类的目的
 *         可实例化
 */

function Person(id,username,age) {
    this.id = id;
    // 注意：每个函数，不管是构造函数还是普通函数，都有内部的name属性，返回的是当前的函数名
    // this.name = name;
    this.username = username;
    this.age = age;
}

// 添加静态属性
Person.type = "human";

const Male = new Person("622234579198911","EricWang",18);

// 当然还有一种的模拟方式，差距不大，无非就是函数的声明方式差异而已，请看源码：
const Animal = function(type,name) {
    this.type = type;
    this.AnimalName = name;
};

// add static attribute
Animal.Num = 180;

// console.log(Animal,Person);
// [Function: Animal] { Num: 180 } [Function: Person] { type: 'human' }