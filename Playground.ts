interface ILoader {
  load(): void;
}

const Path = <T>(path: string) => {
  return (target: T) => {
    (target as any).path = path;
  };
};

@Path("/contracts")
class FirstLoader implements ILoader {
  load(): void {
    throw new Error("Method not implemented.");
  }
}

@Path("/products")
class SecondLoader implements ILoader {
  load(): void {
    throw new Error("Method not implemented.");
  }
}

type LoaderConstructor = new () => ILoader;

class LoaderRepo {
  private loaders: LoaderConstructor[] = [];
  constructor(...loaders: LoaderConstructor[]) {
    this.loaders = loaders;
  }

  printPaths() {
    this.loaders.forEach((loader) => {
      console.log((loader as any).path);
    });
  }
}

const loaderRepo = new LoaderRepo(FirstLoader, SecondLoader);
loaderRepo.printPaths();
