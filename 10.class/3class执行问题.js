function BB(name) {
    this.name=name;
}
let bb=new BB("yang")

class AA{
    constructor(name){
        this.name=name;
    }
}
let aa=new AA("yang")
console.log(aa);

//采用class表达式让类直接执行
let a1=new class{
    constructor(name){
        console.log(name);
    }
}("yang")
