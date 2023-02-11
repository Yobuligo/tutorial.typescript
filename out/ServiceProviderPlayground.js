class AnyFactory2Service {
}
class AnyFactory2 {
    create() {
        console.log(`My Service Provider factory works`);
    }
}
class LoggerService {
}
class Logger2 {
    log() {
        console.log(`My Service Provider logger works`);
    }
}
class DAOService {
}
function fetch2(serviceType) {
    return;
}
class ServiceProvider123 {
    constructor() {
        this.services = new Map();
    }
    add(type, service) {
        this.services.set(type, service);
    }
    fetch(type) {
        return this.services.get(type);
    }
}
const sp = new ServiceProvider123();
const logger2 = new Logger2();
sp.add(LoggerService, logger2);
const anyFactory2 = new AnyFactory2();
sp.add(AnyFactory2Service, anyFactory2);
const logger123 = sp.fetch(LoggerService);
logger123.log();
sp.fetch(LoggerService).log();
sp.fetch(AnyFactory2Service).create();
sp.fetch(LoggerService).log();
sp.fetch(AnyFactory2Service).create();
//# sourceMappingURL=ServiceProviderPlayground.js.map