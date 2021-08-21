export const getEpisodes = async () => {
  return await (await fetch("https://rickandmortyapi.com/api/episode")).json();
};
