import { User } from "./data/User";
import { UserController } from "./data/UserController";
import { UserRepo } from "./data/UserRepo";

// Important to create mock objects for UserRepo instead of origin objects.
jest.mock("./data/UserRepo");

describe("mock class", () => {
  it("Controller returns user", () => {
    const expectedUser = new User();

    // create mock functions for mocked class and provide mock return values
    const mockFindById = jest.fn().mockReturnValue(expectedUser);

    // create the mock class for user repo and provides the methods
    // attention: either all methods and props must be provided or instead cast to any
    const MockUserRepo = UserRepo as jest.MockedClass<typeof UserRepo>;
    MockUserRepo.mockImplementation(
      () =>
        ({
          findById: mockFindById,
        } as any)
    );

    // test code
    const currentUser = new UserController().findUser();
    expect(currentUser).toBe(expectedUser);
  });
});
