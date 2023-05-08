"use strict";
// Promises provides a asynchronous execution of actions
// E.g. in web application there is a need to wait for REST-results or database operations.
// To not stop the whole application these actions (REST-Calls and DB-Operations) are executed asynchronous.
//
// A Promise is an object that represents an action whose execution time is unknown / unspecific. So it could take only some few ms, some seconds or even minutes, etc.
// So a Promise is some kind of proxy. The execution happens asynchronous.
// But anyway Promises are asynchronous but not multithreading. Which means if the asynchronous actions contains a heavy calculation the application stops during the calculation.
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
// Subscription (registration of a promise result):
// A Promise execution can have two results. The execution could be:
//      1. successful
//      2. faulty
// A Promise provides two higher order functions to access the result of the asynchronous executed action. One function for success and one for failure.
// This means if the execution ends it calls back the provided callback functions for either success or failure. These are the following functions:
//      1. then( () => { // this callback function is called in case of a successful execution } )
//      2. catch( () => { // this callback function is called in case of a failed execution  })
//
// Chaining promises:
// When returning a value within the then statement, it means that is returns another Promise which can be retrieved.
//
// the function "fetch" for sending REST-Calls is a asynchronous function. The function then is called when the fetch succeeds and the catch function when it fails
fetch("")
    .then(function (response) {
    // REST-call was successful. Analyze the response and proceed with mapping the response e.g. from JSON to data objects.
})
    .catch(function (reason) {
    // REST-call failed. Print the reason, throw an error ...
});
var myNewPromise = new Promise(function (resolve, reject) {
    // Do some stuff
    if ("stuff is okay") {
        resolve({
            id: 1,
            text: "Provide the Promise result in form of this object",
        });
    }
    else {
        reject("Provide e.g. an error message if the execution of the Promise failed");
    }
});
// wrap the Promise in a function for an easier usage.
function provideData() {
    // instead of returning the variable "myNewPromise" the Promise could be implemented directly in this function
    return myNewPromise;
}
// use the function
provideData()
    .then(function (data) {
    console.log("My Promise was successful and the data were provided.");
})
    .catch(function (reason) {
    console.log("My Promise failed and a reason was provided.");
});
// Async-Await
// Async and await are keywords which should simplify the usage of promises.
// Functions can be declared as async / asynchronous which means it returns a Promise. Which means on an async function it is possible to call then() and catch().
// Async function are automatically wrapped with a Promise. There is no need to provide a Promise instance by yourself. Instead it is done by the framework.
// Await is a keyword that ensures that the execution of an async function must be finished until the next code statement is executed. So the result is not the Promise but the result of the execution.
// Await can only be used in async functions
function findById() {
    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); });
}
// Thanks to the keyword async the function findById directly returns a Promise instance and I can call then and catch
findById()
    .then(function () { })
    .catch(function () { });
// Thanks to the keyword async there is no need to create an instance of Promise within the async function. Instead I can directly return the data (here of type IData).
// A Promise instance will be surrounded automatically.
function findAll() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, [{ id: 1, text: "Text" }]];
        });
    });
}
findAll().then(function (data) { });
// Thanks to await I don't have to provide a callback function to then or catch. I directly get the result of the Promise if it "arrives".
function deleteAll() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, findAll()];
                case 1:
                    data = _a.sent();
                    // this code only runs if the Promise which is returned by findAll returns a result and the result is not the Promise but instead the result are the data itself.
                    data.forEach(function (entry) {
                        console.log("Needs to delete the data entry ".concat(entry.id, " ").concat(entry.text));
                    });
                    return [2 /*return*/];
            }
        });
    });
}
// Promise.all
// Promise.all is a function that also provides a Promise. But this Promise contains of other Promises. And only if all of these Promises are are completed or the first is rejected,
// the function then or catch is called.
var myPromiseAll = Promise.all([findById(), findAll(), deleteAll()])
    .then(function (value) {
    // value is an array which contains the result of all 3 Promises
})
    .catch(function (reason) {
    // The execution of at least one Promise failed
});
// Here an example to await the result of several Promises.
function awaitPromiseAll() {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all([findById(), findAll(), deleteAll()])];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// Chaining promises
var stackedPromises = function (value) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, value];
    });
}); };
// by returning a value within a "then" statement another Promise is returned which has the type of the return value. So it is possible to chain promises.
stackedPromises(123)
    .then(function (value) {
    return value;
})
    .then(function (value) {
    console.log("The 'value' is still 123 ".concat(value, "."));
});
//# sourceMappingURL=app.js.map