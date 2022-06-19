/**
 * Test your code here before moving it into a concrete chapter
 */

class HttpApplication<T> {
  context: T;
  constructor(context: T) {
    this.context = context;
  }

  // ... implementation

  get(url: string, handler: (context: T) => Promise<void>): this {
    return this;
  }
}

const context = { someValue: true };
const app = new HttpApplication(context);

app.get("/api", async (myContext) => {
  console.log(myContext.someValue);
});
