// // var input = prompt("give me a number!!!", "999");
// // var numArray = input.split("");
// // console.log(numArray);
// // var result  = 0;
// // for (var i = 0; i <  numArray.length; i++){
// //     result += +numArray[i];
// // }
// // console.log(result);



// var input = prompt("give me a number!!!", "123");
// var num = parseInt(input);
// var result = 0;

// while (num) {
//   result += num % 10;
//   num = Math.floor(num / 10);
// }

// console.log(result);

// question 18

// var str = "The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word";

// var count = 0;
// var strInToArray = str.split(" ");
// // console.log(strInToArray);
// for (var i = 0; i < strInToArray.length; i++) {
//     if (strInToArray[i].toLocaleLowerCase() === "the") {
//       count++
//     }
// }
// console.log("Number of \"the\" in given text is " + count);


// queston  17

// var str = prompt("Enter any string, js will returns  it's last character!!", "pakistan");
// var strToArray = str.split("");
// var len = str.length-1;
// console.log(strToArray[len]);



// question 16

// var str = "University of Karachi";
// var strToArray = str.split("");
// for (var i = 0; i < strToArray.length; i++) {
//   document.write(strToArray[i] + "<br></br>");
// }


// question 15

// var password = prompt("enter password :");
// password = password.toLowerCase().split("");
// while (password.length < 6) {
//   password = prompt("Please enter a password of at least 6 characters:");
// }
// while (+(password[0]).charCodeAt() >= 49 && +(password[0]).charCodeAt() <= 57) {
//   password = prompt("password can't begin with numbers, enter your password again:");

// }
// for (var i = 0; i < password.length; i++) {
//   while (((password[i].charCodeAt() >= 49 && password[i].charCodeAt() <= 57) || (password[i].charCodeAt() >= 97 && password[i].charCodeAt() <= 122 )) && (password.length >= 6)) {
//     password = prompt("password accepted!!");

//   }
// }



// for (var i = 0; i < password.length; i++) {
//   while (((password[i].charCodeAt() >= 49 && password[i].charCodeAt() <= 57) && (password[i].charCodeAt() >= 97 && password[i].charCodeAt() <= 122 )) && (password.length >= 6)) {
//     password = prompt("password must  contain alphabets and numbers!!");

//   }
// }


var password = prompt("enter password :");
password = password.toLowerCase().split("");
var hastring = false;
var hasNumber = false;
var startsWithletter = false;

if (pa)
























// let password = prompt("Enter your password: ");

// while (true) {
//   // Check if the password contains alphabets and numbers
//   let hasAlphabet = false;
//   let hasNumber = false;
//   for (let i = 0; i < password.length; i++) {
//     if (/[a-zA-Z]/.test(password[i])) {
//       hasAlphabet = true;
//     } else if (/[0-9]/.test(password[i])) {
//       hasNumber = true;
//     }
//   }

//   // Check if the password starts with a letter
//   let startsWithLetter = /^[a-zA-Z]/.test(password);

//   // Check if the password is at least 6 characters long
//   let isAtLeast6Characters = password.length >= 6;

//   // If the password meets all requirements, break out of the loop
//   if (hasAlphabet && hasNumber && startsWithLetter && isAtLeast6Characters) {
//     console.log("Valid password:", password);
//     break;
//   } else {
//     // Otherwise, prompt the user to enter a valid password
//     password = prompt("Invalid password! Enter a password that contains alphabets and numbers, does not start with a number, and is at least 6 characters long:");
//   }
// }




























// question 14

// var array = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var item = prompt("what do you want??", "patties");
// var searcheItemInlowercase = item.toLocaleLowerCase();
// for (var i = 0; i < array.length; i++) {
//     if(array[i] === searcheItemInlowercase){
//         alert(item + " found at  index " + i);
//     }
// }




// question 13

// var userName = prompt("enter your name!!!");
// var input = userName.toLocaleLowerCase().split("");
// for (var i = 0; i < input.length; i++) {
//     if(input[i].charCodeAt() === 33 || input[i].charCodeAt() === 44 || input[i].charCodeAt() === 46 || input[i].charCodeAt() === 64){
//         alert('Invalid password');
//     }
// }




// question 12
// var floatNum = prompt("enter a floating number!! JS will remove dot.");
// var num = floatNum.split(".").join("");
// console.log(num);


// queston 11


// var str = prompt("enter your txt JS will convert in  title case");
// // console.log(str);
// var newStr = str.toLocaleLowerCase().split(" ");
// console.log(newStr);
// var arrayForLowerCase = [];
// var arrayForUpperCase = [];
// var titleCase = [];
// for (var i = 0; i < newStr.length; i++){
//     arrayForUpperCase[i] = newStr[i].slice(0,1).toUpperCase();
//     // console.log(arrayForUpperCase);
//     arrayForLowerCase[i] = newStr[i].slice(1).toLowerCase();
//     // console.log(arrayForLowerCase);
//     titleCase = arrayForUpperCase[i] + arrayForLowerCase[i];
//     console.log(titleCase);

// }


// queston 10
// var str = prompt("enter txt JS will convert into UpperCase!!");
// var upperCaseString = str.toUpperCase();
// console.log(upperCaseString);


// // question 9

// var str = prompt("Enter a number", "472");
// var num = +str;
// console.log(str + " is " + typeof(str));
// console.log(num + " is " + typeof(num));

//question 8

// var str = prompt("enter your txt  js will find \"and\" and replace  with &", "Ali and Sami are best friends. They play cricket and football together.");
// str = str.toLowerCase();
// var strArray = str.split(" ");
// for (var i = 0; i < strArray.length; i++) {
//     if (strArray[i] === "and") {
//         strArray[i] = "&"
//     }
// }
// var newStr = strArray.join(" ");
// console.log(newStr);


// question  7

    // var city = "Hyderabad";
    // var SubStr = city.slice(-4);
    // city = "Islam"+ SubStr;
    // console.log(city);


// question 6
// var firstName = prompt("enter your first name");
// var lastName = prompt("enter your last name");
// var fullName = firstName.concat(" ",lastName);
// var  gender = prompt("Are you male or female", "male")
// gender = gender.toLowerCase();
// if (firstName === "" && lastName === "" && gender === "male"){
//     alert("O Hello Mr naam batao zyadda hoshiyari nhi");
// }

// if (firstName === "" && lastName === "" && gender === "female"){
//     alert("O Hello Ms naam batao zyadda hoshiyari nhi");
// }
// if (gender === "male" && firstName != "" && lastName != "") {
//     alert("Hello Mr ".concat(fullName));
// }
// else if (gender === "female" && firstName != "" && lastName != ""){
//     alert("Hello Ms " .concat(fullName));
// }

// question 5

// var str =  "pakistani";
// var index = 3;
// var newStrArray = str.split("");
// var item = newStrArray[index];
// console.log(item);


// question 4
// var  str = "Hello World";
// var index = str.lastIndexOf("l");
// console.log(index);

// question 3

// var str = "Pakistani";
// var index = str.indexOf("n");
// console.log(index);


// question 2

    // var mobileModel = prompt("Enter  your favorite mobile model!!, Js will tell you length of string","Samgsung Galaxy S6 Edge Plus");
    // var len = mobileModel.length;
    // console.log(len);



// question 1
// var firstName = prompt("enter your first name");
// var lastName = prompt("enter your last name");
// var fullName = firstName + " " + lastName;
// var  gender = prompt("Are you male or female", "male")
// gender = gender.toLowerCase();
// if (firstName === "" && lastName === "" && gender === "male"){
//     alert("O Hello Mr naam batao zyadda hoshiyari nhi");
// }

// if (firstName === "" && lastName === "" && gender === "female"){
//     alert("O Hello Ms naam batao zyadda hoshiyari nhi");
// }
// if (gender === "male" && firstName != "" && lastName != "") {
//     alert("Hello Mr" + fullName);
// }
// else if (gander === "female" && firstName != "" && lastName != ""){
//     alert("Hello Ms" + fullName);
// }