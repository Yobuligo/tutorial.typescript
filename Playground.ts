// Subscribe / Unsubscribe

type Handler = () => void;

namespace Subscribe {
  
  class Button {
    private handlers: Handler[] = [];

    onClick(handler: Handler): Handler {
      this.registerHandler(handler);
      return () => {
        this.unregisterHandler(handler);
      };
    }

    click() {
      this.handlers.forEach((handler) => handler());
    }

    private unregisterHandler(handler: Handler) {
      this.handlers.splice(
        this.handlers.findIndex((observer) => observer === handler),
        1
      );
    }

    private registerHandler(handler: Handler) {
      this.handlers.push(handler);
    }
  }

  const button = new Button();
  const unsubscribe = button.onClick(() => console.log("Button was clicked "));
  button.click();
  button.click();

  unsubscribe();
  button.click();
}
