import { ITest } from "./ITest";
import { DBTenantModelRepo } from "./tenant/DBTenantModelRepo";

export class TestRepo extends DBTenantModelRepo<ITest> {
  findById() {
    this.dbConn.models.test.repo.findAll();
    this.dbConn.models.test.repo.findById()
  }
}
