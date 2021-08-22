import { ServiceProvide } from "../../../../../domain/types/ServiceProvide";

export class GetEpisodesService {
  constructor(public provide: ServiceProvide) {}

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
