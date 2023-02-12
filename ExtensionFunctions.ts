export {};

declare global {
  interface Array<T> {
    apply(block: (list: Array<T>) => void): Array<T>;
  }

  interface String {
    ifNotEmpty(block: (value: string) => void): void;    
  }

  interface Boolean {
    ifTrue(block: () => void): void;
    ifFalse(block: () => void): void;
  }
}

Array.prototype.apply = function (block) {
  block(this);
  return this;
};

String.prototype.ifNotEmpty = function (block: (value: string) => void): void {
  if (this != "") {
    block(this.toString());
  }
};

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
