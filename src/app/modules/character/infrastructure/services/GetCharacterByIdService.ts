import { ServiceProvide } from "../../../../../domain/types/ServiceProvide";

export class GetCharacterByIdService {
  constructor(public provide: ServiceProvide) {}

  public async execute(characterId: number): Promise<object> {
    const options = {
      method: "GET",
      headers: this.provide.config.headers,
    };

    return await (
      await fetch(
        `https://rickandmortyapi.com/api/character/${characterId}`,
        options
      )
    ).json();
  }
}
