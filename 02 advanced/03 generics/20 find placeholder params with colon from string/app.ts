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
  type ParamValue<Key> = Key extends `...${infer Anything}` ? string[] : any;
  type RemovePrefixDots<Key> = Key extends `...${infer Name}` ? Name : Key;
  type Params<Path> = {
    [Key in FilteredParts<Path> as RemovePrefixDots<Key>]: ParamValue<Key>;
  };

  /**
   * Now we define a class, that represents a route
   */
  class Route<TParams extends string> {
    constructor(readonly origin: TParams) {}

    /**
     * This methods converts the origin path by filling placeholders
     */
    toPath(params: Params<TParams>): string {
      let path = this.origin;
      for (const propName in params) {
        path.replaceAll(`:${propName}`, (params as any)[propName]);
      }
      return path;
    }
  }

  /**
   * Now we can define several routes. Therefore we provide a configure method to get the Route type safe.
   */
  type RouteDefinition = { [key: string]: string };

  type RouteConfig<T extends RouteDefinition> = { [P in keyof T]: Route<T[P]> };

  export const configure = <TRouteDefinition extends RouteDefinition>(
    config: TRouteDefinition
  ): TRouteDefinition => {
    return config;
  };

  /**
   * Next we can provide our Routes by our configure function
   */
  const RoutesDefinition = configure({
    home: "/",
    persons: "/persons/:id",
    personImage: "/persons/:id/image",
  });

  type RouteDefinitionType = typeof RoutesDefinition;

  const Routes: RouteConfig<RouteDefinitionType> = { home: new Route("") };
}
