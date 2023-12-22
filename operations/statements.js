//block of codes executing based on the condition then we use statements
//if else
//switch

/* const gender=prompt("What is your gender? (m/f)");
if(gender==="m"){
    alert("Male");
}else{
    alert("Female");
} */

/* const assassin=prompt("State Your name.")
 switch(assassin) {
    case "JohnWick":
    console.log("Welcome, The 5 star assassin");
break;

case "Hit":
case "Alucard":
console.log("Welcome, The 10 star assassin");
break;

case "Killua":
case "Levi":
console.log("Welcome, The 6 star assassin");
break;

default:
console.log("You are not registered.");
 } */

 //Ternary Operator
 const gender=prompt("Enter your gender:"); 
 gender==="m"? console.log("Male"): gender==="f"?console.log("Female"): console.log("Other");

 //Ternary operator to check if a user can vote or not (age above 18)
 const age=Number(prompt("Enter the age:"));
 age>=18 ? console.log("can"): console.log("Cannot");