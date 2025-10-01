export class User {
  private firstname: string = "Stacey";

  constructor(firstname?: string) {
    if (firstname) {
      this.firstname = firstname;
    }
  }

  getFirstname(): string {
    return this.firstname;
  }
}
