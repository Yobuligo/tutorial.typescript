namespace Playground {
  class MyError extends Error {}

  class Test {
    private onSuccess() {
      throw new MyError();
    }

    onEvent() {
      this.checkValue(2);
    }

    private checkValue(myNumber: number) {
      switch (myNumber) {
        case 2: {
          this.onSuccess();
          break;
        }
        default: {
          console.log("Do nothing");
        }
      }
    }
  }

  class Test2 {
    call() {
      try {
        new Test().onEvent();
      } catch (error) {
        debugger;
      }
    }
  }

  new Test2().call();
}
