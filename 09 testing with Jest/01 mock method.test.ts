import exp = require("constants");
import { User } from "./data/User";
import { UserRepo } from "./data/UserRepo";

jest.mock("./data/User");

describe("Mock method", () => {
  it("Returns mocked user", () => {
    const userRepo = new UserRepo();

    // create mock function for userRepo.findAll, that only returns demo user
    // if required return mockMethod for later expectations.
    const mockFindAll = jest
      .spyOn(userRepo, "findAll")
      .mockReturnValue([new User("demo")]);

    const users = userRepo.findAll();
    expect(users.length).toBe(1);

    const mockCreate = jest
      .spyOn(userRepo, "create")
      .mockReturnValue(new User());
    userRepo.create("Doris");

    expect(mockCreate).toHaveBeenCalled();
    expect(mockCreate).toHaveBeenCalledTimes(1);
    expect(mockCreate).toHaveBeenCalledWith("Doris");
  });

  it("Returns mocked firstname", () => {
    const user = new User();
    const mockGetFirstname = jest
      .spyOn(user, "getFirstname")
      .mockReturnValue("Emil");

    const firstname = user.getFirstname();
    expect(firstname).toBe("Emil");
    expect(mockGetFirstname).toHaveBeenCalled();
  });

  it("Returns mocked promise value", async () => {
    const expectedUser = new User();
    const userRepo = new UserRepo();
    const mockFindById = jest
      .spyOn(userRepo, "findById")
      .mockResolvedValue(expectedUser);

    const currentUser = await userRepo.findById("123");
    expect(currentUser).toBe(expectedUser);
    expect(mockFindById).toHaveBeenCalled();
  });

  it("Creates User", () => {
    const userRepo = new UserRepo();

    const mockCreate = jest
      .spyOn(userRepo, "create")
      .mockReturnValue(new User());
    userRepo.create("Doris");

    expect(mockCreate).toHaveBeenCalled();
    expect(mockCreate).toHaveBeenCalledTimes(1);
    expect(mockCreate).toHaveBeenCalledWith("Doris");
  });
});

describe("repeat", () => {
  it("Calls function x times", () => {});
  test("Calls function x times", () => {});
});
