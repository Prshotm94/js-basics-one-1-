const account_id=23455;//declaring constant 
let fname="prshotm"; //solves scope problem
var email="xyz76@gmail.com"; //it has issue in block and functional scope, so don't use.

console.log(account_id, " ", fname, " ", email);//for output
console.table([account_id, fname, email]);//for tabular form output.

//datatype

// primitive type
//7 types: String, Number, Boolean, null, undefined, Symbol
//BigInt for large values.

//reference (Non primitive)
//Array, objects, function

console.log(typeof fname);//tell us the datatype.
console.log(typeof(email));//this is also correct.

//typecasting

let score="33";//this is string
let numberedScore=Number(score);//here we converted it into number.
console.log(typeof(numberedScore), " ", numberedScore);//here the converted 
// number may or may not be correct(so output can be NaN)
let num=77;
let stringVal=String(num);
console.log(typeof(stringVal), " ", stringVal);

//comparison
console.log(2<5);//true
console.log(2>5);//false
console.log(2!=5);//true
console.log(2==5);//false
console.log(null>=0);//true
console.log(null>0);//false
console.log(null==0);//false


