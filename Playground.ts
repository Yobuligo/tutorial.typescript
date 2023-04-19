namespace EnumKeys {
    enum Gender {
      Unknown,
      Male,
      Female,
    }
  
    const elements = Object.keys(Gender).filter(
      (element) => !(parseInt(element) >= 0)
    );
    console.log(elements);
  }
  