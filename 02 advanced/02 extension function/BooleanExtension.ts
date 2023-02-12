// 'export' is required to provide the ability to import the extension function(s) in other files (see app.ts)
export {};

// The following code declares the extension functions ifTrue and ifFalse for the type Boolean
// By using 'declare global' the extension is provided globally
declare global {
  interface Boolean {
    ifTrue(block: () => void): void;
    ifFalse(block: () => void): void;
  }
}

// The following code assigns a concrete function to the declared extension functions
// To provide an extension functions, they have to be assigned to the declaration which is accessible via Boolean.prototype.*
Boolean.prototype.ifTrue = function (block: () => void): void {
  if (this) {
    block();
  }
};

Boolean.prototype.ifFalse = function (block: () => void): void {
  if (!this) {
    block();
  }
};
