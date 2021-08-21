// Import ProvideServices
import { ProvideServices } from "./ProvideServices";

// Set properties for ProvideServices
const provideServices = new ProvideServices(
  () => console.log("This is Apollo"),
  {
    headers: new Headers(),
  }
);

// Import Characters Services
import { character } from "../../modules/character/infrastructure/services";
import { episode } from "../../modules/episode/infrastructure/services";

// Set Services
export const Services = {
  character: {
    get: new character.GetCharactersService(provideServices),
  },
  episode: {
    get: new episode.GetEpisodesService(provideServices),
  },
};
