const num1= Number(prompt("State the first number"));
const num2=Number(prompt("State the second number"));
if(typeof num1 !="Nan" || typeof num2 !="Nan"){
    alert("Invalid");
} else{
const option=Number(prompt("Enter what you wanna perform\n1-Add\n2-Sub\n3-Mul\n4-Div"));

switch(option){
    case 1: 

    console.log(num1+"+"+num2+"="+(num1+num2));
    break;
  case 2: 

    console.log(num1+"-"+num2+"="+(num1-num2));
    break;
    case 3: 

    console.log(num1+"*"+num2+"="+(num1*num2));
    break;
    case 4: 

    console.log(num1+"/"+num2+"="+(num1/num2));
    break;
    default:
        console.log("Invalid");
}
}