/**
 * Using a function that awaits a result automatically is a async function.
 * In addition it automatically wraps the result by Promise, even so the result was already awaited.
 * The following function automatically returns a Promise<number> type.
 * const test = async () => {
 *    return 123
 * }
 *
 * Partially that leads to an unintended behavior. Lets assume I request data from a backend via fetch.
 * Then I have to mark my function as async. And Automatically it wraps the result by type Promise.
 * Even so I already awaited the result.
 * Instead I don't want the result to be wrapped.
 * That can be achieved via type Awaited.
 */

namespace TypeAwaited {
  /**
   * This function sends a {@link request}. The awaited result is then provided to a given {@link responseHandler}.
   */
  const sendRequest = async <T>(
    request: () => T,
    responseHandler: (response: Awaited<T>) => void
  ) => {
    const response = await request();
    responseHandler(response);
  };

  interface IPerson {
    firstname: string;
  }

  sendRequest(
    async () => {
      const response = await fetch("");
      const data: IPerson = await response.json();
      return data;
    },
    (response) => {
      // I can access the firstname, as variable response is of type Awaited from the result of the request above.
      console.log(response.firstname);
    }
  );
}
