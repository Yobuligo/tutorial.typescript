export const getResult = <T>(value?: T): T | undefined => {
  return value;
};

class ResultUser {
  calc() {
    const result = getResult() ?? this.raiseException();
    console.log(`${result}`)
  }

  private raiseException() {
    throw new Error("Value initial");
  }
}

const resultUser = new ResultUser()
resultUser.calc()