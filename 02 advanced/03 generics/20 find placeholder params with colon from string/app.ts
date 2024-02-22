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
  type Params<Path> = { [P in FilteredParts<Path>]: string };

  /**
   * Now we define a class, that represents a route
   */
  class Route<TRoutePath extends string> {
    constructor(readonly origin: TRoutePath) {}

    /**
     * This methods converts the origin path by filling placeholders, which starts with a colon
     */
    toPath<TRouteParams extends Params<TRoutePath>>(params: TRouteParams): string {
      let path = this.origin;
      for (const propName in params) {
        path.replaceAll(`:${propName}`, params[propName]);
      }
      return path;
    }
  }

  /**
   * Now we can define several routes. Therefore we provide a configure method to get the Route type safe.
   */
  type RoutesConfig = { [key: string]: Route<any> };
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
    home: new Route("/"),
    persons: new Route("/persons/:id"),
    personImage: new Route("/persons/:id/image"),
  });

  /**
   * And finally we can either access the origin path or we can convert it to a new path which contains the placeholder values
   */
  Routes.persons.toPath({ id: "1234567" });
  Routes.persons.origin;
}
