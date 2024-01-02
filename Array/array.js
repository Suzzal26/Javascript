/* const persons=[
    {name:"Rame", age: 20},
    {name:"Shyame", age: 20},
    {}
]
const personss=new Array();
console.log(persons)

//Access
//Provide index value in the array
//Index always starts from 0
console.log(persons[persons.length-1]);

//Update
persons[0]= {name:"Shyame"};
persons[3]= {name:"shyame"}; */

/* const saiyan=["Goku","Gohan","Goten"];
const first=saiyan[0]
const second=saiyan[1]

saiyan[2]="Broly"
saiyan[3]="Vegeta"
console.log(saiyan); */

//Loop inside Array
/* const persons=[
    {name:"Rame", age: 20},
    {name:"Shyame", age: 21},
    {name:"Harie", age: 22}
]

const showName=(persons)=>{
    console.log(people.name);
};

//Loop using for Loop

for(let i=0;i<=persons.length-1;i++){
    showName(persons[i])
}

//Loop using arrays in built features
persons.forEach(showName);

//Advanced Technique
//Immutable JS
//create a shallow copy and operate in it
//ES6
//.map, .filter, .reduce, .every, .some
console.log("................");
persons.map((persons)=>showName(persons)); */

//Write a function to sort the array by age in ascending order
const persons=[
    {name:"Rame", age: 20},
    {name:"Shyame", age: 10},
    {name:"Harie", age: 15}
];

const newAr=persons.sort((a,b)=>a.age-b.age);
console.log(newAr)

