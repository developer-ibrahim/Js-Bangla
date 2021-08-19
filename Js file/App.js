// sum = 0;
// for(var i = 1; i<=10; i++){

//     console.log(sum + " + " + i + " = " + (sum+i));
//     sum = sum + i;
// }

// var sum = true
// while(sum){
//   var x = parseInt(prompt("Enter Your Number: "))
//   if(x == 4){
//     console.log("Winner Winner")
//     sum = false
//   }else{
//     console.log('You Have Got ' + x)
//   }

// }

/* Switch And Case Defult 

let myDate = new Date()
let result  = myDate.getDay()
switch(result){
 case 0: 
  console.log('Sunday')
 break
 case 1:
   console.log('Monday')
   break
 case 2: 
   console.log('Towesday')
   break
 

}
let count = prompt("Enter Your Latter").toLocaleLowerCase()
switch(count){
   case 'a':
     console.log(count + ' Vowel')
     break

   case 'e':
     console.log(count + ' Vowel')
     break

   case 'i':
     console.log(count + ' Vowel')
     break

   case 'o':
     console.log(count + ' Vowel')
     break

   case 'u': 
     console.log(count + ' Vowel')
     break

   default:
     console.log(count + ' Consonant')
}
*/

// var myF = '';
// var ton = myF || 'Hello World'
// console.log(ton)

// var fto = 10;
// var tot = (fto <= 10)? 'I Agree' : 'I am not Agree'
// console.log(tot)

// var i = 1;
// var sum = 0;
// do{
//   console.log(sum+i)
//   sum = sum+i
//  i++
// }while(i <= 10)

// var marks = parseInt(prompt("Enter Your Marks:"))
// if(marks <0 || marks >100){
//   console.log('Invalid Your Marks !!!')
// }
// else if(marks <=100 && marks >=80){
//   console.log('You Have Got A+ '+' = '+ marks)
// }
// else if(marks <80 && marks >=70){
//   console.log('You Have Got A '+' = '+ marks)
// }
// else if(marks <70 && marks >=60){
//   console.log('You Have Got A- '+' = '+ marks)
// }
// else if(marks <60 && marks >=50){
//   console.log('You Have Got C '+' = '+ marks)
// }
// else if(marks <50 && marks >=40){
//   console.log('You Have Got D'+' = '+ marks)
// }
// else if(marks <40 && marks >=33 ){
//   console.log('You Have Got B '+' = '+ marks)
// }
// else if(marks <33 && marks >=0 ){
//   console.log('You Are A Failur Person '+' = '+ marks)
// }else{
//   console.log("Please Enter Your Marks")
// }

// let User = 10
// for(let x = 1; x <= User; x++){

//   let result = ''
//   for(let y = 1; y <= x; y++)

//   result = result + y + ' '
//   console.log(result)
// }

// let Factor = true;
// while(Factor){
//   let num = Math.floor(Math.random() *10 +1)
//   if(num == 10){
//     console.log('You Are Winner:')
//     Factor = false
//   }else{
//     console.log(num)
//   }
// }

// for(let a=1; a<=4; a++){
//      // document.write(a + ' ')
//   for(let b=1; b<a; b++){
//     // document.write('b' + ' ')
//   }
//   var sum = '';
//   sum = sum + b + ' '
//   console.log(sum)

// }

// while(true){
//   let prom = Math.floor(Math.random() *6)
//   if(prom == 4){
//     console.log('Winner')
//     break
//   }else{
//     console.log(prom)
//   }
// }

// let x = 1;
// do{
//   if(x%10 == 0){
//     console.log('Winner')
//     break
//   }else{
//     console.log(x)
//   }
//     x ++
// }while(x <= 10)

//  let sum = 0;
// for(let i = 1; i <= 100; i=i+1){
//   if(i%3 == 0 && i%5 == 0){
//     console.log(sum + ' + ' + i + ' = ' + (sum+i))
//     sum = sum + i
//   }else{

//   }
// }

/*
for(; ;){
  let a = Math.floor(Math.random()* 6 +1)
  if(a == 5){
    console.log('You Winner')
    break
  }else{
    console.log(a)
  }
}

while(true){
  let b = Math.floor(Math.random()* 6)
  if(b == 4){
    console.log('You Are Winner')
    break
  }else{
    console.log(b)
  }
}
*/

/*
1. What is String 
2. String Literal Vs Constructor
3. String Comparison
4. Escape Notations Or Characters in String
5.  
*/

// let length = 0;
// while(true){
//   if(hello.charAt(length) == ''){
//     break
//   }else{
//     length++
//   }
// }
// console.log(length)

// while(true){
//   let task = Math.floor(Math.random() *6)
//   if(task == 5){
//     console.log('Winner')
//     break;
//   }else{
//     console.log(task)
//   }
// }

/*
Arithmetic Operatro
+, -, *, /, %, ++, --
Assignment Operator
=, +=, -=, *=, /=, %=
Logical Operator
&&, ||, !
Comparesion Operator
==, ===, <, <=, >, >=, != !==



String Type
1. Litarel String
2. String Method
*/

// let str = 'my name is haris Ahmend i live in hangari'
// let result = str.substr('8', '2')
// console.log(result)

// let tir = '      fasdkfja;lskd        '
// console.log(tir.trim())

// let wifi = str.concat(tir)
// console.log(wifi)

// while(true){
//   let gen = Math.floor(Math.random() *6 )
//   if(gen == 5){
//     console.log('Winner Winner')
//     break
//   }else{
//     console.log(gen)
//   }
// }

// let arr = ['a', 'b', 'c', 'd', 'e']
// for(var i=0; i<arr.length; i++){
//   console.log(arr[i])
//     // console.log(typeof arr)
// }

// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for(let x=0; x<arr2.length; x++){
//     console.log(arr2[x])
//        // console.log(typeof arr2)
// }

// let arr3 = ['Naeem', 'Shohel', 'Jahid', 'Hasan', 'Sobuj']
//     arr3[4] = 'Ibrahim'
//     arr3[0] = 'Naeem Billah'
//     arr3[10] = 'Rakib Hossin'

//     for(let y=0; y<arr3.length; y++){
//       console.log(arr3[y])
//     }

//  let str = 'This is the real man here'
//  let result = str.length
//  console.log(result)

//  let str2 = 'This is the real man here'
//  let result2 = str.toLowerCase()
//  console.log(result2)

//  let str3 = 12345678910
//  let result3 = str.toString()
//  console.log(result3)

//  let str4 = 12345678910
//  let result4 = String(str4)
//  console.log(result4)

// let sum = 0
// let arr = [4, 6, 20, 42, 30, 25, 16, 15]
// for(let i=0; i<arr.length; i++){
//   arr[i] = arr[i] +2
//   console.log(arr[i])
// }

// let sum = 0
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for(let x = 0; x < arr.length; x++){
//     sum = sum + arr[x]  //arr[x] = 1 ++
//     console.log(sum)

// }

// .push .inshift .splice .shift .pop

// let arry = [5, 10, 15, 20, 25, 30, 35, 40]

// let isFound = false
// for(let i = 0; i < arry.length; i++){
//     if(arry[i] == 25){
//       isFound = true
//       console.log('Data is Founded ' + arry[i] )
//     }
// }
// if(!isFound){
//   console.log('Data Not Founded')
// }

// let myArr = [
//   [1, 2, 3, 4, 5, 6],
//   [10, 20, 30, 4, 5, 6],
//   [100, 200, 300, 4, 5, 6]
// ]

// for(let i = 0; i < myArr.length; i++){
//   for(let j = 0; j < myArr.length; j++){
//       console.log(myArr[i][j])
//   }
// }

// let ptArry = [
//   [10, 20, 15, 56, 24],
//   [52, 65, 25, 75, 45],
//   [44, 55, 63, 86, 35]

// ]
// for(let a = 0; a < ptArry.length; a++){
//   for(let b = 0; b < ptArry[a].length; b++){

//         console.log(ptArry[a][b])
//   }
// }

//  triangle

// for(let i = 1; i <= 10; i++){
//   let result = ''
//   for(let j = 1; j <= i; j++){
//     result += j + ' '

//   }
//   console.log(result)
// }

// let length = 0
// let str = 'this is the real man'
// while(true){
//   if(str.charAt(length) == ''){
//     console.log(length)
//     break;
//   }else{
//     length++
//   }
// }

/*
document.querySelector('.Button').addEventListener('click', function(){

  let username = document.querySelector('#u').value;
  let email = document.querySelector('#e').value;
  let password = document.querySelector('#p').value;
  let confirmPassword = document.querySelector('#cp').value;

  if(username == '' && email == '' && password == '' &&confirmPassword == ''){
       alert("Fill Up all Field ")
  }else if(username !== '' && email == '' && password == '' &&confirmPassword == ''){
    alert('Need Email, Password, Confirm Password')
  }else if(username !== '' && email !== '' && password == '' &&confirmPassword == ''){
    alert('Need Password, Confirm Password')
  }else if(username !== '' && email !== '' && password !== '' &&confirmPassword == ''){
    alert('Need Confirm Password')
  }else if(username !== '' && email !== '' && password !== '' &&confirmPassword !== ''){
    alert('Login Successfull')
  }else if(username !== '' && email == '' && password == '' &&confirmPassword !== ''){
    alert('Need Email, Password')
  }else if(username !== '' && email == '' && password !== '' &&confirmPassword == ''){
    alert('Need Email, Confirm Password')
  }else if(username !== '' && email !== '' && password !== '' &&confirmPassword == ''){
    alert('Need Confirm Password')
  }else if(username == '' && email !== '' && password == '' &&confirmPassword !== ''){
    alert('Need Username, Password')
  }else if(username == '' && email !== '' && password !== '' &&confirmPassword == ''){
    alert('Need Confirm Password, Username')
  }else if(username == '' && email == '' && password !== '' &&confirmPassword !== ''){
    alert('Need Username, Email Need')
  }else if(username == '' && email == '' && password == '' &&confirmPassword !== ''){
    alert('Need Usernaem, Email, Password')
  }else if(username == '' && email == '' && password !== '' &&confirmPassword == ''){
    alert('Need Username, Email, Confirm Password')
  }else if(username == '' && email !== '' && password == '' &&confirmPassword == ''){
    alert('Need Username, Password, Confirm Password')
  }else if(username == '' && email !== '' && password !== '' &&confirmPassword !== ''){
    alert('Need Username')
  }



  // if(username.length >= 6 && email.includes('@') && (password.length >= 6 && password.includes('Aa1') && password === confirmPassword)){
  //   alert('Login Success')
  // }else{
  //   alert('Login faild')
  // }


})
/* 
let arr = new Array(1,2,3,4,5,6,7,8,9,10)
 
let isFound = false;
for(let a = 0; a < arr.length; a++){
  if(arr[a] == 10){
      isFound = true
      console.log('Data Founded = ' + arr[a])
  }
}
if(!isFound){
  console.log('Data Not Founded')
}*/

/*
let myArr = [
  [40, 52, 4, 7, 25],
  [52, 96, 8, 20, 88],
  [32, 48, 57, 25, 71],
]
for(let a = 0; a < myArr.length; a++){
  let result = ''
  for(let b = 0; b < myArr[a].length; b++){
    
    result += myArr[a][b] + ' '
  }

  console.log(result)
}*/

// let obj = {
//   x: 1,
//   y: 2,
//   z: 3,
//   xx: 11,
//   yy: 22,
//   zz: 33
// }
// // Reson For Memory Location
// let obj2 = {
//   x: 01,
//   y: 2,
//   z: 3
// }

// if(obj.x === obj2.x && obj.y === obj2.y && obj.z === obj2.z ){
//   console.log(true)
// }else{
//   console.log(false)
// }
// let result = JSON.stringify(obj) === JSON.stringify(obj2)
// console.log(result)

// let arr =new Array (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
//     arr.shift()
// for(let i in obj){

//   console.log(i + ': ' + obj[i] + ' ')
// }

/* 

let Person = {
  fName: 'Mohammad',
  lName: 'Hasan',
  age: 25,
  Education: 'Masters',
  maritialStutas: 'Married',
  Country: 'Bangladesh',
  City: 'Dhaka',
  jobPossion: 'Programmer'
}
Person.lName = 'Ibrahim'

let myAge = 'age'
Person.myAge = 30
console.log(Person.myAge)

let num = {
  a: 1,
  b: 2,
  c: 3
}
console.log(Object.keys(num))
console.log(Object.values(num))
console.log(Object.entries(num))
let num2 = {
  a: 1,
  b: 2,
  c: 3
}
delete num.a
console.log(num)
console.log(JSON.stringify(num) == JSON.stringify(num2))
if(num.a == num2.a && num['b'] == num2['b'] && num.c == num2.c){
  console.log(true)
}else{
  console.log(false)
}
let newNum = 'a'
num.newNum = 40
console.log(num.newNum)

let a = [
  1,2
]
console.log(Array.isArray(a))
let b = a
b[0] = 10
console.log(b)

let c = Array.from(a)

console.log(c)

let object = {
  xx: 15,
  yy: 25,
  zz: 35
}

let nuru = Object.assign({}, object)
 nuru['xx'] = 100
 nuru['yy'] = 20
 nuru['zz'] = 30
 console.log(object)
console.log(nuru)
let f = Array.from(a)
f[0] = 500
f[1] = 1000
console.log(f)      */

// let arr1 =[10,20,30]
// let arr2 =[40,50,60]
// let arr3 =[70,80,90]

// function functionName(arr){
//     sum = 0
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     console.log(sum)
// }
// functionName(arr1)
// functionName(arr2)
// functionName(arr3)

// let arr = [
//   [10, 20, 30],
//   [30, 50, 70],
//   [53, 51, 44]
// ]
// for(let i = 0; i < arr.length; i++){
//   let res = ''
//   for(let j = 0; j <arr[0].length; j++){
//    res += arr[i][j] + ' '
//   }
//   console.log(res)
// }

/*

let arr = [40, 52, 62, 68]
let arr1 = [52, 78, 23, 46]
let arr2 = [48, 38, 73, 91]

function myFac(arr){
  let sum = 0
  for(let i = 0; i < arr.length; i++){
    sum += arr[i]
    
  }
  return sum
}
console.log(myFac(arr))
console.log(myFac(arr1))
console.log(myFac(arr2))

*/

// let arr = [
//   [1, 2, 3],
//   [3, 3, 6],
//   [5, 7, 3]
// ]
// for(let i = 0; i < arr.length; i++){
//   let result = ''
//   for(let j = 0; j < arr[i].length; j++){
//     result += arr[i][j] + ' '

//   }
//   console.log(result)
// }

// let obb = {
//   x: 1,
//   y: 2,
//   z: 3

// }

// let newOdd = 'x'
// obb[newOdd] = 200
// let a = Object.assign({}, obb)
// a['x'] = 10
// console.log(obb)
// console.log(a)

// console.log(Object.keys(obb))
// console.log(Object.values(obb))
// console.log(Object.entries(obb))

/*

function add(){
  let sum = 0
  for(let x = 0; x < arguments.length; x++){
    sum += arguments[x]
    
  }
  return sum 
}

console.log(add(10, 10, 10))


function hello(first, second) {
  function bangla() {
      if(second){
        return second.split(' ')[0]
      }else{
        return ''
      }
  }
  let res = first + ' ' + bangla()
  console.log(res)
}
// hello('good afternoon', 'sajeeb khan')

*/

// function p1(name, age, avg) {
//   let myObj = {};

//   myObj.name = name;
//   myObj.age = age;
//   myObj.avg = avg;

//   myObj.eat = function () {
//     console.log("he is eating");
//   };

//   myObj.sleep = function () {
//     console.log("he is sleeping");
//   };

//   return myObj;
// }
// let x = p1("Ibrahim", 25, 33.35);

// function java() {
//   let programm = {
//     name: "sakib",
//     age: 20,
//     label: 30,

//     myfunc: () => {
//       console.log("Hello Java Programming");
//     },
//   };
//   return programm;
// }
// console.log(java());
// console.log(java());

// Prototype details
/**/

let habit = {
  eat() {
    console.log("player's eating ");
  },
  sleep() {
    console.log("player's sleeping ");
  },
  playing() {
    console.log("player's playing ");
  },
};

function p1(name, age) {
  let person = Object.create(habit);

  person.name = name;
  person.age = age;

  return person;
}
let a = p1("sakib", 35);
let b = p1("tamim", 36);
a.playing();
