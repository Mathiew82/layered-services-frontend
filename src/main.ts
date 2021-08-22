import "./style.css";
import { character, episode } from "./infrastructure/services";

// Rick and Morty API App
window.onload = async () => {
  const characters = await character.getAll.execute();
  console.log(characters);

  const episodes = await episode.getAll.execute();
  console.log(episodes);
};
