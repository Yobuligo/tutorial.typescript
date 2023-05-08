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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataObject = exports.ORM = exports.DataObjectMeta = void 0;
var DataObjectMeta = /** @class */ (function () {
    function DataObjectMeta(type) {
        this.type = type;
        this.props = [];
        var dummy = new type();
        for (var propName in dummy) {
            var propType = typeof dummy[propName];
            this.props.push({ name: propName, type: propType });
        }
    }
    return DataObjectMeta;
}());
exports.DataObjectMeta = DataObjectMeta;
var UUIdProviderDefault = /** @class */ (function () {
    function UUIdProviderDefault(orm) {
        this.orm = orm;
    }
    UUIdProviderDefault.prototype.next = function () {
        return __awaiter(this, void 0, void 0, function () {
            var idPool;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getIdPool()];
                    case 1:
                        idPool = _a.sent();
                        if (!(idPool === undefined)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.resetIdPool()];
                    case 2:
                        idPool = _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        idPool.uuid++;
                        return [4 /*yield*/, this.updateIdPool(idPool)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/, idPool.uuid];
                }
            });
        });
    };
    UUIdProviderDefault.prototype.getPath = function () {
        return "".concat(this.orm.URL, "/uuid.json");
    };
    UUIdProviderDefault.prototype.getIdPool = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath();
                        return [4 /*yield*/, fetch(path)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        if (json !== undefined && json !== null) {
                            return [2 /*return*/, __assign({}, json)];
                        }
                        else {
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UUIdProviderDefault.prototype.updateIdPool = function (idPool) {
        return __awaiter(this, void 0, void 0, function () {
            var path;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath();
                        return [4 /*yield*/, fetch(path, {
                                method: "PUT",
                                body: JSON.stringify(idPool),
                                headers: { "content-type": "application/JSON" },
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UUIdProviderDefault.prototype.resetIdPool = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, idPool;
            return __generator(this, function (_a) {
                path = this.getPath();
                idPool = { uuid: 1 };
                fetch(path, {
                    method: "PATCH",
                    headers: { "content-type": "application/JSON" },
                    body: JSON.stringify(idPool),
                });
                return [2 /*return*/, idPool];
            });
        });
    };
    return UUIdProviderDefault;
}());
var DataAccessObjectRepositoryDefault = /** @class */ (function () {
    function DataAccessObjectRepositoryDefault(orm) {
        this.orm = orm;
        this.dataAccessObjectRegistry = new Map();
    }
    DataAccessObjectRepositoryDefault.prototype.fetch = function (type) {
        var dataAccessObject = this.dataAccessObjectRegistry.get(type);
        if (dataAccessObject === undefined) {
            var dataAccessObject_1 = new DataAccessObject(type, this.orm);
            this.dataAccessObjectRegistry.set(type, dataAccessObject_1);
            return dataAccessObject_1;
        }
        else {
            return dataAccessObject;
        }
    };
    return DataAccessObjectRepositoryDefault;
}());
var DataAccessObjectRepository;
var ORM = /** @class */ (function () {
    function ORM(URL) {
        this.URL = URL;
        DataAccessObjectRepository = new DataAccessObjectRepositoryDefault(this);
    }
    ORM.prototype.getIdProvider = function () {
        return new UUIdProviderDefault(this);
    };
    return ORM;
}());
exports.ORM = ORM;
var DataObject = /** @class */ (function () {
    function DataObject() {
        this.id = 0;
    }
    DataObject.contains = function (dataObject) {
        return __awaiter(this, void 0, void 0, function () {
            var dataAccessObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dataAccessObject = DataAccessObjectRepository.fetch(this);
                        return [4 /*yield*/, dataAccessObject.contains(dataObject)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DataObject.count = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dataAccessObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dataAccessObject = DataAccessObjectRepository.fetch(this);
                        return [4 /*yield*/, dataAccessObject.count()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DataObject.delete = function (dataObject) {
        return __awaiter(this, void 0, void 0, function () {
            var dataAccessObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dataAccessObject = DataAccessObjectRepository.fetch(this);
                        return [4 /*yield*/, dataAccessObject.delete(dataObject)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DataObject.deleteAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dataAccessObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dataAccessObject = DataAccessObjectRepository.fetch(this);
                        return [4 /*yield*/, dataAccessObject.deleteAll()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DataObject.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dataAccessObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dataAccessObject = DataAccessObjectRepository.fetch(this);
                        return [4 /*yield*/, dataAccessObject.findAll()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DataObject.findById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var dataAccessObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dataAccessObject = DataAccessObjectRepository.fetch(this);
                        return [4 /*yield*/, dataAccessObject.findById(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DataObject.first = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dataAccessObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dataAccessObject = DataAccessObjectRepository.fetch(this);
                        return [4 /*yield*/, dataAccessObject.first()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DataObject.isEmpty = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dataAccessObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dataAccessObject = DataAccessObjectRepository.fetch(this);
                        return [4 /*yield*/, dataAccessObject.isEmpty()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DataObject.isNotEmpty = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dataAccessObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dataAccessObject = DataAccessObjectRepository.fetch(this);
                        return [4 /*yield*/, dataAccessObject.isNotEmpty()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DataObject.last = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dataAccessObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dataAccessObject = DataAccessObjectRepository.fetch(this);
                        return [4 /*yield*/, dataAccessObject.last()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DataObject.save = function (dataObject) {
        return __awaiter(this, void 0, void 0, function () {
            var dataAccessObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dataAccessObject = DataAccessObjectRepository.fetch(this);
                        return [4 /*yield*/, dataAccessObject.save(dataObject)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return DataObject;
}());
exports.DataObject = DataObject;
var DataAccessObject = /** @class */ (function () {
    function DataAccessObject(type, orm) {
        this.type = type;
        this.orm = orm;
        this.needsInitPath = true;
        this.path = "";
        this.dataObjects = [];
    }
    DataAccessObject.prototype.contains = function (dataObject) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findById(dataObject.id)];
                    case 1:
                        if ((_a.sent()) !== undefined) {
                            return [2 /*return*/, true];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DataAccessObject.prototype.count = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findAll()];
                    case 1: return [2 /*return*/, (_a.sent()).length];
                }
            });
        });
    };
    DataAccessObject.prototype.delete = function (dataObject) {
        return __awaiter(this, void 0, void 0, function () {
            var dataObjects, toBeDeleted, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findAll()];
                    case 1:
                        dataObjects = _a.sent();
                        toBeDeleted = dataObjects.find(function (value) {
                            return value.id === dataObject.id;
                        });
                        if (!toBeDeleted) {
                            return [2 /*return*/, dataObject];
                        }
                        index = dataObjects.indexOf(toBeDeleted);
                        dataObjects.splice(index, 1);
                        return [4 /*yield*/, this.sync()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, dataObject];
                }
            });
        });
    };
    DataAccessObject.prototype.deleteAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(this.getJSONPath(), {
                            method: "DELETE",
                        })];
                    case 1:
                        _a.sent();
                        this.dataObjects = [];
                        return [2 /*return*/];
                }
            });
        });
    };
    DataAccessObject.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, response, json, prop, row, dataObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = "".concat(this.getJSONPath());
                        return [4 /*yield*/, fetch(path)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        this.dataObjects = [];
                        for (prop in json) {
                            row = json[prop];
                            dataObject = this.convertJSONtoEntity(row);
                            this.dataObjects.push(dataObject);
                        }
                        return [2 /*return*/, this.dataObjects];
                }
            });
        });
    };
    DataAccessObject.prototype.findById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var dataObjects;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findAll()];
                    case 1:
                        dataObjects = _a.sent();
                        return [2 /*return*/, dataObjects.find(function (dataObject) {
                                return dataObject.id === id;
                            })];
                }
            });
        });
    };
    DataAccessObject.prototype.first = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findAll()];
                    case 1: return [2 /*return*/, (_a.sent())[0]];
                }
            });
        });
    };
    DataAccessObject.prototype.isEmpty = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findAll()];
                    case 1: return [2 /*return*/, (_a.sent()).length === 0];
                }
            });
        });
    };
    DataAccessObject.prototype.isNotEmpty = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isEmpty()];
                    case 1: return [2 /*return*/, !(_a.sent())];
                }
            });
        });
    };
    DataAccessObject.prototype.last = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dataObjects;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findAll()];
                    case 1:
                        dataObjects = _a.sent();
                        if (dataObjects.length > 0) {
                            return [2 /*return*/, dataObjects[dataObjects.length - 1]];
                        }
                        else {
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DataAccessObject.prototype.save = function (dataObject) {
        return __awaiter(this, void 0, void 0, function () {
            var index, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        index = this.dataObjects.indexOf(dataObject);
                        if (!(index !== -1)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.update(dataObject)];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 6];
                    case 2: return [4 /*yield*/, this.findAll()];
                    case 3:
                        _b.sent();
                        _a = dataObject;
                        return [4 /*yield*/, this.orm.getIdProvider().next()];
                    case 4:
                        _a.id = _b.sent();
                        this.dataObjects.push(dataObject);
                        return [4 /*yield*/, this.sync()];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6: return [2 /*return*/, dataObject];
                }
            });
        });
    };
    DataAccessObject.prototype.update = function (dataObject) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sync()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, dataObject];
                }
            });
        });
    };
    DataAccessObject.prototype.sync = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                fetch(this.getJSONPath(), {
                    method: "PUT",
                    headers: { "content-type": "application/JSON" },
                    body: JSON.stringify(this.dataObjects),
                });
                return [2 /*return*/];
            });
        });
    };
    DataAccessObject.prototype.getPath = function () {
        if (this.needsInitPath) {
            this.initPath();
            this.needsInitPath = false;
        }
        return this.path;
    };
    DataAccessObject.prototype.initPath = function () {
        var type = this.type;
        var path = type["path"];
        if (path !== undefined) {
            this.path = path;
            if (this.path.startsWith("/")) {
                this.path.substring(1, this.path.length);
            }
        }
        else {
            this.path = this.type.name.toLowerCase();
        }
    };
    DataAccessObject.prototype.getJSONPath = function () {
        return "".concat(this.orm.URL, "/").concat(this.getPath(), ".json");
    };
    DataAccessObject.prototype.convertJSONtoEntity = function (data) {
        return __assign({}, data);
    };
    return DataAccessObject;
}());
//# sourceMappingURL=app.js.map