namespace Playground {
  interface IPerson {
    id: string;
    firstname: string;
    lastname: string;
  }

  // du kannst Felder von T enthalten
  // der Rückgabetyp ist dann ein neuer Typ

  //   type NewType<T> = {[P in keyof T]?: T[P]}

  //   const config = ()=>{}

  type Subset<T, K extends keyof T> = { [P in K]: T[P] };

  class EntityRepo<T> {
    get<K extends keyof T>(fields?: K[]): Subset<T, K>[] {
      throw new Error();
    }
  }

  type IPersonShort = Subset<IPerson, "firstname" | "lastname" | "id">;

  const entity = new EntityRepo<IPerson>();
  const test: IPersonShort[] = entity.get(["firstname", "id", "lastname"]); // api/persons?fields=lastname,firstname
  const userProfiles = entity.get(["firstname"]);
}
