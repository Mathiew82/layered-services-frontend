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
  getAll: new characterService.GetCharactersService(serviceProvide),
};

export const episode = {
  getAll: new episodeService.GetEpisodesService(serviceProvide),
};
