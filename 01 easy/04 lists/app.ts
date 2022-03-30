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

// creates a tuple, a list with any number of elements of specific types and only these types.
let personList: [string, string, number][] = [];
personList.push(["Stacey", "Starfish", 20]);
personList.push(["Jimmy", "Jellyfish", 25]);
personList.forEach((entry) => {
  console.log(
    `My name is ${entry[0]} ${entry[1]}. I am ${entry[2]} years old.`
  );
});
