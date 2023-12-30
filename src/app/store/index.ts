import { configureStore } from '@reduxjs/toolkit'
import { userApi } from '../../entities/user/api/userApi'
import userSlice from '../../entities/user/slices/userSlice'
import rouletteSlice from '../../games/roulette/slices/rouletteSlice'
import walletSlice from '../../entities/wallet/slices/walletSlice'
import rouletteSpinSlice from '../../games/roulette/slices/rouletteSpinSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    roulette: rouletteSlice,
    wallet: walletSlice,
    rouletteSpin: rouletteSpinSlice,
    [userApi.reducerPath]: userApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(userApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch