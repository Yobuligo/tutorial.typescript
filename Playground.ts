namespace TestOperator {
  interface IPerson {
    firstname: string;
  }

  const getPerson = (yesOrNo: boolean): IPerson | undefined => {
    if (yesOrNo) {
      return { firstname: "Stacey" };
    }
    return undefined;
  };

  let person = getPerson(false);
  person ??= { firstname: "Alex" };

  console.log(person.firstname);
}
