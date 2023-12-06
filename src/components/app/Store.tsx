import { configureStore } from '@reduxjs/toolkit';
import FormEasyReducer from '../features/multiForm/FormSlices.tsx';

export const Store = configureStore({
    reducer:{
        formeasy : FormEasyReducer
    },
})

export type RootState = ReturnType<typeof Store.getState>

export type AppDispatch = typeof Store.dispatch