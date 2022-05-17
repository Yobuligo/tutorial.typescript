// An approach some kind of workaround for the reason that interface are no real types in javascript.
// Instead any interface gets a property e.g. type or whatever.
// Later we use a intersection type to combine multiple interfaces.
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
//# sourceMappingURL=app.js.map