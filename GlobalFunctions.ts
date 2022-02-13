export function println(...data: any[]): void {
  console.log(...data);
}

export function TODO(message: string = "Not implemented exception") {
  throw new Error(message);
}
