// Promises provides a asynchronous execution of actions
// E.g. in web application there is a need to wait for REST-results or database operations.
// To not stop the whole application these actions (REST-Calls and DB-Operations) are executed asynchronous.
//
// A Promise is an object that represents an action whose execution time is unknown / unspecific. So it could take only some few ms, some seconds or even minutes, etc.
// So a Promise is some kind of proxy. The execution happens asynchronous.
// But anyway Promises are asynchronous but not multithreading. Which means if the asynchronous actions contains a heavy calculation the application stops during the calculation.

// Subscription (registration of a promise result):
// A Promise execution can have two results. The execution could be:
//      1. successful
//      2. faulty
// A Promise provides two higher order functions to access the result of the asynchronous executed action. One function for success and one for failure.
// This means if the execution ends it calls back the provided callback functions for either success or failure. These are the following functions:
//      1. then( () => { // this callback function is called in case of a successful execution } )
//      2. catch( () => { // this callback function is called in case of a failed execution  })
//
// the function "fetch" for sending REST-Calls is a asynchronous function. The function then is called when the fetch succeeds and the catch function when it fails

fetch("")
  .then((response) => {
    // REST-call was successful. Analyze the response and proceed with mapping the response e.g. from JSON to data objects.
  })
  .catch((reason) => {
    // REST-call failed. Print the reason, throw an error ...
  });

// Provide own Promises
// A provided Promise has two functions for raising success or failure.
//      1. resolve(<data>)      -> the function then((<data>) => {}) provides the <data> which are published by the function resolve
//      2. reject(<reason>)     -> the function catch((<reason>) => {}) provides the <reason> which are published by the function reject
//
// Provide a Promise and give the generic type of the data in case of success

interface IData {
  id: number;
  text: string;
}

const myNewPromise = new Promise<IData>((resolve, reject) => {
  // Do some stuff
  if ("stuff is okay") {
    resolve({
      id: 1,
      text: "Provide the Promise result in form of this object",
    });
  } else {
    reject(
      "Provide e.g. an error message if the execution of the Promise failed"
    );
  }
});

// wrap the Promise in a function for an easier usage.
function provideData(): Promise<IData> {
  // instead of returning the variable "myNewPromise" the Promise could be implemented directly in this function
  return myNewPromise;
}

// use the function
provideData()
  .then((data) => {
    console.log(`My Promise was successful and the data were provided.`);
  })
  .catch((reason) => {
    console.log(`My Promise failed and a reason was provided.`);
  });

// Async-Await
// Async and await are keywords which should simplify the usage of promises.
// Functions can be declared as async / asynchronous which means it returns a Promise. Which means on an async function it is possible to call then() and catch().
// Async function are automatically wrapped with a Promise. There is no need to provide a Promise instance by yourself. Instead it is done by the framework.
// Await is a keyword that ensures that the execution of an async function must be finished until the next code statement is executed. So the result is not the Promise but the result of the execution.
// Await can only be used in async functions

async function findById() {}

// Thanks to the keyword async the function findById directly returns a Promise instance and I can call then and catch
findById()
  .then(() => {})
  .catch(() => {});

// Thanks to the keyword async there is no need to create an instance of Promise within the async function. Instead I can directly return the data (here of type IData).
// A Promise instance will be surrounded automatically.
async function findAll(): Promise<IData[]> {
  return [{ id: 1, text: "Text" }];
}

findAll().then((data) => {});

// Thanks to await I don't have to provide a callback function to then or catch. I directly get the result of the Promise if it "arrives".
async function deleteAll() {
  const data = await findAll();

  // this code only runs if the Promise which is returned by findAll returns a result and the result is not the Promise but instead the result are the data itself.
  data.forEach((entry) => {
    console.log(`Needs to delete the data entry ${entry.id} ${entry.text}`);
  });
}

// Promise.all
// Promise.all is a function that also provides a Promise. But this Promise contains of other Promises. And only if all of these Promises are are completed or the first is rejected,
// the function then or catch is called.
const myPromiseAll = Promise.all([findById(), findAll(), deleteAll()])
  .then((value) => {
    // value is an array which contains the result of all 3 Promises
  })
  .catch((reason) => {
    // The execution of at least one Promise failed
  });

// Here an example to await the result of several Promises.
async function awaitPromiseAll() {
  const result = await Promise.all([findById(), findAll(), deleteAll()]);
}
