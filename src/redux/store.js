import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { shazamApi , shazamSongApi } from './services/shazam';

export const store = configureStore({
  reducer: {
    [shazamApi.reducerPath] : shazamApi.reducer,
    [shazamSongApi.reducerPath] :shazamSongApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamApi.middleware)
});
