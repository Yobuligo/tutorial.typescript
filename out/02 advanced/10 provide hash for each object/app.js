// Actually it is not possible to provide a hash to an object.
// But there is a workaround to add one dynamically
// Creates unique hash values
var HashGenerator = /** @class */ (function () {
    function HashGenerator() {
        this.index = -1;
    }
    HashGenerator.prototype.generate = function () {
        this.index++;
        return this.index.toString();
    };
    return HashGenerator;
}());
var IHashable = function () { };
IHashable.is = function (object) {
    return "hash" in object;
};
// object which has no attribute and neither a hash value
var AnyObject = /** @class */ (function () {
    function AnyObject() {
    }
    return AnyObject;
}());
// function to print hash value
function printHash(object) {
    if (!IHashable.is(object)) {
        console.log("Object is not hashable, so it has no hash");
    }
    else {
        console.log("Object has hash ".concat(object.hash));
    }
}
var hashGenerator = new HashGenerator();
var anyObject = new AnyObject();
printHash(anyObject);
// convert object to type any and set a hash value
var anyRef = anyObject;
anyRef.hash = hashGenerator.generate();
printHash(anyObject);
//# sourceMappingURL=app.js.map