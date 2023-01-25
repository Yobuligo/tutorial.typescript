// Rest operator: The rest operator is related to the spread operator. It can be used for variables which are then converted to an array
// the following example shows the variable 'args' which is converted to an array
// e.g. it is possible to call methods, which are only available on arrays
function convertToArray(...args) {
  return args.filter((element) => {
    element === "Test";
  });
}

// With the rest operator it is possible to create a copy of an object and exclude specific properties
const cat = {
  name: "Chase",
  type: "cat",
  color: "black",
};

// will create a new object 'newCat' from 'cat' as template without copying the prop 'type'
const { type, ...newCat } = cat;
// Property type isn't available on 'newCat'
// newCat.type
