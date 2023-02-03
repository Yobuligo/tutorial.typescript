abstract class Super {
  static writePath<T>(this: new () => T) {
    const constructor = this as any;
    if (constructor.path !== undefined) {
      console.log(`the path is ${constructor.path}`);
    } else {
      console.log(`the class has no path, use the default one`);
    }
  }
}

class Sub extends Super {
  static path: string = "/person"
}

Sub.writePath()
