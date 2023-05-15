/**
 * In TypeScript it is possible to load functions only if it is required.
 * E.g. a user clicks on a button and enters a specific area where additional functions or data are required.
 * Then it is possible to load those data on demand and to not load them initially. Which could be important to reduce the load of a webpage.
 *
 * Therefore the function import can be used followed by the name of the file which should be imported. Consider that it is an async function
 */

document.addEventListener("click", async () => {
  const loadedFile = await import("./MyFunction");
  const myNumber: number = loadedFile.ReturnNumber();
});
