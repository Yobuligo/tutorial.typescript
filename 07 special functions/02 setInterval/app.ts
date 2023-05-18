/**
 * The function setInterval is similar to setTimeout.
 * The difference is that setInterval the provided function to setInterval is not only called once, when the time ends but endless
 */

namespace SetInterval {
  setInterval(() => {
    console.log("This code runs endless in an interval of 1000ms");
  }, 1000);
}
