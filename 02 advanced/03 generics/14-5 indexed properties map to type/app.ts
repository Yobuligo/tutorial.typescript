/**
 * Here is another example when to mapping of generic types.
 *
 * What is the idea?
 * The idea is to check authorities by specific methods. Each method is connected to specific roles. If a user has one of these roles, the user has the authority.
 * E.g. adding user. There should be a function "addUser" and I want to define the roles, which are required by the user (at least one of these roles) like ADMIN or SUPPORT for example.
 *
 * Next I have to implement the addUser function and check the user roles.
 * If I require another action like "deleteUser", I have to start from the beginning.
 * Instead I want to have a more generic approach. I only want to define the action name and assign roles.
 * Directly I want to have somewhere a type safe possibility to access the action and don't want to care about the implementation.
 *
 * In addition documentations are derived from the property definition.
 *
 * The following shows how this can be achieved:
 */

namespace IndexedPropertiesMapToType {
  /**
   * Enum that contains all possible auth roles
   */
  enum AuthRole {
    ADMIN,
    DELIVERY,
    SUPPORT,
  }

  /**
   * Type which represents the list or array type of enum type {@link AuthRole}
   */
  type AuthRoles = AuthRole[];

  /**
   * Indexed property type that must contain only of action names and a list of {@link AuthRole}s
   */
  type AuthConfig = { [key: string]: AuthRoles };

  /**
   * Function that is required to get the concrete {@link AuthConfig}, which contains all actions and its assigned roles.
   * To get all concrete properties and its roles, we define type {@link R} which extends {@link AuthConfig} and contains the concrete properties inferred from {@link config}.
   *
   * The given {@link config} is directly returned.
   */
  const configure = <R extends AuthConfig>(config: R): R => {
    return config;
  };

  /**
   * Configure the authorities, by providing the actions and the corresponding auth roles.
   * The created config is cached in {@link authConfig}.
   */
  const authConfig = configure({
    canAdd: [AuthRole.ADMIN, AuthRole.SUPPORT],
    canDelete: [AuthRole.ADMIN],

    /**
     * Provide any documentation here, which is also available for the calling check method.
     */
    canUpdate: [AuthRole.ADMIN, AuthRole.DELIVERY],
  });

  /**
   * Type that represents the current authority config derived from constant {@link authConfig}
   */
  type ThisAuthConfig = typeof authConfig;

  /**
   * Type that provides all action functions to check authorities.
   * The action names (properties) are derived from the {@link authConfig} and are mapped to the function type to check authorities (which return only true or false).
   */
  type AuthActionPool = { [P in keyof ThisAuthConfig]: () => boolean };

  /**
   * Function that creates an object of type {@link AuthActionPool}.
   * It contains functions to check authorities of the contained actions.
   * The actions and the roles to be checked base on the given {@link config}.
   *
   * To directly access the properties of {@link config}, we introduce the generics type {@link T} which extends {@link ThisAuthConfig}.
   * This means {@link T} contains a concrete variant of {@link ThisAuthConfig}, so there is no need to cast it to type `any` within the function implementation.
   */
  const createAuthChecks = <T extends ThisAuthConfig>(
    config: T
  ): AuthActionPool => {
    // Iterate over the config properties and create functions instead
    const authCheck = {} as AuthActionPool;
    for (const propName in config) {
      // provide the authority check function, which can be called from outside
      // Inside we define the auth roles, which must be checked and which are derived from the given config.
      (authCheck as any)[propName] = () => {
        const authRoles = config[propName] as AuthRoles;
        console.log(`Action '${propName}' must be check roles:`);
        authRoles.forEach((authRole) => {
          console.log(`${AuthRole[authRole]}`);
        });
      };
    }
    return authCheck;
  };

  /**
   * Constant to access the corresponding authority check function
   */
  const authCheck = createAuthChecks(authConfig);
  authCheck.canAdd();
  authCheck.canDelete();
  authCheck.canUpdate();

}
