/**
 * Class that contains a value of any type
 */
var ValueContainer = /** @class */ (function () {
    function ValueContainer() {
    }
    return ValueContainer;
}());
/**
 * Next to generics for classes and interfaces we can have generics for functions.
 * This means the generic type is only known while calling that function. But not after initializing the corresponding class.
 *
 * This class is responsible for creating ValueContainers
 */
var ValueContainerFactory = /** @class */ (function () {
    function ValueContainerFactory() {
    }
    // Creates a ValueContainer. As the valueContainer needs a generic type information we have to provide it.
    // Here we provide it via the function 'create'
    ValueContainerFactory.prototype.create = function () {
        return new ValueContainer();
    };
    return ValueContainerFactory;
}());
// when creating the factory there is no need to provide any generics type information
var valueContainerFactory = new ValueContainerFactory();
var valueContainerString = valueContainerFactory.create();
// Thanks the generics information given to the create function of the valueContainerFactory we know instance must be of type 'string'
// and I only can provide strings but not e.g. numbers
valueContainerString.instance = "My String";
//# sourceMappingURL=app.js.map