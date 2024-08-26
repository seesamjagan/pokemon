import { createAppSlice } from "@/lib/createAppSlice";
import type { AsyncSliceState } from "@/lib/createAppSlice";
import type { AppThunk } from "@/lib/store";
import { Info, Poke, PokeResponse } from "types/Poke";
import { fetchPokemon, fetchPokes } from "@/lib/features/pokes/pokesAPI";

type PokemonMap = Record<string, Poke>;

export interface PokemonSliceState extends AsyncSliceState<PokemonMap> { };

const initialState: PokemonSliceState = {
  value: {},
  status: "idle",
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const pokemonSlice = createAppSlice({
  name: "pokemon",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: (create) => ({
    // The function below is called a thunk and allows us to perform async logic. It
    // can be dispatched like a regular action. This will call the thunk with the
    // `dispatch` function as the first argument. Async code can then be executed
    // and other actions can be dispatched. Thunks are typically used to make async
    // requests.
    getPokemonByUrl: create.asyncThunk(
      async (url: string) => {
        const response = await fetchPokemon(url);
        // The value we return becomes the `fulfilled` action payload
        return response;
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          state.status = "idle";
          state.value[action.payload.name] = action.payload;
        },
        rejected: (state) => {
          state.status = "failed";
          state.error = 'Unknown network error!';
        },
      },
    ),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectPokemon: (pokemon, name) => pokemon.value?.[name],
    selectStatus: (pokemon) => pokemon.status,
  },
});

// Action creators are generated for each case reducer function.
export const { getPokemonByUrl } = pokemonSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectPokemon } = pokemonSlice.selectors;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export const getPokemon = ({ name, url }: Info): AppThunk => (dispatch, getState) => {
  const pokemon = selectPokemon(getState(), name);

  if (!pokemon) {
    dispatch(getPokemonByUrl(url));
  }
};
