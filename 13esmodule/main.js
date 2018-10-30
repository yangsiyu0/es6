//模块
// 第三方（npm install》node_modules）不用./
// 自定义 加./

//使用解构赋值 获取导出的内容
//let {num,str}={num:1,str:"zf"}

// console.log(num);
//import 会变量提升，但是一般开发都写在上面
// import {num,str} from "./zf.js"

// 一次性获取出来
import * as zf from "./zf.js"
// var str=1 报错 不可以重复声明

import px from './px.js'//一次性导入

console.log(zf);
console.log(px);
