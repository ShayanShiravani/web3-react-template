import { configureStore } from '@reduxjs/toolkit'
import swap  from './swap/reduser'

export const store = configureStore({
  reducer: {
    swap
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch