namespace Playground {
  /**
   * This type returns true, if {@link TPart} contains a parameter, otherwise false.
   */
  type IsParameter<TPart> = TPart extends `:${infer ParamName}`
    ? ParamName
    : never;

  /**
   * This type represents a union type which contains all extracted parameters from the given type {@link TPath}.
   */
  type FilteredParts<TPath> = TPath extends `${infer TPartA}/${infer TPartB}`
    ? IsParameter<TPartA> | FilteredParts<TPartB>
    : IsParameter<TPath>;

  type RouteParams<TPath> = { [P in FilteredParts<TPath>]: string };

  /**
   * Here we have a general interface that represents any route, which has a origin path.
   */
  interface IRoute<TPath extends string> {
    readonly origin: TPath;
  }

  /**
   * And here we have a static route, which means it has no parameters. It extends {@link IRoute}.
   * It has a method toPath, which doesn't need any parameters
   */
  interface IStaticRoute<TPath extends string> extends IRoute<TPath> {
    /**
     * Returns the path
     */
    toPath(): string;
  }

  /**
   * And here we have the specific route, which has parameters, which must be filled. It extends {@link IRoute}.
   */
  interface IParamRoute<TPath extends string> extends IRoute<TPath> {
    /**
     * Returns the path filled by the given {@link params}.
     */
    toPath<TParams extends RouteParams<TPath>>(params: TParams): string;
  }

  /**
   * Now we need a class for each type of Route
   * The static route directly return the origin path
   */
  class StaticRoute<TPath extends string> implements IStaticRoute<TPath> {
    constructor(readonly origin: TPath) {}

    toPath(): string {
      return this.origin;
    }
  }

  /**
   * And here comes the implementation for the Route with parameters
   */
  class DynamicRoute<TPath extends string> implements IParamRoute<TPath> {
    constructor(readonly origin: TPath) {}

    /**
     * This methods converts the origin path by filling placeholders, which starts with a colon
     */
    toPath<TParams extends RouteParams<TPath>>(params: TParams): string {
      let path: string = this.origin;
      for (const propName in params) {
        path = path.replaceAll(`:${propName}`, params[propName]);
      }
      return path;
    }
  }

  /**
   * This type represents any route type, static or with parameters
   */
  type RouteType<TPath extends string> =
    TPath extends `${infer _Prefix}:${infer _Param}${infer _Suffix}`
      ? IParamRoute<TPath>
      : IStaticRoute<TPath>;

  /**
   * To create routes we provide a function that returns the correct route type depending on the given path.
   * It decides from the path, if the path is a static one or a path with parameters.
   */
  const route = <TPath extends string>(path: TPath): RouteType<TPath> => {
    if (path.includes(":")) {
      return new DynamicRoute(path) as RouteType<TPath>;
    } else {
      return new StaticRoute(path) as RouteType<TPath>;
    }
  };

  /**
   * Now we can define several routes. Therefore we provide a configure method to get the Route type safe.
   */
  type RoutesConfig = { [key: string]: IRoute<any> };
  export const configure = <TRouteConfig extends RoutesConfig>(
    config: TRouteConfig
  ): TRouteConfig => {
    return config;
  };

  /**
   * Next we can provide our Routes by our configure function.
   * It would even be nicer if we only had to provide the path and the configure function returns an object with converts the path to objects of type Route.
   * I tested it out, but here we lose the string itself, which means we are not able to get the parameter back
   */
  const Routes = configure({
    home: route("/"),
    persons: route("/persons/:id"),
    personImage: route("/persons/:id/image"),
  });

  /**
   * And finally we can either access the origin path or we can convert it to a new path which contains the placeholder values
   */
  Routes.home.origin;
  Routes.home.toPath();
  Routes.persons.origin;
  Routes.persons.toPath({ id: "1234567" });
  Routes.personImage.toPath({ id: "" });
}
