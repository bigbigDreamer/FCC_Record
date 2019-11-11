/**
 * @author Eric Wang <vuejs@vip.qq.com>
 * @desc PubSub
 */

;(
    ( factory) => {
        const PubSub = {};
        factory(PubSub);
        return PubSub;
    }
)( PubSub => {
    const EVENT_HANDLES = {};
    let lastObjectId = -1;

    PubSub.subscribe = function ( topic, func ) {

        if(typeof func !== 'function') {
            return false;
        }

        // message is not subscribe yet
        if( !EVENT_HANDLES.hasOwnProperty(topic) ) {
            EVENT_HANDLES[topic] = {};
        }

        // use ObjectId to unsubscribe as unique id
        const token = `Object_Id${ ++lastObjectId }`;
        EVENT_HANDLES[topic][token] = func;

        return token;
    };

    PubSub.publish = function( topic, ...msg ) {
        if( !EVENT_HANDLES.hasOwnProperty(topic) ) {
            EVENT_HANDLES[topic] = {};
        }
    }
});