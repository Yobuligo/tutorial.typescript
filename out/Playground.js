/**
 * The following code shows an example of how to implement a ServiceProvider in TypeScript
 */
/**
 * This enum is contains the two possible types how a service can be instantiated. Either as singleton or multiple, which means for each request a new service instance is created.
 */
var ServiceInstanceType;
(function (ServiceInstanceType) {
    ServiceInstanceType[ServiceInstanceType["SINGLE_INSTANTIABLE"] = 0] = "SINGLE_INSTANTIABLE";
    ServiceInstanceType[ServiceInstanceType["MULTI_INSTANTIABLE"] = 1] = "MULTI_INSTANTIABLE";
})(ServiceInstanceType || (ServiceInstanceType = {}));
/**
 * As in TypeScript interfaces are only a type which exists during design time but not at runtime, it is not possible write code like SP.fetch<IServiceName>().
 * The generics type <IServiceName> couldn't be analyzed. So it is necessary to have a concrete service type.
 * So there must be a class which connects the Service, which might only be an interface with a concrete type that can be provided to the service provider.
 * Therefore for each service a separate class has to be provided which is inherited from @class {Service}. The parameter @param {T} contains the general service type.
 */
class Service {
    constructor() {
        this.instance = {};
    }
}
class ServiceProvider {
    constructor() {
        this.serviceDefinitions = [];
    }
    contains(abstractServiceType) {
        return this.findServiceDefinition(abstractServiceType) !== undefined;
    }
    fetch(abstractServiceType) {
        const service = this.fetchOrNull(abstractServiceType);
        if (service !== undefined) {
            return service;
        }
        throw new Error(`Error while fetching service '${abstractServiceType.name}'. Service is unknown. Register the service or put it to the service provider.`);
    }
    fetchOrNull(abstractServiceType) {
        const serviceDefinition = this.findServiceDefinition(abstractServiceType);
        if (serviceDefinition === undefined) {
            return;
        }
        switch (serviceDefinition.serviceInstanceType) {
            case ServiceInstanceType.SINGLE_INSTANTIABLE: {
                return this.fetchSingleInstantiableService(serviceDefinition);
            }
            case ServiceInstanceType.MULTI_INSTANTIABLE: {
                return this.createService(serviceDefinition);
            }
            default: {
                throw new Error(`Error while fetching service ${abstractServiceType.name}. ServiceInstanceType ${serviceDefinition.serviceInstanceType} is unknown.`);
            }
        }
    }
    put(abstractServiceType, service) {
        this.findServiceDefinition(abstractServiceType);
        const serviceDefinition = {
            abstractServiceType: abstractServiceType,
            serviceInstanceType: ServiceInstanceType.SINGLE_INSTANTIABLE,
            service: service,
        };
        this.addServiceDefinition(serviceDefinition);
    }
    remove(abstractServiceType) {
        const index = this.serviceDefinitions.findIndex((serviceDefinition) => {
            return serviceDefinition.abstractServiceType === abstractServiceType;
        });
        if (index === -1) {
            return;
        }
        this.serviceDefinitions.splice(index, 1);
    }
    register(abstractServiceType, concreteServiceType, serviceInstanceType) {
        const serviceDefinition = {
            abstractServiceType: abstractServiceType,
            concreteServiceType: concreteServiceType,
            serviceInstanceType: serviceInstanceType,
        };
        this.addServiceDefinition(serviceDefinition);
    }
    findServiceDefinition(abstractServiceType) {
        return this.serviceDefinitions.find((serviceDefinition) => {
            return serviceDefinition.abstractServiceType === abstractServiceType;
        });
    }
    addServiceDefinition(serviceDefinition) {
        if (this.contains(serviceDefinition.abstractServiceType)) {
            this.remove(serviceDefinition.abstractServiceType);
        }
        this.serviceDefinitions.push(serviceDefinition);
    }
    fetchSingleInstantiableService(serviceDefinition) {
        if (serviceDefinition.service === undefined) {
            serviceDefinition.service = this.createService(serviceDefinition);
        }
        return serviceDefinition.service;
    }
    createService(serviceDefinition) {
        if (serviceDefinition.concreteServiceType === undefined) {
            return undefined;
        }
        return new serviceDefinition.concreteServiceType();
    }
}
class LoggerService extends Service {
}
class Logger {
    log(message) {
        console.log(message);
    }
}
const serviceProvider = new ServiceProvider();
serviceProvider.register(LoggerService, Logger, ServiceInstanceType.SINGLE_INSTANTIABLE);
const logger = serviceProvider.fetch(LoggerService);
logger.log(`Test`);
serviceProvider.contains(LoggerService);
serviceProvider.fetchOrNull(LoggerService) ? .log(`Test`) : ;
serviceProvider.remove(LoggerService);
//# sourceMappingURL=Playground.js.map