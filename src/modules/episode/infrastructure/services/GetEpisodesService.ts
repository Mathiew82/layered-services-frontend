import { ServiceProvide } from "../../../../infrastructure/services/ServiceProvide";

export class GetEpisodesService {
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
      await fetch("https://rickandmortyapi.com/api/episode", options)
    ).json();
  }
}
