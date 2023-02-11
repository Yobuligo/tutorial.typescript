var MyService;
(function (MyService) {
    MyService[MyService["DAO"] = 0] = "DAO";
    MyService[MyService["FACTORY"] = 1] = "FACTORY";
})(MyService || (MyService = {}));
class AnyFactory {
    create() {
        throw new Error("Method not implemented.");
    }
}
class Logger {
    log(message) {
        throw new Error("Method not implemented.");
    }
}
class ServiceProvider {
    constructor() {
        this.services = [];
    }
    add(type, service) {
        this.services.push({ type: type, service: service });
    }
    register(type, instanceType) {
        // this.services.push({ type: type, service: service });
    }
    fetch(type) {
        return this.services.find((serviceRegistration) => {
            return serviceRegistration.type === type;
        });
    }
}
const serviceProvider = new ServiceProvider();
const anyFactory = serviceProvider.fetch("IAnyFactory");
serviceProvider.register("IAnyFactory", AnyFactory);
const logger = serviceProvider.fetch("ILogger");
//# sourceMappingURL=Playground.js.map