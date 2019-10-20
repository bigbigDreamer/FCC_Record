/**
 * @time  2019/10/17 21:37
 * @author  Eric Wang <vuejs@vip.qq.com>
 * @desc  抽象类的作用以及注意事项：
 *          抽象类是不需要被实例化的，但是抽象方法必须被实现
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
var Animals = /** @class */ (function () {
    function Animals(type) {
        this.type = type;
    }
    return Animals;
}());
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bird.prototype.getType = function () {
        return this.type;
    };
    return Bird;
}(Animals));
var b = new Bird("Bird");
b.getType();
//# sourceMappingURL=06.js.map