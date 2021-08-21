export const getCharacters = async () => {
  return await (
    await fetch("https://rickandmortyapi.com/api/character")
  ).json();
};
