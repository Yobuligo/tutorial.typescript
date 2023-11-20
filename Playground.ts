import Test from "./01 easy/46 named export vs default export/app";

namespace Playground {
  enum AuthRole {
    ADMIN,
    DELIVERY,
    SUPPORT,
  }

  type AuthRoles = AuthRole[];

  type AuthConfig = { [key: string]: AuthRole[] };

  function define<R extends AuthConfig>(config: R): R {
    return config;
  }

  const config = define({
    canCreateObject: [AuthRole.ADMIN],
    canDeleteObject: [AuthRole.ADMIN, AuthRole.SUPPORT],
    canUpdateObject: [AuthRole.ADMIN, AuthRole.SUPPORT],
    canReadObjects: [AuthRole.ADMIN, AuthRole.SUPPORT, AuthRole.DELIVERY],
    canDo: [AuthRole.DELIVERY],
  });

  type Config = typeof config;

  type Action<T extends Config> = { [P in keyof T]: () => boolean };

  function createAuthCheckActions(config: Config): Action<Config> {
    const authCheck = {} as Action<Config>;
    for (const propName in config) {
      (authCheck as any)[propName] = () => {
        console.log(`${propName} has to be checked against roles`);
        const authRoles = (config as any)[propName] as AuthRoles;
        authRoles.forEach((role) => console.log(AuthRole[role]));
      };
    }
    return authCheck;
  }

  const authCheck = createAuthCheckActions(config);
  authCheck.canCreateObject();
  authCheck.canDeleteObject();
  authCheck.canDo();
  authCheck.canReadObjects();
}
