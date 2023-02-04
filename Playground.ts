type Test<T> = {
  row: {
    origin?: T;
  };
};

function getData(): Test<{ systemId: number }> {
  return { row: {} };
}

const data = getData();

const result = data.row.origin.systemId + 123;
