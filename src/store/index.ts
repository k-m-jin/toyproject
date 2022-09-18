import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { userReducer } from './slice/userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})

type RootState = ReturnType<typeof store.getState>
type AppDispath = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispath>()
