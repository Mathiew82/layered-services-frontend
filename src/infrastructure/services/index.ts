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

// Set Services
export const Services = {
  characters: {
    get: new character.GetCharactersService(provideServices),
  },
};
