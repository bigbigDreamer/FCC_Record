// ts类
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    // 获取
    Animal.prototype.get = function () {
        return this.name;
    };
    // 设置值
    Animal.prototype.set = function (val) {
        this.name = val;
    };
    return Animal;
}());
var animal = new Animal("动物", 18);
console.log(animal.get());
animal.set("Hello World");
console.log(animal.get());
//# sourceMappingURL=04.js.map