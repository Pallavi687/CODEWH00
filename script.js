// Print today program
// function mydata()
// {
//     var day;
//     var day= prompt("Hello,Friends Enjoy Your day");
//     switch (new Date().getDay()) {
//         case 0:
//           day = "Sunday";
//           break;
//         case 1:
//           day = "Monday";
//           break;
//         case 2:
//           day = "Tuesday";
//           break;
//         case 3:
//           day = "Wednesday";
//           break;
//         case 4:
//           day = "Thursday";
//           break;
//         case 5:
//           day = "Friday";
//           break;
//         case  6:
//           day = "Saturday";
//           break;
//         default:
//           day = "Unknown Day";
//       }
//       document.getElementById("sample").innerHTML = "Today is " + day;
//     }
// ___________________________________________________________________________________

// WAP to find factorial of number.
// function factorial(n){
//   let answer = 1;
//   if (n == 0 || n == 1){
//     return answer;
//   }
//   else if(n > 1){
//     for(var i = n; i >= 1; i--){
//       answer = answer * i;
//     }
//     return answer;
//   }
//   else{
//     return "number has to be positive."
//   }  
// }
// let n=4;
// answer = factorial(n)
// console.log("Factorial of " + n + " : " + answer);
// __________________________________________________________________-- -
  
// WAP given number is prime or not
  // let num=prompt("please enter your number");
  // let flag=0;
  // for(let i=2; i<num;i++){
  //   if(num%i==0){
  //     console.log(num + "is not prime number.");
  //     flag=1;
  //   }
  // }
  // if(flag==0)
  // {
  //   console.log(num + "is prime number")
  // }
  // wap to print even and odd number
  // let a= prompt(!null);
  // if (a%2==0)
  // {
  //   console.log("the number is even");
  // }
  // else{
  //   console.log("The number is odd");
  // }
  // _____________________________________________________________

  // wap to print windoww page
// document.getElementsByTagName("p");
// function sample0()
// {
//   window.print();
// }
// ___________________________________________________________________

// Wap to print date
// let today= new Date();
// let dd= today.getDate();
// let mm = today.getMonth()+1;
// let yyyy =today.getFullYear();
// if(dd<10)
// {
//   dd='0'+dd;
// }
// if(mm<10){
//   mm='0'+mm;
// }
// today= mm+'-'+dd+'-'+yyyy;
// console.log(today);
// today= mm+'/'+dd+'/'+yyyy;
// console.log(today);
// today= dd+'-'+mm+'-'+yyyy;
// console.log(today);
// today= dd+'/'+mm+'/'+yyyy;
// console.log(today);

// ______________________________________________________________________________

// var today = new Date();
// var dd = today.getDate();

// var mm = today.getMonth() + 1;
// var yyyy = today.getFullYear();
// if (dd < 10) {
//   dd = '0' + dd;
// }

// if (mm < 10) {
//   mm = '0' + mm;
// }
// today = mm + '-' + dd + '-' + yyyy;
// console.log(today);
// today = mm + '/' + dd + '/' + yyyy;
// console.log(today);
// today = dd + '-' + mm + '-' + yyyy;
// console.log(today);
// today = dd + '/' + mm + '/' + yyyy;
// console.log(today);
// __________________________________________________________

// Write a JavaScript function to find the area of a triangle
//  let side1 = 2;
//  let side2 = 11;
//  let side3 = 20;
//  let s= (side1+side2+side3)/2
// let area= Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
// console.log(area);
// ___________________________________________________________

// WAP program to rotate the string 'w3resource' in right direction by 
// periodically removing one letter from the end of the string and 
// attaching it to the front.
//  function animation_string(id)
//  {
//   let main= document.getElementById(id);
//   let textNode= main.children[0];
//   let text =textNode.data;
 
//  setInterval(()=>{
//   text =text[text.lenght - 1]+ text.substring(0,text.length-1);   
//   textNode.data=text;                    
//  },10);
// }
// -----------------------------------------------------------------------
//  let a="pallavi";
//  let b=7;
//  console.log(a+b);
// // -------------------------------------------------------
// // (typeof(a+b)):-this is used to find whether the data type is like string int etc
// console.log(typeof(a+b)); 
// ------------------------------------------------------
// WAP to find age is lise between 10 and 20
// let age= prompt("what is your age");
// if(age>10 && age<20);
// {
//   console.log("your age lise between 10 and 20");
// }
// {
//   console.log("your age not lise between 10 & 20");
// }
// ----------------------------------------------------
// WAP whether the number is divisible two or not
// let num= prompt("Enter your number ");
// if(num%2==0){
//   console.log("Number is divisible by two");
// }
// else if(num%3==0) 
// {
//   console.log("Number is divisible by three");
// } 
// ---------------------------------------------
// WAP to print marks of a student in an object using for loop and for-in loop
// let marks=
// {
//   Ram: 90,
//   Shyam: 40,
//   Lalit: 10
// }
  // for(let i=0;i<Object.key(marks).length;i++){
  // console.log("The marks of"+Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]]);
// }
// below code is by using for-in loop
// for(let key in marks){
//   console.log("The marks of " +key+ " are " + marks[key])
// }
// WAP to print correct number 
// let correctnumber= 20;
// let i;
// while(i!=correctnumber){
//   console.log("Please try again");
//   i=prompt("please enter your nummber");
// }
// console.log("hey, you have entered correct number.");
// WAP to print mean of 5 number.

// const mean= (a,b, c,d)=>{
//   return(a+b+c+d)/4
// }
// console.log(mean(20,22,24,25));
// explore includes, startwith and endwith function of a string.
// include()
// let text="My faviorte car is BMW";

// let result= text.includes("BMW", 19);
// console.log(result);
// stratwith()
function func() {
         
  // Original string
  var str = 'It is a great day.';
   
  // Checking the condition
  var value = str.startsWith('It');
  console.log(value);
}
func();
// endswith()
function fun(){
  var str ='Enjoy every day.';
  var value = str.endsWith('day');
  console.log(value);
}
fun();
// WAP to convert a given string to lowercase.
function low(){
  var str = 'Covert me lowercase and uppercase.'
  var main = str.toLowerCase(str);
  console.log(main);
}
{
  var strs ="covert me "
  var mainn = strs.toLocaleUpperCase('convert');
  console.log(mainn);
}
low();
// Wap to remove the some part of sentence,
function rem()
{
  let stra = "please give me a ru. 20000.";
  let amount = stra.slice('please give me a ru.'.length);
  console.log(amount);
}
rem();
// array quetions
// create an array of number and take input from the user to add num to this array.
// function arr()
// {
//   const n =[1,2,3,4,5,6]
//   n.push(7,8,9,10);
//   console.log(n);
// }
// second way
// {
// let ar =[1,2,3,4,5,6,7,8,9,10]
// let a=prompt("plz Enter number.")
// a=Number.parseInt(a)
// ar.push(a);
// console.log(ar);
// }
// arr(); 
// WAP keep adding number to the array in que(1) until 0 is added to the array.
// let ar =[1,2,3,4,5,6,7,8,9,10]
// let a;
// do{
// a=prompt("plz Enter number.")
// a=Number.parseInt(a)
// ar.push(a);
// }
// while(a !=0);
// console.log(ar); 
// WAP filter a num divisible by 10 from a given array.
let ar =[1,20,3,40,5,60,7,80,9,110]
let a =ar.filter((n)=>{
  return n%10 ==0;
})
console.log(a);
// WAP to create an arrary of square of given number.
const m=[2,3,4,5,6]
let o= m.map((x)=>{
  return x*x;
})
console.log(o);
// WAP reduce to calculate foctorial of a given number from an array of first n natural number.
const q=[2,3,4,5,6]
let p=q.reduce((x1,x2)=>{
  return x1*x2;
})
console.log(p);
//WAP using prompt function to take input of age as a value from the user and use alert to tell him if he can drive.
// let age = prompt("please enter your age");{
// if(age>=18){
//   console.log("Enjoy your driving");
// }
// else if(age<=18){
// alert("driving is not safe for you");
// console.log("you can't drive");
// }
// else(age<=-10)
// {
//   console.error("you enter negative number");
// }
// }
// 2nd way
// let ae = prompt("Enter your age");
// ae= Number.parseInt(ae)
// const canDrive = ((ae)=>{
//   return ae>=18?true:false
// })
// if((canDrive(ae))){
//   alert("yes u can drive");
// }
// else{
//   alert("you cann't drive");
// }
// WAP to change the url to google(Redirection)if user enter a number greater than 4.
// let number = prompt("Enter your number");
// number = Number.parseInt(number)
// if(number>4){
//   location.href ="https://google.com"
// }
// change the background of the page to yellow , red or any other color based on user input through prompt.
let color = prompt("Please enter your color");
document.body.style.background =color;
