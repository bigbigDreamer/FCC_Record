/**
 * @time  2019/10/17 16:24
 * @author  Eric Wang <vuejs@vip.qq.com>
 * @desc  TypeScript中的类与继承
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.say = function () {
        console.log('我叫' + this.name);
    };
    return Person;
}());
var Male = /** @class */ (function (_super) {
    __extends(Male, _super);
    function Male(name, age) {
        return _super.call(this, name, age) || this;
    }
    return Male;
}(Person));
var p = new Male("张三", 18);
var p1 = new Person("张三", 18);
//# sourceMappingURL=03.js.map