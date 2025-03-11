//all about strings.
let fname='prshotm';
let lname='singh';
// console.log(fname+"---"+lname);
console.log(`My first name is ${fname} and my last name is ${lname}`);//string  interpulation

const gameName = new String('ludo game');//string object.
console.log(gameName[3]);//value at index 3
console.log(gameName.__proto__);//for prototype
console.log(gameName.length);//for length;
console.log(gameName.toUpperCase());//to upper case.
console.log(gameName.indexOf('u'));//gives position of u.
console.log(gameName.charAt(3));//gives value at index 3.

const newStr=gameName.substring(0,2);//last not included.
console.log(newStr);//substring can't take negative value.

const anotherStr=gameName.slice(-3,4);//slice
console.log(anotherStr);

const newStrOne="   hitesh    ";
console.log(newStrOne.trim());//remove unnecessary spaces.

const url="https://prshotm.com/prshotm singh";
console.log(url.replace('prshotm', '-'));//replace value.

console.log(url.includes('prshotm'));//check if present or not

console.log(gameName.split(' '));//split on the basis of space




