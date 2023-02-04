interface ILogger {
  [k: string]: (message: string, metaData: Record<string, unknown>) => void;
}

class Test {
  myFunction = () => {};
}
