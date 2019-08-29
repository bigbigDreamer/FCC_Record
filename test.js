function Parent(name){
    this.name = name;
}

Parent.prototype.say = function () {
    console.log("讲的这他妈什么玩意儿")
}

function Child(){
    //父类挂载在子类
    Parent.call(this);
    // Parent.apply(this);
}

// Child.prototype = Object.create(Parent.prototype)

const c = new Child();
c.say()

