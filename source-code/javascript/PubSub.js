/**
 * @author Eric Wang <vuejs@vip.qq.com>
 * @desc PubSub
 */

const PubSub = (
    ( factory, USE_EVN ) => {
        const PubSub = {};
        factory(PubSub);
        USE_EVN && (USE_EVN.PubSub = PubSub);
        return PubSub;
    }
)( PubSub => {
    const EVENT_HANDLES = {};
    let lastObjectId = -1;

    /**
     * @description prop type check
     * @param {String} prop
     * @param {Object} targetObj -
     * @param {String} actionObj
     * @returns {boolean}
     */
    function propCheck( prop, targetObj, actionObj ) {
        if( !targetObj.hasOwnProperty( prop ) ) {
            throw new Error(`${actionObj}: The ${prop} is not in ${targetObj}`)
        } else {
            return true;
        }
    }

    /**
     * @description publish func
     * @param {String} topic -subscribe message's topic
     * @param {any} msg -publish msg
     * @param {Boolean} async -isOpen async?
     */
     function publish( topic, msg, async = false ) {
        try{
            propCheck( topic, EVENT_HANDLES, 'publish');
            for(let key in EVENT_HANDLES[topic]) {
                console.log(key)
                if( async ) {
                    setTimeout(() => {
                        EVENT_HANDLES[topic][key](msg)
                    },0);
                } else {
                    EVENT_HANDLES[topic][key](msg);
                }
            }

        } catch (e) {
            throw e;
        }
    }

    /**
     * @description slice topic from token
     * @param token
     * @returns {*}
     */
    function sliceToken( token ) {
        const END_INDEX = token.indexOf('-');
        return token.slice(0, END_INDEX)
    }

    /**
     * @description subscribe message
     * @param topic
     * @param func
     * @returns {{topic: *, token: *}}
     */
    PubSub.subscribe = function ( topic, func ) {

        if(typeof func !== 'function') {
            return false;
        }

        // message is not subscribe yet
        if( !EVENT_HANDLES.hasOwnProperty(topic) ) {
            EVENT_HANDLES[topic] = {};
        }

        // use ObjectId to unsubscribe as unique id
        const TOKEN = `${topic}-Object_Id${ ++lastObjectId }`;
        EVENT_HANDLES[topic][TOKEN] = func;

        // In end return token as unsubscribe to del
        return TOKEN;
    };

    /**
     * @description publish
     * @param {String} topic -subscribe topic
     * @param {any} msg -Emmit data
     * @param {Boolean} async -is open async?
     */
    PubSub.publish = function( topic, msg, async ) {
        publish( topic, msg, async );
    };

    /**
     * @description unsubscribe
     * @param token
     * @returns {boolean}
     */
    PubSub.unsubscribe = function ( token ) {
        if( !token ) {
            return false;
        }
        const TOPIC = sliceToken(token);
        delete EVENT_HANDLES[TOPIC][token];
    };

},  USE_EVN = null);



