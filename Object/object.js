//syntax

const person="Sujal Ghimire"

console.log(person);

//key value pair
const person1={
    firstName:"Sujal",
    lastName:"Ghimire",
    age: 20,
    address: "Kausaltar",
    isAdult:true,
    fullname:function(){
        return this.firstName + this.lastName;
    },
   isEligibleToVote: function () {
    return this.age >= 18; // Corrected the function to return a boolean value
  },
};
console.log(person1.isEligibleToVote());
