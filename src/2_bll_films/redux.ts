import { applyMiddleware, combineReducers, createStore, Action } from "redux";
import thunkMiddleware, { ThunkAction } from "redux-thunk"
import filmsReducer from './filmsReducer';


let rootReducer = combineReducers({
    films: filmsReducer
});

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export type CommonActionsTypes<T> = T extends {[key: string]:(...args:any[])=> infer U }?U:never

export type CommonThunkType<A extends Action>= ThunkAction<Promise<void>, AppStateType, unknown, A>




let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;