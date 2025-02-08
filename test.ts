namespace Demo {
  enum Node {
    First = "First",
    Second = "Second",
  }

  enum Edge {
    Third = "Third",
    Fourth = "Fourth",
  }

  class First {
    firstname = "Stacey";
  }

  class Second {
    lastname = "Starfish";
  }

  class Third {
    age = 28;
  }

  class Fourth {
    single = false;
  }

  type Config = {
    [Node.First]: First;
    [Node.Second]: Second;
    [Edge.Third]: Third;
    [Edge.Fourth]: Fourth;
  };

  const configure = <T extends keyof Config, R extends Config[T]>(
    type: T,
    builder: () => R
  ): R => {
    return builder();
  };

  configure(Node.Second, () => {
    return new Second();
  });
}
