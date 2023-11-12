namespace Playground {
  export type Decorator = Function;

  class DecoratorInfoDefault {
    private decorations: Map<Constructor<any>, Map<Decorator, any>> = new Map();

    delete(type: Constructor<any>, decorator: Decorator) {
      this.decorations.get(type)?.delete(decorator);
    }

    find<TDecorator extends Decorator, T extends Destructuring<TDecorator>>(
      type: Constructor<any>,
      decorator: TDecorator
    ): T | undefined {
      const decoration = this.decorations.get(type);

      return decoration?.get(decorator);
    }

    introduce<T>(type: Constructor<any>, decorator: Decorator, value: T) {
      const decoration =
        this.decorations.get(type) ?? new Map<Decorator, any>();
      decoration.set(decorator, value);
      this.decorations.set(type, decoration);
    }

    has(type: Constructor<any>, decorator: Decorator): boolean {
      return this.find(type, decorator) !== undefined;
    }
  }

  export const DecoratorInfo = new DecoratorInfoDefault();

  type Destructuring<T> = T extends (...args: infer P) => any ? P : never;

  function Loader(path: string, second: number) {}

  type Parameters<T> = T extends (...args: infer P) => any ? P : never;

  function caller<
    TDecorator extends (...args: any[]) => any,
    T extends Parameters<TDecorator>
  >(func: TDecorator): T {
    return {} as T;
  }

  const myTuple: [firstname: string, age: number] = ["Stacey", 28];

  class Test {}

  type T0 = string[];

  type UnpackedArray<T> = T extends (infer U)[] ? U : T;
  type U0 = UnpackedArray<T0>; // string

  const test: UnpackedArray<["12", 12, 13]> = {} as UnpackedArray<
    ["12", 12, 13]
  >;
}
