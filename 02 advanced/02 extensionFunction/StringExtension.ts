// 'export' is required to provide the ability to import the extension function(s) in other files (see app.ts)
export {};

// The following code declares the extension function ifNotEmpty for the type String
// By using 'declare global' the extension is provided globally
declare global {
  interface String {
    ifNotEmpty(block: (value: String) => void): void;
  }
}

// The following code assigns a concrete function to the declared extension function
// To provide an extension function, it has to be assigned to the declaration which is accessible via String.prototype.*
String.prototype.ifNotEmpty = function (block: (value: String) => void): void {
  if (this != "") {
    block(this);
  }
};
