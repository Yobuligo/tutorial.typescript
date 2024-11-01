namespace Playground {
  /**
   * This type returns true, if {@link TPart} contains a parameter, whose value can be injected during runtime, otherwise false.
   *
   * A parameter is identified by a starting colon like :id, otherwise it is identified as a common string.
   */
  type IsParameter<TPart extends string> = TPart extends `:${infer ParamName}`
    ? ParamName
    : never;

  /**
   * This type represents a union type which contains all extracted parameter names from the given {@link TPath}.
   *
   * E.g.: /projects/:projectId/system/:systemId becomes "projectId" | "systemId".
   */
  type FilteredParts<TPath extends string> =
    TPath extends `${infer TPartA}/${infer TPartB}`
      ? IsParameter<TPartA> | FilteredParts<TPartB>
      : IsParameter<TPath>;

  /**
   * This type represents an object type, that contains a property for each parameter of the given {@link TPath}.
   * It is required for providing values of type string for the parameters of {@link TPath}.
   *
   * @example
   * type MyType = RouteParams<"/projects/:projectId/system/:systemId">;
   * type EqualTo = {
   *   projectId: string,
   *   systemId: string,
   * };
   */
  type RouteParams<TPath extends string> = {
    [P in FilteredParts<TPath>]: string;
  };

  /**
   * An implementation of this interface represents any route. A route is expressed by a string like:
   * - /project
   * - /project/:projectId
   */
  interface IRoute<TPath extends string> {
    /**
     * Returns the original route including placeholders like :id.
     */
    readonly origin: TPath;
  }

  /**
   * An implementation of this interface represents a static route for path {@link TPath}. A static route contains no parameters.
   */
  interface IStaticRoute<TPath extends string> extends IRoute<TPath> {
    /**
     * Returns the path {@link TPath} of this route, which means in this case {@link IRoute.origin}.
     * This method is required for polymorphic calls.
     */
    toPath(): string;
  }

  /**
   * An implementation of this interface represents a route for path {@link TPath} that contains parameter(s) like:
   * - /project/:projectId
   * - /project/:projectId/system/:systemId
   */
  interface IParamRoute<TPath extends string> extends IRoute<TPath> {
    /**
     * Returns the path {@link TPath} of this route, whose parameters are filled by the given {@link params} values.
     */
    toPath<TParams extends RouteParams<TPath>>(params: TParams): string;
  }

  /**
   * This class represents a static route for path {@link TPath}.
   */
  class StaticRoute<TPath extends string> implements IStaticRoute<TPath> {
    constructor(readonly origin: TPath) {}

    toPath(): string {
      return this.origin;
    }
  }

  /**
   * This class represents a route having parameter(s).
   */
  class ParamRoute<TPath extends string> implements IParamRoute<TPath> {
    constructor(readonly origin: TPath) {}

    /**
     * This method converts the origin {@link TPath} to a path whose parameters are filled by {@link params} values and returns it.
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
   * This type represents a {@link IStaticRoute} if the given {@link TPath} contains no parameters, 
   * otherwise {@link IParamRoute} if {@link TPath} contains parameters.
   */
  type RouteType<TPath extends string> =
    TPath extends `${infer _Prefix}:${infer _Param}${infer _Suffix}`
      ? IParamRoute<TPath>
      : IStaticRoute<TPath>;

  /**
   * This function is responsible for creating instances if type {@link IRoute}.
   * If the given {@link path} contains no parameters it creates a route of type {@link IStaticRoute}, otherwise {@link IParamRoute}.
   */
  const route = <TPath extends string>(path: TPath): RouteType<TPath> => {
    if (path.includes(":")) {
      return new ParamRoute(path) as RouteType<TPath>;
    } else {
      return new StaticRoute(path) as RouteType<TPath>;
    }
  };

  /**
   * This type represents an object type that can contain of routes of type {@link IRoute}.
   * It is used to define routes in a typesafe way.
   */
  type RoutesConfig = { [key: string]: IRoute<any> };

  /**
   * This function is required to create an object using the given {@link config} which contains routes of type {@link IRoute}.
   * This config can be used to access the routes in a typesafe way. 
   * The goal is to have the route paths defined as literals only at one central point, this config.
   */
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
