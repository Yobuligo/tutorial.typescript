var TextProvider = /** @class */ (function () {
    function TextProvider() {
    }
    TextProvider.prototype.getText = function () {
        return "Text provided via separate class implementation";
    };
    return TextProvider;
}());
var TextPrinter = /** @class */ (function () {
    function TextPrinter() {
    }
    TextPrinter.prototype.print = function (textProvider) {
        console.log(textProvider.getText());
    };
    return TextPrinter;
}());
new TextPrinter().print(new TextProvider());
new TextPrinter().print({
    getText: function () {
        return "Text provided via inline class implementation";
    },
});
//# sourceMappingURL=app.js.map