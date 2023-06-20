interface IColor {
  backgroundColor: string;
  color: string;
}

const toCSSColor = (color: IColor) => {
  const result: any = {};
  for (const prop in color) {
    result[`--${prop}`] = (color as any)[prop];
  }

  console.log(result)
};

toCSSColor({ backgroundColor: "#123456", color: "green" });
