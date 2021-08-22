import { ServiceProvide } from "../../../../infrastructure/services/ServiceProvide";

export class GetCharactersService {
  provide: ServiceProvide;

  constructor(provide: ServiceProvide) {
    this.provide = provide;
  }

  public async execute(): Promise<object> {
    const options = {
      method: "GET",
      headers: this.provide.config.headers,
    };

    return await (
      await fetch("https://rickandmortyapi.com/api/character", options)
    ).json();
  }
}
