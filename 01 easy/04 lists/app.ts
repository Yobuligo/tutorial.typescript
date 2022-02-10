// creates a list of string elements and sets values
let numbers = ["one", "two", "three"];

// list entries "one", "two", "three" (keyword OF)
for (let i of numbers) {
  console.log(i);
}

// lists index 1, 2, 3 of 'numbers' (keyword IN)
for (let i in numbers) {
  console.log(i);
}

// list entries "one", "two", "three"
numbers.forEach((entry) => {
  console.log(entry);
});
