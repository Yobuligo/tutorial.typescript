import { KClass } from "../../../GlobalClasses";

/**
 * An implementation of that interface represents any product
 */
interface IProduct {
  name: string;
  price: number;
}

/**
 * An implementation of that interface is responsible for creating product instances
 */
interface IProductFactory<T extends IProduct> {
  create(type: KClass<T>): T;
}

/**
 * An implementation of that interface is responsible for creating a product instance of a specific type
 * and in addition to initialize product attributes by specific functions (setName, setPrice)
 * For creating the product instance a specific productFactory should be used.
 * As the product factory must fit to the product that should be created, the generics type for product has to be provided to the factory
 * So when defining the generics type for the factory we have to provide the generic type for the product '<P, F extends IProductFactory<P>>.
 * P is the type of the product and F is of type of the product factory
 */
interface IProductBuilder {
  setName(name: string): IProductBuilder;
  setPrice(price: number): IProductBuilder;
  build<P extends IProduct, F extends IProductFactory<P>>(productFactory: F): P;
}
