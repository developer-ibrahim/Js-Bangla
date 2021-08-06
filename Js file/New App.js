/*
javaScript Operator

Arithmetic Operator
+, -, *, /, %, ++, --

Asignment Operator
=, +=, -=, *=, /=, %=

Logical Operator
&&, ||, !

Comparision Operator
==, ===, !=, !==, <, <=, >, >=
*/

//   this is the object type of array
/* 
let players = [
  {
     name: 'Sakib',
     avg: 35.84
  },
  {
    name: 'Tamin',
    avg: 38.42
  },
  {
    name: 'Musfique',
    avg: 36.88
  },
  {
    name: 'Imrul Keyes',
    avg: 37.37
  }
]
let is = false 
for(let i = 0; i < players.length; i++){
   if(players[i].avg > 37){
     console.log(players[i])
     is = true
   }
}
if(!is){
 console.log('They are bad players')
}
*/
/*
  basically javaScript Has Tow Types of data-types
       1. Primative data-type
       2. Object data-type

  *Primative data-type Explanation---
  Primative data-type is the javaScript duilting data-types. those are builting by javaScitpt algorithom. 

  *On the other hand---
  Object data-type is not a javaScript builting data-types. those are made by using Modify Primative data. as your wish. 

    
*/

/*
  Primative data-types description...

  1. Number Data-types...
  Example:  123456789,   
            1.5 2.5 3.5 4.5 5.6,  
            10 20 30 40 50  


  2. String data-types...
  Example: 'This is the bangladesh'
            "This is world"
            `My name is Md. Ibrahim` (Optional)


  3. Boolean Data-types...
  Example: True,
           False,

  4. Null, Undefiend, Infinite, Nun, data-types...

  Example: Undefiend ----> if any data is not defiend. this is the undefiend data. 

  Example: Null ------> if any data is not given velue. this is the Null data.

  Example: Infinite ------> console.log(1 / 0) == Infinite

  Example: NuN ------> console.log('ABCD' + 50) == NuN

*/
/*
  Object data-types Description...
  1. Array   data-types
  2. Object   data-types
  3. Function   data-types

*/

// Number ----->>
/*
let num = 123456678
console.log(num)

let num2 = 1.50 
console.log(num2)

let ss = Number('12345')
console.log(ss)

let sy = Number(10.75)

let st = Number.parseInt(sy)
console.log(st)

let num3 = 1020
let num4 = Number.parseFloat(num3)

let a = Number.MAX_VALUE
let b = Number.MIN_VALUE
console.log(a)
console.log(b)

console.log(100/0)
console.log('abc' - 50)

*/
/*

// String ------>>

let str1  = `Hello World`
console.log(str1)

let str2 = String(12345)
console.log(str2)

let str3 = 134205
let str4 =String(str3)
console.log(str4)

*/
/*
// Boolean----->> True or false

console.log(Boolean(120))
console.log(Boolean(0))
console.log(Boolean(Infinity))
console.log(Boolean(''))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(NaN))

*/
/*
//  date Function ---->>

let myDate = new Date()
let result  = myDate.getDay()
switch(result){
 case 1: 
  console.log('Sunday')
 break
 case 2:
   console.log('Monday')
   break
 case 3: 
   console.log('Towesday')
   break
 case 4:
   console.log('Wednessday')
   break
 case 5: 
   console.log('Thirsday')
   break
 case 6:
   console.log('friday')
   break
 case 7: 
    console.log('Suturday')
    break

}

let found = new Date()
let myD = found.toDateString()
let myTime = found.toTimeString()
let local = found.toLocaleTimeString();
let first = found.toLocaleString()
let second = found.toLocaleDateString()

console.log(found)
console.log(myD)
console.log(myTime)
console.log(local)
console.log(first)
console.log(second)

*/

// ======> Tarnary Operator
/*
let sum = (6%2 == 0) ? 'True' : 'False'
console.log(sum)

let local = (15*10 == 150) ? 'Right' : 'Worng'
console.log(local)

let tarnary = (81%9 == 0) ? 'Ok' : 'Not Ok'
console.log(tarnary)

let n = 10
if(n%3 == 1){
  n = 'N true'
}else{
  n = 'N false'
}
console.log(n)
*/

// ==========>> And Or Shorthand Statement

/*
let fullName = 'Md. SOBUJ'

let myName = fullName ||'Md. Ibrahim'

console.log(myName)

let running = true
*/

//  ==========>> Advanced String Methods
/*

let NewNum = '12345'
let accept = Number(NewNum)
console.log(accept)

let my = 'this is the \'String\''
console.log(my)

let xx = '1' == 1
console.log(typeof xx)


let aa = 123
let bb = '456'
let res = aa + bb
console.log(res)


let x = 'Z'
let y = 'z'
let z = x < y
console.log(z)



let str = 'My Name Is Muhammad IBRAHIM with IBM Unic Tech'
let str2 = 'Freelancing'

let str3 = str.concat(str2)
let str4 = str.substr(20, 7)
let str5 = str.charAt(20)
let str6 = str.indexOf('M')
let str7 = str.lastIndexOf('h')
let str8 = str.startsWith('My')
let str9 = str.endsWith('Tech')
let str10 = str.split(' ')
let str11 = str.trim()





let mystr = 'This is the pendamantic moment now'

let count = 0

while(true){

  if(mystr.charAt(count) == ''){
    console.log(count)
    break
  }else{
    count++
  }

}
console.log(count)
*/

// ======>> Array and Array Methods
/*

let myArr = Array(10, 25, 58, 75, 95, 100, 85)

let point = false

for(let x = 0; x < myArr.length; x++){
  if(myArr[x] == 100){
    console.log('data founded')
    point = true
  }
}
if(!point){
  console.log('Data Not Founded')
}





// let rak = 0

// for(let y = 0; y < Rakesh.length; y++){
//   if(Rakesh.charAt(rak) == 10){
//     console.log('Array Value Founded ' + rak)
//     break
//   }else{
//     rak++
//   }
// }


const logic = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const logic2 = [11, 12, 13, 14, 15, 16, 17, 18]


// let tech = logic.join(' | ')
// let tech = logic.concat(logic2)
// let tech = logic.fill(0)
let tech = Array.from(logic)
tech[0] = 100
console.log(tech)
console.log(logic)


console.log(Array.isArray(logic2))
*/

//  ===========>> Object
/* 

let cons = Object()
let cons2 = new Object()
cons.x = 10
console.log(cons)


let Student1 = {

  Name: 'Md IBRAHIM',
  F_Name: 'Md A Malik',
  M_Name: 'Feroaj',
  Division: 'Borishal',
  Zila: 'Borguna',
  Upozila: 'Betagi',
  Vilage: 'Hosnabad',
  P_Code: 1440,
  M_status: 'Marrid',
  Living: 'Dhaka',
  L_Code: 1204
}
Student1['L_Code'] = 1205

delete Student1['Name']

Student1.Living = 'Unifiend'
console.log(Student1.Name)
console.log(Student1['Living'])


let st = {
  a: 10,
  b: 20,
  c: 30
}

let st1 = {
  a: 10,
  b: 20,
  c: 30
}
console.log(st == st1)
console.log('F_Name' in Student1)


if(st.a == st1.a && st.b == st1.b && st.c == st1.c){
  console.log('They are same')
}

let json = JSON.stringify(st) === JSON.stringify(st1)
console.log(json)


// =======>> Object Itarate System

let itarate = {
  aa : 10,
  bb : 20,
  cc : 30,
  dd : 40,
  ee : 50
}

console.log('dd' in itarate)
console.log('aa' in itarate)
for( let i in itarate){
    console.log(i)
     console.log(i + ': ' + itarate[i])
}

// ========>> Object Methods
let nObj = {
  p : 10,
  p1 : 15,
  p2 : 20,
  p4 : 25
}

let N = Object.keys(nObj)
console.log(N)

let O = Object.values(nObj)
console.log(O)

let P = Object.entries(nObj)
console.log(P)


let Q = Object.assign({}, nObj)

Q['p'] = 100
console.log(Q)
console.log(nObj)

*/

// ==============> Function Details
/* 


let num1 = [20, 40, 60, 80]
let num2 = [10, 30, 50, 70]
let num3 = [15, 35, 55, 75]


function myArr(total){
  let add = 0
  for(let i = 0; i < total.length; i++){
    add = add + total[i]
  }
  console.log(add)
}
myArr(num1)


function myfunc(){
  let sum = 0
  for(let t = 0; t < arguments.length; t++){
    sum += arguments[t]
  }
  console.log(sum)
}
myfunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10,)
myfunc(10, 25, 75)

*/

// ==============>> Function Starting here
/* 
let str = 'this is the return here'
let str2 = str.split(' ')[1]
console.log(str2)

function java(email, name){
  function local(){

    if(name){
      return name.split(' ')[1]
    }else{
      // return ''
    }
  }
  let result = email + ' ' + local()
  console.log(result)
}
java('Good Afternood', '')


let python = function test(n){

  function a(){
    return n % 3 === 0
  } 

  function b(){
    return n % 5 === 0
  }

  if(a(n) && b(n)){
    console.log(n + ' is Divisible by 3 and 5')
  }else{
    console.log('Not a Valid Number')
  }
}
python(75)
*/

// What's the pure Function ?

/* 
  1. It returns the some result of given the same argument's 
  2. It dosen't casue any observable side effect's
*/

/*
// Pure Function Example 
function jahid(n){
  // let sobuj = n*n
  // return sobuj

  console.log(n*n)
}
jahid(2)
jahid(3)
jahid(4)

//  Not Pure Function Example
let n = 10

function change(){
  n = 100

}
change()
console.log(n)

// 

let obj = {
  x: 10,
  y: 20
} 

function point(obj){
  obj.x = 100
  obj.y = 200
  console.log(obj)
}
point(obj)

console.log(obj)

// 

let myArry = [30, 50, 70, 90]
console.log(myArry)

function hello(myArry){
  myArry[0] = 300
  myArry[2] = 700

  console.log(myArry)
}
hello(myArry)
console.log(myArry)
*/

// What's First Class Function
/*
  1. A Fucntion can be store in a variable
  2. A Function can be store in a Array
  3. A Fucntion can ba store in a object
  4. We can create a function as we need

  5. we can pass a function as a argument
  6. we can return a function from another function  
*/

/*

// 1. A Fucntion can be store in a variable

let naeem = function nuru(xx, yy){
     return xx + yy
} 
console.log(naeem(10, 10))

// 2. A Function can be store in a Array

let yArry = []
yArry.push(naeem)
console.log(yArry)
console.log(yArry[0](20, 10))

// 3. A Fucntion can ba store in a object

let yObj = {
 same: naeem
}
console.log(yObj)
console.log(yObj['same'](7, 3))

//  4. We can create a function as we need

setTimeout(function(){
  console.log('i am a setTimeout')
}, 1000)
*/

// first class function

/*
  1. A Fucntion can be store in a variable
  2. A Function can be store in a Array
  3. A Fucntion can ba store in a object
  4. We can create a function as we need
  5. we can pass a function as a argument
  6. we can return a function from another function  
*/

let arr = [10, 20, 30, 40, 50];
let arr2 = [];
arr.forEach(function (x) {
  x = x * x;
  arr2.push(x);
  console.log(x);
});
