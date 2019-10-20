// ts类

class Animal {
    private name: string;
    private age: number;

    public constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // 获取
    public get() {
        return this.name;
    }

    // 设置值
    public set(val) {
        this.name = val;
    }
}

const animal = new Animal("动物",18);

console.log(animal.get());

animal.set("Hello World");

console.log(animal.get());