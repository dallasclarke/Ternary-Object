//1.
const person = [{ name: "Jill" }, { name: "" }, { name: "Bob" }];
//create a function 'greeting' that maps through the array.
// Use a ternary.
// If there is a name it should say 'Hello <name>' otherwise it should say,
// 'Hello Stranger'.
function greeting(people) {
  return people.map((person) => {
    
    return (person.name) === "" ? 'Hello stranger' : `Hello ${person.name}`;
  })
}
console.log(greeting(person))




//2.
///Create a function that uses ternary to decide whether the person can drive
// If they are below 15 then log 'cannot drive', if they are 15 then log 'can drive with a parent', if they are 16 or above then 'yes they can drive'
const drivers = [{age: 12}, {age:15}, {age:22}];

function canDrive(person) { console.log(person);
  const result = (person.age < 15 ? 'cannot drive' : person.age === 15 ? 'can drive with a parent' : 'yes they can drive')
  console.log(result);
  return result;
}
// Doing the console.log so quokka returns the result in terminal.
console.log(canDrive(drivers[0]));
console.log (canDrive(drivers[1]));
console.log (canDrive(drivers[2]));




//3.
// create a variable speedMessage that has a value resulting from a ternary
// if the speed equals 70 it should say '70 is the perfect speed'
// if the speed is greater than or equal to 90 it should say 'Are you trying to get us killed'
// if the speed is less than 50 it should have the value 'Faster please'
// if speed is less than 10 it should say you should not drive
// create a variable allowableSpeed that sets a speed based on the range of numbers that are left. so...if allowableSpeed is set to a number in that range your default output should be `<speed> is a decent speed`
// ---
let speed = 78;
const speedMessage = (speed === 70) 
? '70 is the perfect speed' 
: speed >= 90 
? 'Are you trying to get us killed' 
: speed < 50 
? 'Faster please'
: speed < 10
? 'you should not drive'
: `${speed} is a decent speed.`
  
  console.log(speedMessage);

//4. 
// map through an array and if the value is greater than 50 it goes in the arr1
//if the array is less than 50 it goes in arr2
// if the value is a string arr3
//floating point numbers should only have 2 decimal places with the exact numbers not rounded
//use ternary
// use an array method BUT do not return a data structure when you iterate through your items.
// OUTPUT:
//[ 445, 4555 ][ 22, 33.99, 1, 44.98 ] [ 'peaches', 'apple' ]
let arr = [
    'peaches',
    444.7,
    22,
    undefined,
    33.99999,
    null,
    1,
    'apple',
    4555,
    undefined,
    NaN,
    44.98999,
  ]
 
  let arr1 = []
  let arr2 = []
  let arr3 = []
  function fixed(val) {
    return val % 1 === 0 ? val : parseFloat(val.toString().split('.').map((c, i) => i === 1 ? c.substring(0, 2) : c).join('.'))
  }
  arr.forEach(val => {
    let result = typeof(val) === 'string' 
    ? arr3.push(val) 
    : typeof(val) === 'number' 
    ? val > 50 
    ? arr1.push(fixed(val)) 
    : val < 50 ? arr2.push(fixed(val)) 
    : null 
    : null
      return result;
    // console.log(typeof(val))
  })
  console.log(arr1)
  console.log(arr2)
  console.log(arr3)
  // console.log(parseFloat(444.7));
  
  
  
  
// Object Methods:
// 5.//Use object methods to solve problem
// Write a method that doubles the price of each item in the prices object and place those values in a new object called priceDoubler
let prices = {
  cigarettes: 5.99,
  coke: { lg: 2.99, sm: 1.99 },
  chips: 2.79,
};

function doubled(price) {
  const itemPrices = Object.entries(price);
  console.log(itemPrices);
  
  }) 
  
}
console.log(doubled(prices))
