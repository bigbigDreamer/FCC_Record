/**
 * @time  2019/10/20 9:29
 * @author  Eric Wang <vuejs@vip.qq.com>
 * @desc  利用TS去修改设计模式
 */
// 函数防抖
var Options = /** @class */ (function () {
    function Options(domStr) {
        this.domObj = document.getElementById(domStr);
        this.timer = null;
    }
    Options.prototype.option = function (fn, delay) {
        clearTimeout(this.timer);
        this.timer = setTimeout(fn, delay);
    };
    Options.prototype.select = function () {
        return this.domObj;
    };
    return Options;
}());
//# sourceMappingURL=07.js.map