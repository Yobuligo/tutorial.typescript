import { IService } from "./IService";
import { IServiceDefinition } from "./IServiceDefinition";
import { ServiceInstanceType } from "./ServiceInstanceType";
/**
 * When writing a documentation, I like to refer to other types. This can be achieved by using {} and @link.
 * The advantages are, that when renaming the type, the documentation is adjusted as well. 
 * Also when displaying the documentation the type is embedded in the documentation without the technical marker like '@link'.
 */

/**
 * Take a look at the generated documentation for {@link IServiceDefinition} for {@link IService} and {@link ServiceInstanceType}.
 */
const serviceDefinition: IServiceDefinition = {
  service: {},
  serviceInstanceType: ServiceInstanceType.SINGLE_INSTANTIABLE,
};
