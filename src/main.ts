import "./style.css";
import { character, episode } from "./infrastructure/services";

// Rick and Morty API App
window.onload = async () => {
  const characters = await character.getAll();
  console.log(characters);

  const episodes = await episode.getAll();
  console.log(episodes);
};
