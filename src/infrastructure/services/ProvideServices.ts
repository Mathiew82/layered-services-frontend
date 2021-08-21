export class ProvideServices {
  apollo: any;
  config: object;

  constructor(apollo: any, config: object) {
    this.apollo = apollo;
    this.config = config;
  }
}
