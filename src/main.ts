import "./style.css";
import { getCharacters } from "./modules/character/infrastructure/services/getCharacters";
import { getEpisodes } from "./modules/episode/infrastructure/services/getEpisodes";

// Rick and Morty API App
window.onload = async () => {
  const characters = await getCharacters();
  console.log(characters);

  const episodes = await getEpisodes();
  console.log(episodes);
};
