// Import ProvideServices
import { ServiceProvide } from "./ServiceProvide";

// Set properties for ServiceProvide
const serviceProvide = new ServiceProvide({
  headers: new Headers(),
});

// Import Service Modules
import { characterService } from "../../app/modules/character/infrastructure/services";
import { episodeService } from "../../app/modules/episode/infrastructure/services";

// Set and export services by modules
export const character = {
  getAll: () =>
    new characterService.GetCharactersService(serviceProvide).execute(),
  getById: (characterId: number) =>
    new characterService.GetCharacterByIdService(serviceProvide).execute(
      characterId
    ),
};

export const episode = {
  getAll: () => new episodeService.GetEpisodesService(serviceProvide).execute(),
  getById: (episodeId: number) =>
    new episodeService.GetEpisodeByIdService(serviceProvide).execute(episodeId),
};
