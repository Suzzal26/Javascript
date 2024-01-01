/* //printing hello world
console.log("Hello World")

//value of PI
console.log("Original pie value",Math.PI) */

//compute the sum of the two given integers. If the two values are the same, then return triple their sum
const num1 = Number(prompt("Enter the first number"));
const num2 = Number(prompt("Enter the second number"));
function sum(num1,num2){
const sum=num1+num2;
if(num1 === num2){
    return sum * 3;
} else{
    return sum;
}
}
const result=sum(num1,num2);
console.log("Result is: ",result);


//multiple of 3 or 7
/* function Multipleof(number){
    if(number <= 0){
        return false;
    }
    return number % 3===0 || number % 7===0;
}
const testNumber=Number(prompt("Enter the number"));

if (Multipleof(testNumber)){
    console.log(`${testNumber} is multiple of 3 or 7`)
} else{
    console.log(`${testNumber} is not a multiple of 3 or 7`)
} */




