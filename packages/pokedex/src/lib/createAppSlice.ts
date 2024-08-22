import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";

// `buildCreateSlice` allows us to create a slice with async thunks.
export const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

export interface AsyncSliceState<V = unknown> {
  value: V;
  status: "idle" | "loading" | "failed";
  error?: unknown;
};