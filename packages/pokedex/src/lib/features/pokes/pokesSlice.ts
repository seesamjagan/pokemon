import { createAppSlice } from "@/lib/createAppSlice";
import type { AsyncSliceState } from "@/lib/createAppSlice";
import type { AppThunk } from "@/lib/store";
import { PokeResponse } from "types/Poke";
import { fetchPokes } from "@/lib/features/pokes/pokesAPI";

export interface PokeSliceState extends AsyncSliceState<PokeResponse | null> {};

const initialState: PokeSliceState = {
  value: null,
  status: "idle",
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const pokesSlice = createAppSlice({
  name: "pokes",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: (create) => ({
    // The function below is called a thunk and allows us to perform async logic. It
    // can be dispatched like a regular action. This will call the thunk with the
    // `dispatch` function as the first argument. Async code can then be executed
    // and other actions can be dispatched. Thunks are typically used to make async
    // requests.
    getPokes: create.asyncThunk(
      async (url: string) => {
        const response = await fetchPokes(url);
        // The value we return becomes the `fulfilled` action payload
        return response;
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          state.status = "idle";
          state.value = action.payload;
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
    selectNextURL: (pokes) => pokes.value?.next,
    selectPreviousURL: (pokes) => pokes.value?.previous,
    selectCount: (pokes) => pokes.value?.count,
    selectPokes: (pokes) => pokes.value?.results,
    selectStatus: (pokes) => pokes.status,
    selectError: (pokes) => pokes.error,
  },
});

// Action creators are generated for each case reducer function.
export const { getPokes } = pokesSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectNextURL, selectPreviousURL, selectCount, selectPokes, selectStatus, selectError } = pokesSlice.selectors;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const getNextPage = (): AppThunk => (dispatch, getState) => {
  const url = selectNextURL(getState());

  if (url) {
    dispatch(getPokes(url));
  }
};

export const getPreviousPage = (): AppThunk => (dispatch, getState) => {
  const url = selectPreviousURL(getState());

  if (url) {
    dispatch(getPokes(url));
  }
};
