"use strict";
/**
 * A simple ORM to access data especially from firebase.
 *
 * How to create an instance?
 *    const orm = new ORM("<firebase_database_url>")
 *
 * To use the ORM the data class has to extend DataObject.
 *    class Animal extends DataObject {
 *        name: string = "Elephant";
 *        age: number = 12;
 *    }
 *
 * CRUD operations can be made via a DataObject class.
 *    Persist or update an instance
 *        const animal = new Animal();
 *        Animal.save(animal);
 *
 *    Load instances
 *        const animals = Animal.findAll();
 *
 *    Delete instances
 *        Animal.delete(animal);
 *
 * Each DataObject class has additional help methods
 *
 * Endpoints
 *    The endpoints are derived from the DataObject-Class. E.g. for the DataObject class Animal the endpoint would be /animal
 *
 * To give an alternative endpoint the static property "path" can be provided by the new path
 *    class Animal extends DataObject {
 *        static path: string = "/myAnimals";
 *        name: string = "Elephant";
 *        age: number = 12;
 *    }
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class DataObjectMeta {
    constructor(type) {
        this.type = type;
        this.props = [];
        const dummy = new type();
        for (let propName in dummy) {
            const propType = typeof dummy[propName];
            this.props.push({ name: propName, type: propType });
        }
    }
}
exports.DataObjectMeta = DataObjectMeta;
class UUIdProviderDefault {
    constructor(orm) {
        this.orm = orm;
    }
    next() {
        return __awaiter(this, void 0, void 0, function* () {
            let idPool = yield this.getIdPool();
            if (idPool === undefined) {
                idPool = yield this.resetIdPool();
            }
            else {
                idPool.uuid++;
                yield this.updateIdPool(idPool);
            }
            return idPool.uuid;
        });
    }
    getPath() {
        return `${this.orm.URL}/uuid.json`;
    }
    getIdPool() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = this.getPath();
            const response = yield fetch(path);
            const json = yield response.json();
            if (json !== undefined && json !== null) {
                return Object.assign({}, json);
            }
            else {
                return undefined;
            }
        });
    }
    updateIdPool(idPool) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = this.getPath();
            yield fetch(path, {
                method: "PUT",
                body: JSON.stringify(idPool),
                headers: { "content-type": "application/JSON" },
            });
        });
    }
    resetIdPool() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = this.getPath();
            const idPool = { uuid: 1 };
            fetch(path, {
                method: "PATCH",
                headers: { "content-type": "application/JSON" },
                body: JSON.stringify(idPool),
            });
            return idPool;
        });
    }
}
class DataAccessObjectRepositoryDefault {
    constructor(orm) {
        this.orm = orm;
        this.dataAccessObjectRegistry = new Map();
    }
    fetch(type) {
        const dataAccessObject = this.dataAccessObjectRegistry.get(type);
        if (dataAccessObject === undefined) {
            const dataAccessObject = new DataAccessObject(type, this.orm);
            this.dataAccessObjectRegistry.set(type, dataAccessObject);
            return dataAccessObject;
        }
        else {
            return dataAccessObject;
        }
    }
}
let DataAccessObjectRepository;
class ORM {
    constructor(URL) {
        this.URL = URL;
        DataAccessObjectRepository = new DataAccessObjectRepositoryDefault(this);
    }
    getIdProvider() {
        return new UUIdProviderDefault(this);
    }
}
exports.ORM = ORM;
class DataObject {
    constructor() {
        this.id = 0;
    }
    static contains(dataObject) {
        return __awaiter(this, void 0, void 0, function* () {
            const dataAccessObject = DataAccessObjectRepository.fetch(this);
            return yield dataAccessObject.contains(dataObject);
        });
    }
    static count() {
        return __awaiter(this, void 0, void 0, function* () {
            const dataAccessObject = DataAccessObjectRepository.fetch(this);
            return yield dataAccessObject.count();
        });
    }
    static delete(dataObject) {
        return __awaiter(this, void 0, void 0, function* () {
            const dataAccessObject = DataAccessObjectRepository.fetch(this);
            return yield dataAccessObject.delete(dataObject);
        });
    }
    static deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const dataAccessObject = DataAccessObjectRepository.fetch(this);
            yield dataAccessObject.deleteAll();
        });
    }
    static findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const dataAccessObject = DataAccessObjectRepository.fetch(this);
            return yield dataAccessObject.findAll();
        });
    }
    static findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const dataAccessObject = DataAccessObjectRepository.fetch(this);
            return yield dataAccessObject.findById(id);
        });
    }
    static first() {
        return __awaiter(this, void 0, void 0, function* () {
            const dataAccessObject = DataAccessObjectRepository.fetch(this);
            return yield dataAccessObject.first();
        });
    }
    static isEmpty() {
        return __awaiter(this, void 0, void 0, function* () {
            const dataAccessObject = DataAccessObjectRepository.fetch(this);
            return yield dataAccessObject.isEmpty();
        });
    }
    static isNotEmpty() {
        return __awaiter(this, void 0, void 0, function* () {
            const dataAccessObject = DataAccessObjectRepository.fetch(this);
            return yield dataAccessObject.isNotEmpty();
        });
    }
    static last() {
        return __awaiter(this, void 0, void 0, function* () {
            const dataAccessObject = DataAccessObjectRepository.fetch(this);
            return yield dataAccessObject.last();
        });
    }
    static save(dataObject) {
        return __awaiter(this, void 0, void 0, function* () {
            const dataAccessObject = DataAccessObjectRepository.fetch(this);
            return yield dataAccessObject.save(dataObject);
        });
    }
}
exports.DataObject = DataObject;
class DataAccessObject {
    constructor(type, orm) {
        this.type = type;
        this.orm = orm;
        this.needsInitPath = true;
        this.path = "";
        this.dataObjects = [];
    }
    contains(dataObject) {
        return __awaiter(this, void 0, void 0, function* () {
            if ((yield this.findById(dataObject.id)) !== undefined) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    count() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.findAll()).length;
        });
    }
    delete(dataObject) {
        return __awaiter(this, void 0, void 0, function* () {
            const dataObjects = yield this.findAll();
            const toBeDeleted = dataObjects.find((value) => {
                return value.id === dataObject.id;
            });
            if (!toBeDeleted) {
                return dataObject;
            }
            const index = dataObjects.indexOf(toBeDeleted);
            dataObjects.splice(index, 1);
            yield this.sync();
            return dataObject;
        });
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            yield fetch(this.getJSONPath(), {
                method: "DELETE",
            });
            this.dataObjects = [];
            return;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `${this.getJSONPath()}`;
            const response = yield fetch(path);
            const json = yield response.json();
            this.dataObjects = [];
            for (let prop in json) {
                const row = json[prop];
                const dataObject = this.convertJSONtoEntity(row);
                this.dataObjects.push(dataObject);
            }
            return this.dataObjects;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const dataObjects = yield this.findAll();
            return dataObjects.find((dataObject) => {
                return dataObject.id === id;
            });
        });
    }
    first() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.findAll())[0];
        });
    }
    isEmpty() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.findAll()).length === 0;
        });
    }
    isNotEmpty() {
        return __awaiter(this, void 0, void 0, function* () {
            return !(yield this.isEmpty());
        });
    }
    last() {
        return __awaiter(this, void 0, void 0, function* () {
            const dataObjects = yield this.findAll();
            if (dataObjects.length > 0) {
                return dataObjects[dataObjects.length - 1];
            }
            else {
                return undefined;
            }
        });
    }
    save(dataObject) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.dataObjects.indexOf(dataObject);
            if (index !== -1) {
                yield this.update(dataObject);
            }
            else {
                yield this.findAll();
                dataObject.id = yield this.orm.getIdProvider().next();
                this.dataObjects.push(dataObject);
                yield this.sync();
            }
            return dataObject;
        });
    }
    update(dataObject) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.sync();
            return dataObject;
        });
    }
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
            fetch(this.getJSONPath(), {
                method: "PUT",
                headers: { "content-type": "application/JSON" },
                body: JSON.stringify(this.dataObjects),
            });
        });
    }
    getPath() {
        if (this.needsInitPath) {
            this.initPath();
            this.needsInitPath = false;
        }
        return this.path;
    }
    initPath() {
        const type = this.type;
        const path = type["path"];
        if (path !== undefined) {
            this.path = path;
            if (this.path.startsWith("/")) {
                this.path.substring(1, this.path.length);
            }
        }
        else {
            this.path = this.type.name.toLowerCase();
        }
    }
    getJSONPath() {
        return `${this.orm.URL}/${this.getPath()}.json`;
    }
    convertJSONtoEntity(data) {
        return Object.assign({}, data);
    }
}
//# sourceMappingURL=app.js.map