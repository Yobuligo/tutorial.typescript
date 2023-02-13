import { IService } from "./IService";
import { ServiceInstanceType } from "./ServiceInstanceType";

/**
 * The {@link IServiceDefinition} is responsible for providing information of a specific service.
 * 
 * The service must be of type {@link IService}. In addition it is required to define for each service if it is {@link ServiceInstanceType.SINGLE_INSTANTIABLE} or {@link ServiceInstanceType.MULTI_INSTANTIABLE}.
 * 
 * This service instantiation is of type {@link ServiceInstanceType}
 */
export interface IServiceDefinition {
  service: IService;
  serviceInstanceType: ServiceInstanceType;
}
