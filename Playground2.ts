namespace Playground2 {
  type IsParameter<Part> = Part extends `:${infer ParamName}`
    ? ParamName
    : never;

  type FilteredParts<Path> = Path extends `${infer PartA}/${infer PartB}`
    ? IsParameter<PartA> | FilteredParts<PartB>
    : IsParameter<Path>;

  /**
   * This type represents RouteParams, depending on the corresponding {@link Path}.
   */
  type RouteParams<Path> = { [P in FilteredParts<Path>]: string };

  interface IRoute<TPath extends string> {
    readonly origin: TPath;
  }

  interface IStaticRoute<TPath extends string> extends IRoute<TPath> {
    toPath(): string;
  }

  interface IParamRoute<TPath extends string> extends IRoute<TPath> {
    toPath<TParams extends RouteParams<TPath>>(params: TParams): string;
  }

  //   class Route<TPath extends string> {
  //     constructor(readonly origin: TPath) {}

  //     toPath(params: RouteParams<TPath>): string {
  //       return "";
  //     }
  //   }

  //   class SimpleRoute<T extends string> {
  //     constructor(readonly origin: T) {}
  //     toPath(): string {
  //       return "";
  //     }
  //   }

  const route = <T extends string>(
    path: T
  ): T extends `${infer _Prefix}:${infer _PathName}${infer _Suffix}`
    ? IParamRoute<T>
    : IStaticRoute<T> => {
    throw new Error();
  };

  const contract = route("/contracts/:contractId");
  contract.toPath({ contractId: "" });

  const contracts = route("/contracts");
  contracts.toPath();
}
