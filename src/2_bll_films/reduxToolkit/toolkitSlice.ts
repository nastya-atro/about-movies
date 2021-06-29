import { createSlice } from "@reduxjs/toolkit";
import { FilmDetails, FimsType } from "../../types/types";
import { filmsApi } from './../../3_dal_films/api';


const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        films: [] as Array<FimsType>,
        isLoading: false,
        filmDetails: null as null | FilmDetails,
        currentPage: 1,
        fetchingScroll: true,
        totalCount: 0,
        error: null as null | string
    },
    reducers:{
        getFilmsSuccess(state, action){
            state.films = [...state.films, ...action.payload]
        },
        isLoadingChanged(state, action){
            state.isLoading = action.payload
        },
        getFilmDetailsSuccess(state, action){
            state.filmDetails = action.payload
        },
        totalPageChangedSuccess(state, action){
            state.totalCount =  action.payload
        },
        currentPageChangedSuccess(state){
            state.currentPage = state.currentPage + 1
        },
        errorRejected(state, action){
            state.error =  action.payload
        }
    }
})

export default toolkitSlice.reducer 
export const {getFilmsSuccess, isLoadingChanged, getFilmDetailsSuccess, totalPageChangedSuccess, currentPageChangedSuccess, errorRejected}=toolkitSlice.actions

export const getFilmsThunkToolkit  = (page: number): any => async (dispatch:any) => {
    try {
      
        let data = await filmsApi.getFilms(page)
        dispatch(getFilmsSuccess(data.results))
        dispatch(totalPageChangedSuccess(data.total_results))
        dispatch(currentPageChangedSuccess())

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
