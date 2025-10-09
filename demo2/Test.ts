import { ITest } from "./ITest";
import { DBTenantModel } from "./tenant/DBTenantModel";

export class Test extends DBTenantModel<ITest> {
  test() {
    // this.dbConn.models.test.
  }
}
