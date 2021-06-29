import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk"
import { Action } from 'redux';
import toolkitSlice from './toolkitSlice';
//import  reducerToolkit  from './reducerToolkit';



let rootReducer = combineReducers({
    toolkit: toolkitSlice
});

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export type CommonActionsTypes<T> = T extends {[key: string]:(...args:any[])=> infer U }?U:never
export type CommonThunkType<A extends Action>= ThunkAction<Promise<void>, AppStateType, unknown, A>


let store = configureStore({
    reducer: rootReducer
})

export default store;