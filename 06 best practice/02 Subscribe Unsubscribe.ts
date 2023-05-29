/**
 * If it is required to register on an event, it is also required to unregister from an event.
 * It seems there is a best practice for it.
 * Instead of having two methods, the register method directly returns a function that can be called to unregister.
 */

namespace SubscribeUnsubscribe {
  type Handler = () => void;

  class TrainingExercise {
    private onSuccessHandlers: Handler[] = [];

    // The method or function to register on an event, returns a function to unregister from that event.
    onSuccess(onSuccessHandler: Handler): Handler {
      this.registerOnSuccessHandler(onSuccessHandler);

      // Here the function is returned that can be used to unregister from the event
      return () => {
        this.unregisterOnSuccessHandler(onSuccessHandler);
      };
    }

    // triggers the event
    succeed() {
      this.onSuccessHandlers.forEach((onSuccessHandler) => onSuccessHandler());
    }

    private registerOnSuccessHandler(onSuccessHandler: Handler) {
      console.log("Handler was registered");
      this.onSuccessHandlers.push(onSuccessHandler);
    }

    private unregisterOnSuccessHandler(onSuccessHandler: Handler) {
      console.log("Handler was unregistered");
      this.onSuccessHandlers.splice(
        this.onSuccessHandlers.findIndex(
          (observer) => observer === onSuccessHandler
        ),
        1
      );
    }
  }

  const trainingExercise = new TrainingExercise();
  const unregister = trainingExercise.onSuccess(() =>
    console.log("Training exercise succeeded")
  );

  trainingExercise.succeed();
  trainingExercise.succeed();
  trainingExercise.succeed();

  unregister();
  trainingExercise.succeed();
}
