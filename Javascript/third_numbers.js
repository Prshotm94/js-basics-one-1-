const score = 400;
const balance = new Number(100);//this is object.
console.log(`my score is ${score} and the type of this is ${typeof(score)}`);
console.log(`my balance is ${balance} and the type of this is ${typeof(balance)}`);

console.log(balance.toString());//now all the string properties can be applied on this.
console.log(balance.toFixed(2));//two decimal values only.

const newNumber= 23.8966;
console.log(newNumber.toPrecision(3));//round off the numbers.

const newSecNum=100000;
console.log(newSecNum.toLocaleString());//number with commas in International system
console.log(newSecNum.toLocaleString('en-IN'));//number with commas in Indian system

console.log(Math.abs(-6));//absolute value of 6
console.log(Math.round(6.7));//rounded value
console.log(Math.ceil(6.7));//ceiling value
console.log(Math.floor(6.7));//floor value
console.log(Math.pow(6,2));//power of 6 to the power 2;
console.log(Math.random());//random value
console.log(Math.random()*10);//random value between 0 to 9
console.log(Math.floor(Math.random()*10)+1);//random value between 1 to 9
console.log(Math.floor(Math.random()*10000)+1);//random value of 4 digits




