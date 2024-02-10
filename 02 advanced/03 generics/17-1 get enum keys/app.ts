namespace EnumKeys {
  enum Gender {
    Unknown,
    Male,
    Female,
  }

  enum ColorType {
    PRIMARY = "Primary",
    SECONDARY = "Secondary",
    ACCENT = "Accent",
  }

  const elements = Object.keys(Gender).filter(
    (element) => !(parseInt(element) >= 0)
  );
  console.log(elements);

  // Alternative
  type EnumType = { [key: string]: any };

  class Enum {
    static getValues<T extends EnumType>(type: T): (keyof T)[] {
      const props: (keyof T)[] = [];
      for (const prop in type) {
        props.push(type[prop]);
      }
      return props;
    }
  }

  const values = Enum.getValues(Gender);
  console.log(values);

  const colorValues = Enum.getValues(ColorType)
  console.log(colorValues)
}
