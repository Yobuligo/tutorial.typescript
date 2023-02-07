/**
 * In TypeScript it is possible to set a default Generic Type
 */

class RowData {
  value: string;
}

function fetchData<T = RowData>(): T {
  return;
}

// even so no type information is provided, although it is needed in fetchData, I can access the prop value as [RowData] is a default Generic Type
const anything = fetchData();
anything.value;
