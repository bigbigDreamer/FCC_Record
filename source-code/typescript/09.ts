// 发布订阅模式

const PubSub = (function ():object {

    const eventLoop:{} = {};

    function subscribe(type:string,callback:object) {
        if(!(type in eventLoop)) {
            eventLoop[type] = [];
        }

        eventLoop[type].push(callback);
    }

    function publish(type:string,...msg:any) {
        if(!(type in eventLoop)) {
            throw new Error('the type not in loop');
        }

        eventLoop[type].map(item => {
            item(...msg);
        })
    }
    return {
        subscribe,
        publish
    }
})();