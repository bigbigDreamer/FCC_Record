const PubSub = (
    _ => {
        // 中央事件调度器
        const EVENT_HANDLER = {}

        // 消息订阅
        function subscribe(eventType, callback) {

            if (!(eventType in EVENT_HANDLER)) {
                // 初始化事件调度类型对象
                EVENT_HANDLER[eventType] = []
            }
            // 多个订阅者压栈
            EVENT_HANDLER[eventType].push(callback)
        }

        // 消息发布
        function publish(eventType, ...msg) {

            if (!(eventType in EVENT_HANDLER)) {
                throw new Error('Sorry！ your eventType is not in EVENT_HANDLER, you should subscribe first!')
            }

            EVENT_HANDLER[eventType].map(item => item(...msg))
        }

        // 取消订阅
        function unsubscribe(eventType) {
            if (!(eventType in EVENT_HANDLER)) {
                throw new Error('Sorry！ you have not subscribed to this type of event yet！')
            }
            delete  EVENT_HANDLER[eventType]
        }

        return {
            subscribe,
            publish,
            unsubscribe
        }
    }
)();

PubSub.subscribe("Hello",function (data) {
    console.log(data)
})

PubSub.publish("Hello","你好")

PubSub.unsubscribe("Hello")

PubSub.publish("Hello","你好")