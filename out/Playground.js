var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class PersonDAO {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([{ id: 1, firstname: "Stacey", lastname: "Starfish" }]);
                }, 2000);
            });
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.findAll().then((persons) => {
                    const person = persons.find((person) => {
                        return person.id === id;
                    });
                    resolve(person);
                });
            });
        });
    }
}
console.log(`Before promise`);
const personDAO = new PersonDAO();
personDAO
    .findAll()
    .then((response) => {
    console.log(`Find all delivered the persons ${response.forEach((person) => {
        console.log(`${person.id} ${person.firstname} ${person.lastname}`);
    })}`);
})
    .catch((reason) => {
    console.log(reason);
});
personDAO.findById(1).then((person) => {
    console.log(`FindById delivered the person ${person.id} ${person.firstname} ${person.lastname}`);
});
console.log(`After promise`);
//# sourceMappingURL=Playground.js.map