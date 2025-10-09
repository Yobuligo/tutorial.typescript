import { DBConn } from "./core/database/DBConn";
import { DBTenantModelRefsFactory } from "./tenant/DBTenantModelRefsFactory";

const dbConn = new DBConn(DBTenantModelRefsFactory)