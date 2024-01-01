//Initial Approach
const num1= Number(prompt("State the first number"));
const num2=Number(prompt("State the second number"));
/*  if(typeof num1 !="Nan" || typeof num2 !="Nan"){
    alert("Invalid");
}else{  
    alert("Here is you calculations")*/
     // const add(num1,num2) => {num1+num2}
function add(num1,num2){
    return num1+num2;
}
const value=add(num1,num2);
console.log("sum is "+value);
 // const sub(num1,num2) => {num1-num2}
function sub(num1,num2){
    return num1-num2;
}
const value1=sub(num1,num2);
console.log("difference is "+value1);
 // const mul(num1,num2) => {num1*num2}
function mul(num1,num2){
    return num1*num2;
}
const value2=mul(num1,num2);
console.log("product is "+value2);
 // const div(num1,num2) => {num1/num2}
function div(num1,num2){
    return num1/num2;
}
const value3=div(num1,num2);
console.log("quotient is "+value3);


//Different Approach
/* const num1= Number(prompt("State the first number"));
const num2=Number(prompt("State the second number"));

function add(num1,num2){ //const add=(num1,num2) => {num1+num2}
    return num1+num2
}
function sub(num1,num2){
    return num1-num2
}
function mul(num1,num2){
    return num1*num2
}
function div(num1,num2){
    return num1/num2
} 
function calculate(value,num1,num2){
    switch(value){
        case "+":
        return num1+num2;
        case "-":
        return num1-num2;
        case "*":
        return num1*num2;
        case "/":
        return num1/num2;
        default:
            return "Invalid"l  
    }
}
const result=calculate(value,num1,num2);
console.log('Result of ${num1} ${value} ${num2} is ${result}'); */

