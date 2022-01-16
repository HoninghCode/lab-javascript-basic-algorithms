console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = 'Eric';
let hacker2 = 'Superman';
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} else {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

let driversNameCapitals = [];


// Iteration 3: Loops
for (let i = 0; i < hacker1.length; i++) {
  driversNameCapitals.push(hacker1[i].split());
}

driversNameCapitals.push(driversNameCapitals.join(' '));

const lastArray = driversNameCapitals[driversNameCapitals.length - 1];
console.log(lastArray.toUpperCase());

function reverse(name) {
  return name.split('').reverse().join('');
}
reverse(hacker2);