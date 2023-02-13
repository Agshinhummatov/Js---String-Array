"use strict"


// 2) Parametr olaraq gelen stringi tersine ceviren method yazin.

// function reverseString(str) {
//     let reverseStr = "";
//     for (let i = str.length-1; i >= 0 ; i--) {
//         reverseStr += str[i];
//     }
//     return reverseStr;
// }
// console.log(reverseString("Aqsin"));










// function getStudents(params) {

//     let stu1 = {
//         name: "Pervin",
//         email: "pervin007@gmail.com"
//     }
//     let stu2 = {
//         name: "cinare",
//         email: "cinare@gmail.com"
//     }
//     let stu3 = {
//         name: "Shaiq",
//         email: "shaiq@gmail.com"
//     }
//     let stu4 = {
//         name: "Eli",
//         email: "Eli@gmail.com"
//     }

//     let students = [stu1,stu2,stu3,stu4]

//     return students;
// }


// function getStudentsCountByEmail(str) {


//     let students = getStudents();

//     let count =0;

//     for (const item of students) {
        
//         if (stu.email.includes(str)) {
//             count++;
//         }
//     }

//     return count;
    
// }

// console.log(getStudentsCountByEmail("c"));


// const getBirthdayYear = age =>{

//     let date = new Date();

//     let year =date.getFullYear();

//     return year-age;


// }

// console.log(getBirthdayYear(29));

// let address = "Ehmedli";

// for (let i = 0; i < address.length; i++) {
//     console.log(address[0]);
// }

// console.log(address[0]);

// let address = "Ehmedli";

// console.log(address.charAt(0));

// console.log(address.charCodeAt(0));



// console.log(address.toLowerCase());

// console.log(address.split(""));
// console.log(address.trim());

// console.log(address.trimEnd());
// console.log(address.slice(1,3));

// console.log(address.substring(1,3));


// let text = "shdjdijdkdskskdllskdslkdlsdklsddslk";

// if (text.length >10) {

//     console.log(text.substring(1,10) + "...");
    
// }

//  console.log(address.substr(1,3));


// let text = "Salam Anar bey";
// console.log(text.replace("Anar","Mubariz"));

// let text1 = "Hello";

// let text2 = "Word";

// let res = text1.concat(text2)


// const strToUpper = str => {
//     return str.charAt(0).toUpperCase() + str.slice(1)

// }

// console.log(strToUpper("hello"));


// let students = ["Cavid","Jale","Roya","Aqsin","Cinare"]


// console.log(students[students.length-1]);



// let students = ["Cavid","Jale","Roya","Aqsin","Cinare"]


// students.push("Elekber")

// students.pop();

// students.unshift("Hacker")

// console.log(students);


// function filter(arr) {
//     let result = [];
//     for (const item of arr) {
        
//         if (item.includes("A")) {
//             result.push(item)
//         }
//     }

//     return result;
    
// }

// console.log(filter(students));


// let students = ["Cavid","Jale","Roya", "Jale","Aqsin","Cinare"];

// let text ="R";

// function filter(arr,text) {
//     let result = [];
//     for (const item of arr) {
        
//         if (item.toLowerCase().startsWith(text.toLowerCase())) {
//             result.push(item)
//         }
//     }

//     return result;
    
// }

// console.log(filter(students,text));

// console.log(students.indexOf("Jale"));

// console.log(students.lastindexOf("Jale"));


// let result = students.find(m=>m == "Jale")


// let students = ["Cavid","Jale","Roya", "Jale","Aqsin","Cinare"];

// students.reverse();

// console.log(students);


// console.log([3,8,7,-20,-30,27].sort((a,b)=>a-b));

// let students = ["Cavid","Jale","Roya", "Jale","Aqsin","Cinare"];

// students.fill("Aqsin")


// console.log(students.every(m=>m=="Aqsin"));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();

// for (const item of f) {
    
//     console.log(item);
// }


// let arr = [10,20,30,40]

// console.log(arr.findIndex(m=>m>20));


// console.log(arr.includes(20));


// let arr = [10,20,30,40]

// console.log(Array.isArray(arr));

// let text = "ABCDFE";
// const myArr =  Array.from(text);     
// console.log(myArr);


//  console.log(arr.slice(2));

// console.log(arr.slice(2,5)); 


//  const fruits = ["Banana", "Orange", "Apple", "Mango"];

//  fruits.splice(2, 0, "Lemon", "Kiwi");


//  fruits.splice(2, 1, "Lemon", "Kiwi");    

// console.log(fruits);

// console.log(arr.toString());


// let age = "55";

// let age2 = "33"

// console.log(typeof age.toString());

// console.log(Number(age) + Number(age2));


// function getNums(...arr){
//     console.log(arr);
// }

// getNums(1,2,3,4)


// let test = (...arr) => {
//     console.log(arr);
// }

// test(1,2,3)



// let arr1 = [1,2,3,4,5];


// let copyArr = [...arr1];

// console.log(copyArr);

// arr1[0] = 10;

// console.log(arr1);
