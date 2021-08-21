import "./style.css";
import { Services } from "./infrastructure/services";

// Rick and Morty API App
window.onload = async () => {
  const characters = await Services.characters.get.execute();
  console.log(characters);
};
