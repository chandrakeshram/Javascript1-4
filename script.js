// console.log("Hello WOrld");
// let str = "String ";
// console.log(str+10);


// console.log(typeof(str));


// const obj = {
//     "name":"Chandrakesh",
//     "age":22,
//     "hobby":"Cricket",
//     "isMale":true
// }
// console.log(obj['hobby']);
// const dictionary ={
//     "ashtonished":"surprised",
//     "connundrum":"confusing situation",
//     "pale":"bucket",
//     "swine":"pig",
//     "intermediate":"class 12th"
// }
// console.log(dictionary.pale);
// let a=32;
// let b=3;
// //Arithmetic Operators
// console.log("a + b "+ (a+b));
// console.log("a - b "+ (a-b));
// console.log("a x b "+ (a*b));
// console.log("a % b "+ (a%b));

// //Assignment Operators
// console.log(a+=b);
// console.log(a-=b);
// console.log(a*=b);
// console.log(a/=b);
// console.log(a**=b);
// console.log(a+=1);
// console.log(a);

// //Comparison Operators
// console.log(a==b);
// console.log(a!=b);
// console.log(a===b);
// console.log(a!==b);
// console.log(a>b);
// console.log(a<b);
// console.log(a<=b);
// console.log(a>=b);
// let res = (a>b)?a:b;
// console.log(res);

// //Logical Operators
// console.log(a>b && a!==b);
// console.log(a<b || a==b);
// console.log(!false);

// let ctitle = document.getElementByClassName("card-title")[0];
// ctitle.style.color = "blue";

// let first = document.getElementById("p1");
// first.style.background="grey";0

// let ctitles = document.getElementByClassName("nav-link");
// ctitles[3].style.fontSize="50px";
// let tags = document.getElementsByTagName("a");
// tags[2].style.fontSize="34px";
// let query = document.querySelectorAll(".nav-link");
// query[0].style.color="cyan";
// let firstquery =document.querySelector(".nav-link");
// firstquery.style.background="#32dac3";

console.log(document.getElementById("id1").matches(".box"));
console.log(document.getElementById("id1").contains(document.getElementById("sp1")));  
console.log(document.getElementById("sp1").contains(document.getElementById("id1")));
console.log(document.getElementById("id1").closest(document.getElementById("#sp1")))      