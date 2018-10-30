class A{
    constructor(x){
        this.x=x
    }
    getX(){
        console.log(this.x);
    }
    static getY(){
        console.log(this);
    }
}
A.getY()

//子类B继承父类
class B extends A{
    constructor(x){
        //子类没有this this继承父类 super() 执行完成之后才会有this
        //super() 指向父类A的 constructor
        // this.y=100 不可以在super执行之前使用this
        super(x);
        this.y=100
    }
    getX(){
        //super 指向父类A的原型
        super.getX()
    }
    //static 父类的静态/私有的方法也可以继承
    static getY(){
        //super 指向父类本身
        super.getY();
    }
}
let b=new B("yang");
b.getX()
