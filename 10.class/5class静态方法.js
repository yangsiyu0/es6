//类就相当原型，写在原型上的方法都被实例继承了，假如想给当前类本身加一些方法，我们可以在方法前面加上一个关键字static,不会被实例继承，只有类本身可以使用，例如Array.of()
class AA{
    constructor(){
        this.a="aa";
    }
    getA(){
        console.log("hahah");

    }
    static getB(){
        console.log("我是AA的静态方法");
    }

}
let aa=new AA;
console.log(aa);
aa.getA()
// aa.getB()//aa.getB is not a function
AA.getB()


//静态方法可以被子类继承
class F{
    static getF(){
        console.log("我是F的getF");
    }
}
class G extends F{
    static getF(){
        super.getF();
    }
}
G.getF();
