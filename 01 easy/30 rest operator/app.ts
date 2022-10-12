// Rest operator: The rest operator is related to the spread operator. It can be used for variables which are then converted to an array
// the following example shows the variable 'args' which is converted to an array
// e.g. it is possible to call methods, which are only available on arrays
function convertToArray(...args) {
  args.filter(() => {});
}
