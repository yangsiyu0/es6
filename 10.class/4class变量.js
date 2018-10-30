//function 会有变量提升
FF();
new FF();
function FF() {
    this.f="ff"
}

//  es6中class跟let 和const 一样没有变量提升
// new GG; GG is not defined
class GG{
    constructor(){
        this.gg="gg"
    }
}
