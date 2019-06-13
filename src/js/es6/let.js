{
    let a = 10
    var b = 1
}
console.log(b)
// let 所声明的变量，只在let命令所在的代码块内有效
// console.log(a)

// 经典案例, 这里的var声明导致...
var a = []
for (var i = 0; i < 10; i++) {
    a[i] = ()=>{
        console.log(i)
    }
}
a[6]()

//循环变量的那部分是一个父作用域,而循环体內部是一个单独的子作用域
for (let i = 0; i < 3; i++) {
    //这里获取不到i的值
    // console.log(i)
    let i = 'abc'
    console.log(i)    
}

// 变量提升
console.log(foo)
var foo = 2

//暂时性死区
var temp = 123
if(true){
    //只要块级作用域内存在let命令,他所生命的变量就绑定这个区域,不再受外部影响
    // temp = "abc" 
    let temp
}

//不允许重复声明
function func1(arf){
    let arf
}
func1(123)