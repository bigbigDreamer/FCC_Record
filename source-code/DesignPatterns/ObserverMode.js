/**
 * @desc 观察者模式
 * @author Eric Wang <vuejs@vip.qq.com>
 */

const Observer = (
    _ => {
        const observers = [];

        function addObserver(observer , OBJECT_ID = Math.round(Math.random()*99999999 + 12345678)) {
            observers.push({
                OBJECT_ID,
                observer
            });
        }

        function removerObserver(observer) {
            const TEMP_STACK = [];
            observers.forEach(item => {
                TEMP_STACK.push(item.OBJECT_ID)
            });

            if(~TEMP_STACK.indexOf(observer)>-1) {
                throw new Error("The observer not in observers, you must check it again!");
            }
            observers.splice(observers.indexOf(observer),1);
        }

        function notification(...msg) {
            observers.map(item => item.observer(...msg))
        }

        function getAll() {
            return observers;
        }

        return {
            addObserver,
            notification,
            removerObserver,
            getAll
        }
    }
)();

Observer.addObserver(function (msg) {
    console.log("我是观察者1号",msg)
});
Observer.addObserver(function (msg) {
    console.log("我是观察者2号",msg)
});
Observer.addObserver(function (msg) {
    console.log("我是观察者3号",msg)
});
Observer.notification("你好");
// Observer.removerObserver(function (msg) {
//     console.log("我是观察者3号",msg)
// })

console.log(Observer.getAll());

