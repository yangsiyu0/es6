function F(){
    this.f="ff";
}
F.prototype.getF=function () {}
let f=new F;
for(let key in f){
    console.log(key);
}
//能用for in遍历出来的都是可枚举的

class FF{
    constructor(){
        this.ff="ff"
    }
    getF(){}
}
let ff=new FF;
for(let key  in ff){
    console.log(key); //getF遍历不出来  不可枚举
}
console.log(Object.getOwnPropertyDescriptor(FF.prototype, "getF"));
