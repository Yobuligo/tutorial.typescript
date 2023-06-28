const measureTimeMillis = (block: () => void): number => {
  const startTime = new Date();
  block();
  const endTime = new Date();
  return endTime.getMilliseconds() - startTime.getMilliseconds();
};

const repeat = (times: number, block: () => void) => {
  for (let i = 0; i < times; i++) {
    block();
  }
};

function* getId() {
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
}

class IdGeneratorDefault {
  private cursor = 0;
  next() {
    this.cursor++;
    return this.cursor;
  }
}

const IdGenerator = new IdGeneratorDefault()

const duration = measureTimeMillis(() =>
  repeat(1000000, () => {
    // getId();
    IdGenerator.next()
  })
);

console.log(duration);
