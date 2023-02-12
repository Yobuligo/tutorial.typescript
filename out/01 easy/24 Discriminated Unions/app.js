// An approach some kind of workaround for the reason that interface are no real types in javascript.
// Instead any interface gets a property e.g. type or whatever.
// Later we use an intersection type to combine multiple interfaces.
// To differ the interface (either IBird or IHorse) the property type is read, which is available for both interfaces.
// So it is possible to access in a type safe way either the property flyingSpeed for IBird or runningSpeed for IHorse.
// It is even interesting that "bird" and "horse" are suggested in the switch statement by the compiler.
function getSpeed(object) {
    switch (object.type) {
        case "bird":
            return object.flyingSpeed;
        case "horse":
            return object.runningSpeed;
        default:
            return 0;
    }
}
// Discriminated Union Object with enumeration
var Medium;
(function (Medium) {
    Medium[Medium["BOOK"] = 0] = "BOOK";
    Medium[Medium["PC"] = 1] = "PC";
    Medium[Medium["TV"] = 2] = "TV";
})(Medium || (Medium = {}));
var evaluateMedium = function (medium) {
    switch (medium.type) {
        case Medium.BOOK: {
            console.log("Access type safe ".concat(medium.pages));
            break;
        }
        case Medium.PC: {
            console.log("Access type safe ".concat(medium.url));
            break;
        }
        case Medium.TV: {
            console.log("Access type safe ".concat(medium.channel));
            break;
        }
    }
};
//# sourceMappingURL=app.js.map