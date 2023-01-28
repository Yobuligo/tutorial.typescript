/**
 * in TypeScript it is not even necessary to provide a generic type if not required.
 * Let's assume there is a parameter which is optional but when it is provided it is not clear of which type it is.
 * Here the optional generic type can be useful.
 */
class ProductPerson {
}
/**
 * Here an instance of a 'ProductPerson' is created. But here is not need to provide any settings. So even the settings generic type can be omit.
 */
class ProductPersonFactory {
    create(settings) {
        return new ProductPerson();
    }
}
class ProductCar {
    constructor(name, constructionYear) {
        this.name = name;
    }
}
/**
 * Here an instance of 'ProductCar' is created. The required settings a type safe provided.
 */
class ProductCarFactory {
    create(settings) {
        return new ProductCar(settings.name, settings.constructionYear);
    }
}
//# sourceMappingURL=app.js.map