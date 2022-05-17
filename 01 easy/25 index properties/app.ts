// The index property is a possibility to save a list of elements in an array without the need to define which attributes are required.
// Attributes can be dynamically

interface IErrorContainer {
  [prop: string]: string;
}

// implement an object of the interface type and add various attributes
const errorContainer: IErrorContainer = {
  email: "mail@gmail.com",
  code: "ErrorCode",
};
