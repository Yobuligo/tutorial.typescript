"use strict";
/**
 * To write more readable code the nullish coalescing operator is used.
 * But sometimes there is no alternative which can be returned. Instead an exception (throw new Error()) should be executed.
 * Nevertheless it is not possible to call ?? throw new Error(). Instead throw new Error has to be extracted in a separate function.
 * But what if a method expects a return parameter? The new 'raiseException' method has no valid return parameter. So instead it is required to use 'never' as return parameter.
 */
var NullishCoalescing;
(function (NullishCoalescing) {
    /**
     * The ValueContainer takes any value which might be null or undefined
     */
    var ValueContainer = /** @class */ (function () {
        function ValueContainer(value) {
            this.value = value;
        }
        ValueContainer.prototype.fetch = function () {
            return this.value;
        };
        return ValueContainer;
    }());
    /**
     * The ValueProvider provides a value. It ensures that a value is provided, otherwise an exception is raised
     */
    var ValueProvider = /** @class */ (function () {
        function ValueProvider(valueContainer) {
            this.valueContainer = valueContainer;
        }
        /**
         * Provides the value from the value container. If the fetch method return undefined an exception is thrown instead.
         * But it wont be possible to throw the exception directly as the keyword 'throw' is no valid expression here, like the following code shows:
         *      return this.valueContainer.fetch() ?? throw new Error(``);
         *
         * Instead we provide a separate method 'raiseException'. But as this exception hasn't the correct returning type <T> the complier would complain because <T> is ensured.
         * To solve this problem the method raiseException has to return type 'never'.
         */
        ValueProvider.prototype.provide = function () {
            var _a;
            return (_a = this.valueContainer.fetch()) !== null && _a !== void 0 ? _a : this.raiseException();
        };
        /**
         * Returns type 'never' to show, it will never return a valid value
         */
        ValueProvider.prototype.raiseException = function () {
            throw new Error("Raising Exception out of the nullish coalescing operator, as fetch hasn't returned a valid value.");
        };
        return ValueProvider;
    }());
    var Person = /** @class */ (function () {
        function Person() {
            this.firstname = "Stacey";
        }
        return Person;
    }());
    var valueContainer = new ValueContainer();
    var valueProvider = new ValueProvider(valueContainer);
    valueProvider.provide().firstname;
})(NullishCoalescing || (NullishCoalescing = {}));
//# sourceMappingURL=app.js.map