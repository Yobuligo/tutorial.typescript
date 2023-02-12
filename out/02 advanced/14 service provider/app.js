/**
 * The following code shows an example of how to implement a ServiceProvider in TypeScript
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
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
var Service = /** @class */ (function () {
    function Service() {
        this.instance = {};
    }
    return Service;
}());
var ServiceProvider = /** @class */ (function () {
    function ServiceProvider() {
        this.serviceDefinitions = [];
    }
    ServiceProvider.prototype.contains = function (abstractServiceType) {
        return this.findServiceDefinition(abstractServiceType) !== undefined;
    };
    ServiceProvider.prototype.fetch = function (abstractServiceType) {
        var service = this.fetchOrNull(abstractServiceType);
        if (service !== undefined) {
            return service;
        }
        throw new Error("Error while fetching service '".concat(abstractServiceType.name, "'. Service is unknown. Register the service or put it to the service provider."));
    };
    ServiceProvider.prototype.fetchOrNull = function (abstractServiceType) {
        var serviceDefinition = this.findServiceDefinition(abstractServiceType);
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
                throw new Error("Error while fetching service ".concat(abstractServiceType.name, ". ServiceInstanceType ").concat(serviceDefinition.serviceInstanceType, " is unknown."));
            }
        }
    };
    ServiceProvider.prototype.put = function (abstractServiceType, service) {
        this.findServiceDefinition(abstractServiceType);
        var serviceDefinition = {
            abstractServiceType: abstractServiceType,
            serviceInstanceType: ServiceInstanceType.SINGLE_INSTANTIABLE,
            service: service,
        };
        this.addServiceDefinition(serviceDefinition);
    };
    ServiceProvider.prototype.remove = function (abstractServiceType) {
        var index = this.serviceDefinitions.findIndex(function (serviceDefinition) {
            return serviceDefinition.abstractServiceType === abstractServiceType;
        });
        if (index === -1) {
            return;
        }
        this.serviceDefinitions.splice(index, 1);
    };
    ServiceProvider.prototype.register = function (abstractServiceType, concreteServiceType, serviceInstanceType) {
        var serviceDefinition = {
            abstractServiceType: abstractServiceType,
            concreteServiceType: concreteServiceType,
            serviceInstanceType: serviceInstanceType,
        };
        this.addServiceDefinition(serviceDefinition);
    };
    ServiceProvider.prototype.findServiceDefinition = function (abstractServiceType) {
        return this.serviceDefinitions.find(function (serviceDefinition) {
            return serviceDefinition.abstractServiceType === abstractServiceType;
        });
    };
    ServiceProvider.prototype.addServiceDefinition = function (serviceDefinition) {
        if (this.contains(serviceDefinition.abstractServiceType)) {
            this.remove(serviceDefinition.abstractServiceType);
        }
        this.serviceDefinitions.push(serviceDefinition);
    };
    ServiceProvider.prototype.fetchSingleInstantiableService = function (serviceDefinition) {
        if (serviceDefinition.service === undefined) {
            serviceDefinition.service = this.createService(serviceDefinition);
        }
        return serviceDefinition.service;
    };
    ServiceProvider.prototype.createService = function (serviceDefinition) {
        if (serviceDefinition.concreteServiceType === undefined) {
            return undefined;
        }
        return new serviceDefinition.concreteServiceType();
    };
    return ServiceProvider;
}());
var LoggerService = /** @class */ (function (_super) {
    __extends(LoggerService, _super);
    function LoggerService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LoggerService;
}(Service));
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.log = function (message) {
        console.log(message);
    };
    return Logger;
}());
var serviceProvider = new ServiceProvider();
serviceProvider.register(LoggerService, Logger, ServiceInstanceType.SINGLE_INSTANTIABLE);
var logger = serviceProvider.fetch(LoggerService);
logger.log("Test");
serviceProvider.contains(LoggerService);
(_a = serviceProvider.fetchOrNull(LoggerService)) === null || _a === void 0 ? void 0 : _a.log("Test");
serviceProvider.remove(LoggerService);
//# sourceMappingURL=app.js.map