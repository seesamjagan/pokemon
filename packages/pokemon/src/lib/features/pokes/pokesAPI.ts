import { PokeResponse } from "types/Poke";

export const fetchPokes = async (url: string) => {
  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const result: PokeResponse = await response.json();

  return result;
};
