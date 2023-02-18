/**
 * It is even possible to use a function as generic constraint.
 */

class Executor<T extends (index: number) => void> {
  constructor(private block: T) {}

  execute(): void {
    this.block(123);
  }
}
