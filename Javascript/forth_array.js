const myArr = ['prshotm', 99, true];
console.log(myArr);
console.log(typeof(myArr));
console.log(myArr[1]);

const newArr=new Array(1,2,3,4);//second method of writing array
console.log(newArr);
myArr.push(6);//push 6 in array.
myArr.pop();//pop last element from array;
myArr.unshift(9);//push element in first position in array
myArr.shift();//pop 1st element from array.

console.log(myArr.includes(99));//tell us that the value is present or not
console.log(myArr.indexOf(99));//tell about index

const newArr2 = myArr.join();//convert to string
console.log(newArr2);
console.log(typeof(newArr2));

console.log("a ", myArr);
const myn1=myArr.slice(1,3);
console.log(myn1);
console.log("b ", myArr);

const myn2=myArr.splice(1,3);
console.log(myn2);
console.log("b ", myArr);



console.log(myArr);