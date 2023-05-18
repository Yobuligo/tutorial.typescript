/**
 * SetTimeout is a function, which can be used to set a timer and whenever that timer is passed, the provided function is called.
 * The provided function is called asynchronously.
 */

namespace SetTimeout {
  setTimeout(() => {
    console.log("This code runs after 1000 ms");
  }, 1000);
}
