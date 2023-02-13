import { IService } from "./IService";

/**
 * The enum {@link ServiceInstanceType} provides all possibilities how to initialize a {@link IService}.
 */
export enum ServiceInstanceType {
  SINGLE_INSTANTIABLE,
  MULTI_INSTANTIABLE,
}
