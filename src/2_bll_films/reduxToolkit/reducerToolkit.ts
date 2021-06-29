import { createAction, createReducer } from "@reduxjs/toolkit"
import { FilmDetails, FimsType } from "../../types/types"
import { filmsApi } from '../../3_dal_films/api';


const initialState = {
    films: [] as Array<FimsType>,
    isLoading: false,
    filmDetails: null as null | FilmDetails,
    currentPage: 1,
    fetchingScroll: true,
    totalCount: 0,
    error: null as null|string
}

export const getFilmsSuccess = createAction<Array<FimsType>, 'films/GET_ALL_FILMS'>('films/GET_ALL_FILMS')
export const isLoadingChanged = createAction<boolean, 'films/TOOGLE_IS_LOADING'>('films/TOOGLE_IS_LOADING')
export const getFilmDetailsSuccess = createAction< null | FilmDetails, 'films/GET_FILM_DETAILS'>('films/GET_FILM_DETAILS')
export const totalPageChangedSuccess = createAction<number, 'films/SET_TOTAL_COUNT'>('films/SET_TOTAL_COUNT')
export const currentPageChangedSuccess = createAction<number, 'films/SET_CURRENT_PAGE'>('films/SET_CURRENT_PAGE')
export const errorRejected = createAction<null | string,'films/GET_ALL_FILMS' >('films/GET_ALL_FILMS' )


const reducerToolkit = createReducer(initialState, {
    [getFilmsSuccess.type]: (state, action)=>{
        state.films = [...state.films, ...action.payload]
    },
    [isLoadingChanged.type]: (state, action)=>{
        state.isLoading = action.payload
    },
    [getFilmDetailsSuccess.type]: (state, action)=>{
        state.filmDetails = action.payload
    },
    [totalPageChangedSuccess.type]: (state, action)=>{
        state.totalCount =  action.payload
    },
    [currentPageChangedSuccess.type]: (state, action)=>{
        state.currentPage = state.currentPage + 1
    },
    [errorRejected.type]: (state, action)=>{
        state.error =  action.payload
    },

})


export const getFilmsThunkToolkit  = (page: number): any => async (dispatch:any) => {
    try {
        let data = await filmsApi.getFilms(page)
        dispatch(getFilmsSuccess(data.results))
        dispatch(totalPageChangedSuccess(data.total_results))
        dispatch(currentPageChangedSuccess(page))
    } catch (e) {
        dispatch(errorRejected('Error getting the list of movies! Please, try again.'))
    }
}

export const getFilmDetaisThunk= (id: number): any=> async (dispatch:any) => {  
    try {
        let data = await filmsApi.getFilmDetails(id)
        dispatch(getFilmDetailsSuccess(data))
    } catch (e) {
        dispatch(errorRejected('Error getting the movie descriptions! Please, try again.'))
    }
}


export default reducerToolkit