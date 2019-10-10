const { log } = console
log("\u0061")

/**
 * 模板字符串
 */
// common string
log(`In JS '\n' is a line-feed`)

// multi row string
log(`In JS this is 
not legal.`)

log(`string text line1 
string text line2`)

// 字符串嵌入变量
let name = "BOB", time = "today"
log(`Hello ${name} ,how are you ${time}`)

//模板字符串嵌套
const tmpl = addrs => `
    <table>
        ${addrs.map(addr => `
            <tr><td>${addr.first}</td></tr>
            <tr><td>${addr.last}</td></tr>
        `).join('')}
    </table>    
`

const data = [
    { first: '<Jane>', last: 'Bond' },
    { first: 'Lars', last: '<Croft>' },
]

log(tmpl(data))

//如果需要引用模板字符串本身，在需要时执行，可以写成函数。
let func = name => `hello ${name}`
log(func('fuck'))

// 标签模板
// alert`123'`
// alert(123)

let a = 5, b = 10

tag`Hello ${a + b} world ${a * b}`
//等同于
tag(['Hello',' world ',''],15,50)

function tag(stringArr,value1,value2){
    log(stringArr,value1,value2)
}

var s = 'hello'
log(s.toLocaleUpperCase())