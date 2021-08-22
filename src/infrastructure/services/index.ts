// Import ProvideServices
import { ServiceProvide } from "./ServiceProvide";

// Set properties for ServiceProvide
const serviceProvide = new ServiceProvide({
  headers: new Headers(),
});

// Import Characters Services
import { character } from "../../modules/character/infrastructure/services";
import { episode } from "../../modules/episode/infrastructure/services";

// Set Services
export const Services = {
  character: {
    get: new character.GetCharactersService(serviceProvide),
  },
  episode: {
    get: new episode.GetEpisodesService(serviceProvide),
  },
};
