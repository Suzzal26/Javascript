/* //printing hello world
console.log("Hello World")

//value of PI
console.log("Original pie value",Math.PI) */

//compute the sum of the two given integers. If the two values are the same, then return triple their sum
/* const num1 = Number(prompt("Enter the first number"));
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
console.log("Result is: ",result); */


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

//to get current date
/* onst currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth()+1;
const day = currentDate.getDate();
console.log(`Current Date: ${year}-${month}-${day}`); */

//to calculate multiplication and division of two numbers.(use same function to achieve this)
/* Steps:
1.Create a default function
2.
3.
4.
5.
 */

/* const calculate=(num1,num2,operation="*")=>{
    if(operation==="*"){
        return num1*num2;
    }
    return num1/num2;
}
console.log(calculate(10,2,"*")); */

//to reverse a number
/*
1.Write a function called reverser
2.Call the reverser with parameter
3.Invoke that Function with data
4.Typecast that Number to String
5.Get the length of the String
6.Loop in opposite way
7.Return the value */
/* const reverse=(num)=>{
    const data=String(num);
    const length0fData=data.length;
    for(let i=length0fData; i>=0;i--){
        console.log(data[i]);
    }
} */
/* function reverseNumber(num){
let reverseNum=0;
while(num!==0){
    const digit=number%10;
    reversedNum=reverseNum*10+digit;
    num=(num-digit)/10;
}
return reverseNum;
}
const original=Number(prompt("State the number"));
const reversed=reverseNumber(num1)
console.log(`Reversed Number ${original}`) */

// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
/*
Steps:
//Without usinf default function
1.Creating a function C to F
2.Using const to put the formula (c * 9 / 5) + 32;
3.Creating another function F to C
4.Using const to put the formula (f- 32) * 5 / 9;
5.const temperature in celsius and fahrenhite
6.Using console.log (`${temp in f}${C to f}`)
7.Same as no.6 for celsius

/* const convert=(temp,measurement='C')=>{
  if(measurement ==='C'){
    return(9*temp)/5+32+"farenheit";
  }
  return((temp-32)/9)*5+"celsius";
};
console.log(convert(45,"f")); */

//to count the number of vowels in a given string.
/* function countVowels(str) {
  const lowerStr = str.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let i = 0; i < lowerStr.length; i++) {
    if (vowels.includes(lowerStr[i])) {
      count++;
    }
  }
  return count;
}

const inputString = "One Piece";
const vowelCount = countVowels(inputString);
console.log(`Number of vowels in "${inputString}": ${vowelCount}`); */
