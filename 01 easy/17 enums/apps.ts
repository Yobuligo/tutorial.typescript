// Declares an enumeration with name 'Gender'
// An enum contains all possible assignable values of a type.
// The values are some kind of constants which can be used in the code.
// An enum centralizes the values at a specific point (the enum itself).
// This makes it easy to add a new value and the type itself can be assigned to variables.
enum Gender {
  MALE,
  FEMALE,
}

// Initializes a variable with name 'gender' of enum type 'Gender'. 'Gender.FEMALE' set the initial value
let gender: Gender = Gender.FEMALE;

// assigns another value to variable 'gender'
gender = Gender.MALE;

// Declares another enumeration.
// Normally each value gets a number assigned from 1 to x (depending on the amount of values).
// In this example the number is assigned manually
enum DeviceType {
  MOBILE_PHONE = 123,
  TV = 987,
  PC = 1345,
}

// The usage is equal to enumerations where numbers are assigned automatically.
let deviceType = DeviceType.MOBILE_PHONE;
deviceType = DeviceType.PC;
