var EnumKeys;
(function (EnumKeys) {
    var Gender;
    (function (Gender) {
        Gender[Gender["Unknown"] = 0] = "Unknown";
        Gender[Gender["Male"] = 1] = "Male";
        Gender[Gender["Female"] = 2] = "Female";
    })(Gender || (Gender = {}));
    var elements = Object.keys(Gender).filter(function (element) { return !(parseInt(element) >= 0); });
    console.log(elements);
})(EnumKeys || (EnumKeys = {}));
