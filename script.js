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
 let a="pallavi";
 let b=7;
 console.log(a+b);
// -------------------------------------------------------
// (typeof(a+b)):-this is used to find whether the data type is like string int etc
console.log(typeof(a+b)); 