namespace Playground2 {
  enum ComponentName {
    FIRST,
    SECOND,
  }

  interface IOrigin {
    type: ComponentName;
  }

  interface IFacade {
    prop1: string;
    prop2: number;
  }

  interface IFacadeFirst extends IFacade {
    type: ComponentName.FIRST;
    prop3: boolean;
  }

  interface IFacadeSecond extends IFacade {
    type: ComponentName.SECOND;
    prop4: string;
  }

  type MyFacades = IFacadeFirst | IFacadeSecond;

  class FacadeFirst implements IFacadeFirst {
    type: ComponentName.FIRST = ComponentName.FIRST;
    prop3: boolean = true;
    prop1: string = "";
    prop2: number = 0;
    origin: IOrigin = { type: ComponentName.FIRST };
  }

  class FacadeSecond implements IFacadeSecond {
    type: ComponentName.SECOND = ComponentName.SECOND;
    prop4: string = "";
    prop1: string = "";
    prop2: number = 0;
    origin: IOrigin = { type: ComponentName.SECOND };
  }

  const onSelect = <TFacade extends MyFacades, R>(
    facade: TFacade,
    config: (facade: TFacade) => R
  ): R => {};

  const mySetters = onSelect(new FacadeFirst(), (facade) => {
    return {
      firstname: "Stacey",
    };
  });
}
