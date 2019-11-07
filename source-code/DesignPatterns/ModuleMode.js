/**
 * @author Eric Wang    <vuejs@vip.qq.com>
 * @desc module mode
 */

const workplace = (
    _ => {
        // in here, you can write some content in module

        // example a variable
        let namespace = Object.create(null);

        // example a constant
        const QS_CONSTANT = "QS_CONSTANT";

        // example a function
        function print() {
            // print something in here
        }

        // return an object
        return {
            namespace,
            QS_CONSTANT,
            print
        }
    }
)();