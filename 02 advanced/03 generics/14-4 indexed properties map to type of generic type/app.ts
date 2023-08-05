/**
 * Indexed properties can be used to map types. Take all properties of T and provide another type {[P in keyof T]: <new-type>}.
 *
 * Now I want to have type of generic types. Image the following scenario:
 * We have class instances of Action to do something. Each action is connected to a type, e.g. an IActionConfig that contains props for the action Action<IActionConfig>.
 * Now I want to provide instances of actions in an ActionPool AND I want to have a config (IActionPoolConfig) where the user can provide the ActionConfig for various Actions.
 * That ActionPoolConfig should only provide the ActionsConfigs for registered Actions in the ActionPool. So it should stay in sync.
 *
 * The following code shows how to solve this
 */

namespace IndexedPropertiesMapToTypeOfType {
  /**
   * The action config contains properties for a config
   */
  interface IActionConfig {}

  /**
   * The action can be used for doing things.
   * When calling the method execute the concrete action config is injected to the config.
   */
  interface IAction<T extends IActionConfig> {
    execute(actionConfig: T): void;
  }

  /**
   * Concrete action config for action {@link ActionEdit} and the corresponding action.
   */
  interface IActionEditConfig extends IActionConfig {
    onEdit: () => void;
  }

  class ActionEdit implements IAction<IActionEditConfig> {
    execute(actionConfig: IActionEditConfig): void {
      actionConfig.onEdit();
    }
  }

  /**
   * Concrete action config for action {@link ActionCreate} and the corresponding action.
   */
  interface IActionCreateConfig extends IActionConfig {
    name: string;
    onCreate: () => void;
  }

  class ActionCreate implements IAction<IActionCreateConfig> {
    execute(actionConfig: IActionCreateConfig): void {
      actionConfig.onCreate();
      console.log(actionConfig.name);
    }
  }

  /**
   * The previous code is only for preparing the scenario.
   * Now the actually important part begins
   */

  /**
   * The action pool is for the user.
   * It should contains all action configs, which should be provided to the user.
   * So with each new action, it must be extended by the new action or actually by the new action config.
   */
  interface IActionPoolConfig {
    onActionEdit: IActionEditConfig;
    onActionCreate: IActionCreateConfig;
  }

  /**
   * Now we want to provide the action pool itself, and that should be in sync with the {@link IActionPoolConfig}.
   * Whenever a new action config was added to {@link IActionPoolConfig}, a corresponding Action must be provided, which fits type safe to the ActionConfig.
   * This can be achieved by the following steps:
   *    1. create a new type which contains all properties of {@link IActionPoolConfig}, but instead of action config it should contains {@link IAction} with the correct action config type
   *    2. provide the action pool. The action pool must be of type of the new type. Whenever this new type changed (by adding that new action config) we want to get a syntax error.
   */

  /**
   * By using [P in keyof T] this new type {@link IActionPool} contains of all properties of the given type {@link T} which must be of type {@link IActionPoolConfig}.
   * We map all properties to a new type, and that type must be of type {@link IAction}.
   * The {@link IAction} needs an {@link IActionConfig} as generic type. We could use any. But that would result in the problem that we could assign {@link ActionCreate} to the action config {@link IActionEditConfig}.
   * Instead we can get the action config type from the property if the {@link IActionPoolConfig} by using T[P] as generic type for {@link IAction}.
   */
  type IActionPool<T extends IActionPoolConfig> = {
    [P in keyof T]: IAction<T[P]>;
  };

  /**
   * Finally we have the action pool itself. Whenever {@link IActionPoolConfig} gets a new action config, the pool has syntax errors and we now that we have to add something.
   * In addition we only can assign the correct action to the properties of {@link IActionPoolConfig}, which means not only an action, but an action with the correct action config type.
   */
  const ActionPool: IActionPool<IActionPoolConfig> = {
    onActionCreate: new ActionCreate(),
    onActionEdit: new ActionEdit(),
  };

  /**
   * Usage 1: Direct call
   * Now the action pool always contains all provided actions and each action needs the correct action config properties for executing it.
   * Which would generally work with no work.
   */
  ActionPool.onActionCreate.execute({
    name: "Test",
    onCreate: () => {},
  });

  /**
   * Usage 2: only provide parameter at a central point
   * In addition we can use our {@link IActionPoolConfig} to provide action config properties for all available actions
   */
  function provideConfig(config: IActionPoolConfig) {}
  provideConfig({
    onActionCreate: {
      name: "Test",
      onCreate: () => {},
    },
    onActionEdit: {
      onEdit: () => {},
    },
  });
}
