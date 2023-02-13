"use strict";
/**
 * In TypeScript it is possible to set a default Generic Type
 */
var RowData = /** @class */ (function () {
    function RowData() {
        this.value = "";
    }
    return RowData;
}());
function fetchData(rowData) {
    return rowData;
}
// even so no type information is provided, although it is needed in fetchData, I can access the prop value as [RowData] is a default Generic Type
var anything = fetchData({ value: "Row Data Value" });
anything.value;
//# sourceMappingURL=app.js.map