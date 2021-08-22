import { ServiceProvide } from "../../../../../domain/types/ServiceProvide";

export class GetEpisodeByIdService {
  constructor(public provide: ServiceProvide) {}

  public async execute(episodeId: number): Promise<object> {
    const options = {
      method: "GET",
      headers: this.provide.config.headers,
    };

    return await (
      await fetch(
        `https://rickandmortyapi.com/api/episode/${episodeId}`,
        options
      )
    ).json();
  }
}
