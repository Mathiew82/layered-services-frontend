import { ConfigServiceProvide } from "../../domain/types/ConfigServiceProvide";

export class ServiceProvide {
  config: ConfigServiceProvide;

  constructor(config: ConfigServiceProvide) {
    this.config = config;
  }
}
