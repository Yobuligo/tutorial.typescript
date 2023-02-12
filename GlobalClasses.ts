export class Pair<A, B> {
  constructor(public first: A, public second: B) {}
}

export class Triple<A, B, C> {
  constructor(public first: A, public second: B, public third: C) {}
}

/**
 * An implementation of this interface is responsible administer an instance which should be initialized lazily
 */
export interface ILazy<T> {
  readonly initialized: Boolean;
  instance: T;
}

/**
 * This class is responsible for initializing and administer an object lazily
 */
export class Lazy<T> implements ILazy<T> {
  private _instance?: T = undefined;

  constructor(private instanceInitializer: () => T) {}

  public get initialized(): Boolean {
    return this._instance === undefined;
  }

  public get instance(): T {
    if (this._instance === undefined) {
      this._instance = this.instanceInitializer();
    }
    return this._instance;
  }

  public set instance(value: T) {
    this._instance = value;
  }
}

export class KClass<T> {
  constructor(public readonly name: string) {}
}
