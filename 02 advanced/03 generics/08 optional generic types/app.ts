/**
 * in TypeScript it is not even necessary to provide a generic type if not required.
 * Let's assume there is a parameter which is optional but when it is provided it is not clear of which type it is.
 * Here the optional generic type can be useful.
 */

/**
 * Here a product 'TProduct' is created by a factory. It is a generic factory.
 * In case there are any settings required to create an object, these settings can be provided via parameter settings of type 'TSettings'.
 */
interface IFactory<TProduct, TSettings = {}> {
  create(settings?: TSettings): TProduct;
}

class ProductPerson {
  firstname: string = "";
  lastname: string = "";
}

/**
 * Here an instance of a 'ProductPerson' is created. But here is not need to provide any settings. So even the settings generic type can be omit.
 */
class ProductPersonFactory implements IFactory<ProductPerson> {
  create(settings?: {}): ProductPerson {
    return new ProductPerson();
  }
}

class ProductCar {
  constructor(public name: string, constructionYear: number) {}
}

interface IProductCarSettings {
  name: string;
  constructionYear: number;
}

/**
 * Here an instance of 'ProductCar' is created. The required settings a type safe provided.
 */
class ProductCarFactory implements IFactory<ProductCar, IProductCarSettings> {
  create(settings?: IProductCarSettings): ProductCar {
    const productCarSettings = settings ?? {
      name: "My name",
      constructionYear: 1950,
    };
    return new ProductCar(
      productCarSettings.name,
      productCarSettings.constructionYear
    );
  }
}
