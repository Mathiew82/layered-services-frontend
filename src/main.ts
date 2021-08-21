import "./style.css";
import { Services } from "./infrastructure/services";

// Rick and Morty API App
window.onload = async () => {
  const characters = await Services.character.get.execute();
  console.log(characters);

  const episodes = await Services.episode.get.execute();
  console.log(episodes);
};
