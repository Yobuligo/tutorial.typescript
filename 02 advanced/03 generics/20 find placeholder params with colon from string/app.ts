/**
 * Like in express, we sometimes have routes, like also in React, when navigating between pages.
 * These routes sometimes needs to be filled with params. E.g. the Route /persons/<id>
 * should display a React component which shows the person with id <id>.
 * We define these Routes at a central point, but during that time, we don't have the id,
 * which can be filled during runtime.
 *
 * Here comes, how the placeholder can be get from a string, so that it can be filled later when it is used.
 */

namespace FindPlaceholderParamsWithColonFromString {
  /**
   * What we need is a complex typing, which get the placeholders from a string
   */
  type IsParameter<Part> = Part extends `:${infer ParamName}`
    ? ParamName
    : never;
  type FilteredParts<Path> = Path extends `${infer PartA}/${infer PartB}`
    ? IsParameter<PartA> | FilteredParts<PartB>
    : IsParameter<Path>;
  type RouteParams<Path> = { [P in FilteredParts<Path>]: string };

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
  class ParamRoute<TPath extends string> implements IParamRoute<TPath> {
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
      return new ParamRoute(path) as RouteType<TPath>;
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
