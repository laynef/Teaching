// Three types of variables

/*

1. ES5 [works for everything]: var 
2. ES6 [works like var]: let
3. ES6 [Can not be changed]: const

*/

var i = 0
let = j = 0
const k = 0

// Types of variables

/*

    Number: 0 or 0.0
    String: "" or '' or [ES6]: ``
    Boolean: true or false 
    Array: [1,2,3,4,5,6] // inside the array can be any type
    Object: {key: value} // keys are strings and value can be any type
                                     // values can be received by calling the object's key 
    Function: function() {} or [ES6] () => {}
        // Does a set of instructions when called
        // To call use () 
        // functions can return any value or no value
        // () => is equal to function '()' returns '=>' **BLANK**
*/

let num = 0
let str = "hello"
let flag = false
let arr = ['hello', 'welcome']
let obj = {cool: 7}

console.log(`CALL OBJECT'S KEY cool returns ${obj.cool}`)

function add1(num) {
    return num + 2
}

let add2 = (num) => {
    return num + 2
}

let add3 = (num) => num + 2

