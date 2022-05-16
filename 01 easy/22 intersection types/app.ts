// An interception type is a type that contains other types

type Index = string | number;
type Passed = boolean;
type InterceptionType = Index & Passed;

type User = {
  firstname: string;
  lastname: string;
};

type Address = {
  street: string;
};

type UserAddress = User & Address;

const userAddress: UserAddress = {
  firstname: "Stacey",
  lastname: "Starfish",
  street: "Any Street",
};
