interface IPerson {
  id: number;
  firstname: string;
  lastname: string;
}

interface IPersonDAO {
  findAll(): Promise<IPerson[]>;
  findById(id: number): Promise<IPerson>;
}

class PersonDAO implements IPersonDAO {
  async findAll(): Promise<IPerson[]> {
    return new Promise<IPerson[]>((resolve, reject) => {
      fetch("").then(() => {
        resolve([{ id: 1, firstname: "Stacey", lastname: "Starfish" }]);
      });
    });
  }

  async findById(id: number): Promise<IPerson> {
    return new Promise<IPerson>((resolve, reject) => {
      this.findAll().then((persons) => {
        const person = persons.find((person) => {
          return person.id === id;
        });
        resolve(person);
      });
    });
  }
}

async function test(): Promise<string>{
    return new Promise(() => {}) 
}

console.log(`Before promise`);

const personDAO = new PersonDAO();
personDAO
  .findAll()
  .then((response) => {
    console.log(
      `Find all delivered the persons ${response.forEach((person) => {
        console.log(`${person.id} ${person.firstname} ${person.lastname}`);
      })}`
    );
  })
  .catch((reason) => {
    console.log(reason);
  });

personDAO.findById(1).then((person) => {
  console.log(
    `FindById delivered the person ${person.id} ${person.firstname} ${person.lastname}`
  );
});

console.log(`After promise`);
