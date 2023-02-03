

const selectEnumProp = <T extends object>(type: T) => {
  for (let propName in type){
    console.log(`Property ${propName}`)
  }
};

selectEnumProp(State)

// selectEnumProp(State)

// for (let prop in State) {
//   const propName = State[prop];
//   console.log(`PropertyName is ${propName}`);
// }
