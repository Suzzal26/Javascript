/* function convertTemperature(value, unit = 'C') {
  // Default unit is Celsius ('C')
  if (unit.toUpperCase() === 'C') {
    const fahrenheit = (value * 9 / 5) + 32;
    return `${value} Celsius is ${fahrenheit} Fahrenheit`;
  } else if (unit.toUpperCase() === 'F') {
    const celsius = (value - 32) * 5 / 9;
    return `${value} Fahrenheit is ${celsius} Celsius`;
  } else {
    return 'Invalid unit. Please use "C" for Celsius or "F" for Fahrenheit.';
  }
}

// Example usage
const temperature1 = 25;
const temperature2 = 77;

console.log(convertTemperature(temperature1));
console.log(convertTemperature(temperature2, 'F')); */

/* const convertTemperature = (value, unit = 'C') => {
  // Convert unit to uppercase without using .toUpperCase()
  const uppercaseUnit = unit === 'c' ? 'C' : unit === 'f' ? 'F' : unit;

  // Default unit is Celsius ('C')
  switch (uppercaseUnit) {
    case 'C':
      const fahrenheit = (value * 9 / 5) + 32;
      return `${value} Celsius is ${fahrenheit} Fahrenheit`;
    case 'F':
      const celsius = (value - 32) * 5 / 9;
      return `${value} Fahrenheit is ${celsius} Celsius`;
    default:
      return 'Invalid unit. Please use "C" for Celsius or "F" for Fahrenheit.';
  }
};

// Example usage
const temperature1 = 25;
const temperature2 = 77;

console.log(convertTemperature(temperature1));
console.log(convertTemperature(temperature2, 'F')); */


/* const calculateOperation = (num1, num2, operation = 'multiply') => {
  if (operation === 'multiply') {
    return num1 * num2;
  } else if (operation === 'divide') {
    if (num2 !== 0) {
      return num1 / num2;
    } else {
      return 'Cannot divide by zero';
    }
  } else {
    return 'Invalid operation. Please use "multiply" or "divide".';
  }
};

// Example usage
const resultMultiply = calculateOperation(5, 3, 'multiply');
const resultDivide = calculateOperation(10, 2, 'divide');

console.log(`Result of multiplication: ${resultMultiply}`);
console.log(`Result of division: ${resultDivide}`); */

/* const persons = [
  { name: "Rame", age: 20 },
  { name: "Shyame", age: 21 },
  { name: "Harie", age: 22 }
];

function sortByAgeAscending(personsArray) {
  // Use the sort() method to sort by age in ascending order
  personsArray.sort((a, b) => a.age - b.age);

  return personsArray;
}

// Call the function
const sortedPersons = sortByAgeAscending(persons);

// Display the sorted array
console.log(sortedPersons);
 */



/* const persons = [
  { name: "Rame", age: 20 },
  { name: "Shyame", age: 21 },
  { name: "Harie", age: 22 }
];

function sortByAgeAscending(personsArray) {
  // Use the sort() method with a comparator function
  personsArray.sort(function (a, b) {
    // Compare the "age" property of objects a and b
    return a.age - b.age;
  });

  return personsArray;
}

// Call the function and store the result in a new array
const sortedPersons = sortByAgeAscending(persons);

// Display the sorted array
console.log(sortedPersons); */

const persons = [
    { name: "Rame", age: 20 },
    { name: "Shyame", age: 21 },
    { name: "Harie", age: 22 }
];

persons.sort((person1, person2) => person1.age - person2.age);

console.log(persons);



