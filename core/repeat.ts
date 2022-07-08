export function repeat(times: number, block: (it: number) => void) {
  for (let i = 0; i < times; i++) {
    block(i);
  }
}
