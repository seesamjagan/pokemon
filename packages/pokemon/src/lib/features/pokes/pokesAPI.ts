import { Poke, PokeResponse } from "types/Poke";

export const fetchPokes = async (url: string) => {
  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const result: PokeResponse = await response.json();

  return result;
};

export const fetchPokemon = async (url: string) => {
  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const result: Poke = await response.json();

  return result;
};
