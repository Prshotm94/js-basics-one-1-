const user={
    username:"prshotm",
    price:1000,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);//all contest value.
    }//this points to the current contest(kiske baare ma bol raha hai);
}

user.welcomeMessage();
user.username = 'Sam';
user.welcomeMessage();

const func=(num1, num2)=>{
    return num1+num2;
}
console.log(func(3,5));//arrow function

const mulTwo=(num1, num2)=> (num1*num2);//implicit arrow function. No need to write return keyword
console.log(mulTwo(2,5));

const objRet=()=>({username:"prshotm"});//this is used to return object
console.log(objRet());