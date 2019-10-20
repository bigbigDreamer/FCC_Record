// 发布订阅模式
var PubSub = (function () {
    var eventLoop = {};
    function subscribe(type, callback) {
        if (!(type in eventLoop)) {
            eventLoop[type] = [];
        }
        eventLoop[type].push(callback);
    }
    function publish(type) {
        var msg = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            msg[_i - 1] = arguments[_i];
        }
        if (!(type in eventLoop)) {
            throw new Error('the type not in loop');
        }
        eventLoop[type].map(function (item) {
            item.apply(void 0, msg);
        });
    }
    return {
        subscribe: subscribe,
        publish: publish
    };
})();
//# sourceMappingURL=09.js.map