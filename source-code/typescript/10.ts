/*
 * @describe 对于函数泛型的使用
 */
function f<T,S>(args:T,age:S): T {
    return args;
}

f<string,number>('Hash',18);

/*
 * 泛型接口
 */

interface MyInterface<T> {
    name: T,
    age: number
}

const objs:MyInterface<string> = {
    name: "张三",
    age: 18
}
