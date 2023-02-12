/**
 * In TypeScript it is possible to set a default Generic Type
 */
var RowData = /** @class */ (function () {
    function RowData() {
    }
    return RowData;
}());
function fetchData() {
    return;
}
// even so no type information is provided, although it is needed in fetchData, I can access the prop value as [RowData] is a default Generic Type
var anything = fetchData();
anything.value;
//# sourceMappingURL=app.js.map