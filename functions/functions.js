/* //Addition
function sum(a,b){
    return a+b;
}
const value=sum(2,3);
console.log(value);

//Difference
function diff(a,b){
    return a-b;
}
const value1=diff(2,3);
console.log(value1);

//Multiply
function mul(a,b){
    return a*b;
}
const value2=mul(2,3);
console.log(value2);

//Division
function div(a,b){
    return a/b;
}
const value3=div(2,3);
console.log(value3); */

//Add two numbers
/* const a=Number(prompt("Enter 1"));
const b=Number(prompt("Enter 2")); */

//Define the fuction(basic)
//es5
/* function add(a,b){
    return a+b;
}
const value=add(a,b);
console.log(value); */

//es6 (arrow function)
//const add = () => {};
//const sub= ()=> {};
/* const add=(a,b) => {
    return a+b;
}  */

//Nameless Fuction
//Default Function
//Parameterized Function
//Inline Function(interview ques.)
//Closure(interview ques.)-function that return the hardcoded variable stored inside the function
//Use case:Used to get the secret environment variables used in the application
//Implicit-If we remove the return keyword to return the result
//Explicit
//IIFE-Immediately Invoked Functional Expression


//Write multiplication table of 2 and 3 using loop and function

/* function table(num,to){
console.log("Table of ${num}");
for(let a=1;a<=to;a++){
    const result=num*a;
    console.log("${num} * ${a} =${result}");
}

}
table(2,10);
table(3,10); */

/* 
// Function to generate multiplication table
function generateMultiplicationTable(number, upTo) {
  console.log(`Multiplication Table of ${number}:`);
  for (let i = 1; i <= upTo; i++) {
    const result = number * i;
    console.log(`${number} * ${i} = ${result}`);
  }
}

// Generate multiplication table for 2
generateMultiplicationTable(2, 10); // You can change 10 to any number you want

// Generate multiplication table for 3
generateMultiplicationTable(3, 10); // You can change 10 to any number you want
 */

//Pagination Logic

/* {1,2,3,4,5,6,7,8,9,10};

function pagination (page,size) {} 

pagination (); //1,2,3,4,5
pagination (2);//6,7,8,9,10 */

//define function
//Name it pagination
//Write the 2 parameters {page,size}
//Define the default parameters (page =1, size=5)
//Write the loop logic to display the value


/* const pagination=(page=1,size=5) =>{
    for(let i=page;i<=size;i++){

console.log(i)
    }
};
pagination();
 */