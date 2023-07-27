/**
 * Sometimes I want to create a new object, that contains of a dynamic number of entries. Index Properties is a really nice concept for it.
 * But in addition sometimes I want to get the type of each dynamic added value.
 * Here comes how to solve this
 *
 * Imagine, we have columns. Each column can have a specific type (string, number, date, etc.).
 * Each column can be rendered and therefore I want to provide the specific value of the column type safe to that renderer.
 * Although I want to have that indexed properties spelling but not a function, where I have to provide the key to get the value (see example below)
 *
 * Belongs to "Index Properties / index property / index properties / Indexable type" (see easy -> basics)
 */

namespace TypeSafeIndexProperties {
  interface IColumn<T> {
    name?: string;
    renderer?: (value: T) => void;
  }

  interface IPerson {
    age: number;
    firstname: string;
  }

  // Old approach
  // We provide a Configurer
  // The configurer has a method config. To handle the config type safe, we have to provide the column name and the type is derived from the column name
  // I always have to provide a function that is implemented (see buildColumnsOld function). And I have to provide the property as literal, which might lead to errors.
  interface IConfigurer<T> {
    config<K extends keyof T>(name: K, config: IColumn<T[K]>): void;
  }

  const buildColumnsOld = <T>(
    data: T[],
    configurer: (configurer: IConfigurer<T>) => void
  ) => {};

  buildColumnsOld<IPerson>([], (configurer) => {
    configurer.config("age", { renderer: (value) => {} });
  });

  // New approach
  // Provide a index property type and each row of that type knows it exact type
  // The config is more readable. I don't need an additional object.
  type IColumnConfig<T> = { [K in keyof T]?: IColumn<T[K]> };
  const buildColumns = <T>(data: T[], config: IColumnConfig<T>) => {};

  buildColumns<IPerson>([], { age: { renderer: (value) => {} } });
}
