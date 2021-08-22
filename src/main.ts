import "./style.css";
import { character, episode } from "./infrastructure/services";

// Rick and Morty API App
window.onload = async () => {
  const characters = await character.getAll();
  console.log(characters);

  const attilaStarwar = await character.getById(28);
  console.log(attilaStarwar);

  const episodes = await episode.getAll();
  console.log(episodes);

  const LookWhosPurgingNow = await episode.getById(20);
  console.log(LookWhosPurgingNow);
};
