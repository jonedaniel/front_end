//以前，为变量赋值，只能直接指定值
let a = 1
let b = 2
let c = 3

/**
 * es6可以从数组中提取值，按照对应位置，对变量赋值
 * 这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。
 * 下面是一些使用嵌套数组进行解构的例子  
 */
let [a1,a2,a3] = [1,2,3]
console.log(a1,a2,a3)

let [foo, [[bar], baz]] = [1, [[2], 3]]
console.log(foo,bar,baz)

/**
 * 不完全解构，即等号左边的模式，只匹配一部分的等号右边的数组。
 * 这种情况下，解构依然可以成功
 */
let [x, ,y] = [1,2,3]
console.log(x,y)

let [m,n,...z] = [,,1,2,3]
console.log(z);

/**
 * 如果等号右边不为数组,就会报错. 因为转为对象以后不具备 Iterator接口
 * 本身就不具备Iterator接口
 */
// let [wrong] = 1

// Set结构也可以使用数组的结构赋值
let [s,d,f] = new Set(['a,','b','c'])
console.log(s,d,f);

// 事实上，只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。
function* fibs() {
    let w = 0
    let t = 1
    while(true){
        yield w;
        [w ,t] = [t,w + t];
    }
}

let [first,second,third,fourth,fifth,sixth] = fibs()
console.log(sixth);

// 解构赋值允许默认值, 只有当一个数组成员 严格等于 undefined,默认值才会生效
let [ass,pussy=0] = [1]
console.log(ass,pussy);

/**
 * 解构不仅可以用于数组,还可以用于对象
 * 对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；
 * 而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
 */
let {o2,o1} = {o1: 'sss',o2: 'sssw'}
console.log(o1,o2);

// 对象的解构赋值,可以很方便地将现有对象的方法,赋值到某个变量
// let{log,sin,cos} = Math
const { log } = console
log('hello')

//如果变量名与属性名不一致,必须写成下面这样
let {var1:var2} = {var1:'fff'}
log(var2)

//解构赋值提取 JSON数据
let jsonData = {
    id: 31,
    status: "ok",
    data: [99,21221]
}

let {id,status,data:number} = jsonData
log(id,status,number) 

// ??? 解构赋值 设置函数参数的默认值
// jQuery.ajax = function(url,{
//     async = true,
//     beforeSend = function(){},
//     cache = true
//     // ... more config
// } = {}){
//     // ... do stuff
// }

//遍历Map解构: 任何部署了 Iterator接口的对象,都可以用 for...of 循环遍历.
const map = new Map()
map.set('firstKey','firstVal')
map.set('secondKey','secondVal')
for(let [key,value] of map){
    log(key + " is " + value)
}
map.forEach((key,value)=> {
    log(key + " is " + value)
});

//加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰。
// const { SourceMapConsumer, SourceNode } = require("source-map");




