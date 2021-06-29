import { CommonActionsTypes, CommonThunkType } from "./redux";
import { filmsApi } from './../3_dal_films/api';
import { FilmDetails, FimsType } from "../types/types";


let initialState = {
    films: [] as Array<FimsType>,
    isLoading: false,
    filmDetails: null as null | FilmDetails,
    currentPage: 1,
    fetchingScroll: true,
    totalCount: 0,
    error: null as null|string
}

type initialStateType = typeof initialState

const filmsReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'films/GET_ALL_FILMS':
            return {
                ...state,
                films: [...state.films, ...action.films]
            }
        case 'films/TOOGLE_IS_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            }
        case 'films/GET_FILM_DETAILS':
            return {
                ...state,
                filmDetails: action.filmDetails
            }
        case 'films/SET_TOTAL_COUNT':
            return {
                ...state,
                totalCount: action.totalCount
            }

        case 'films/SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: state.currentPage + 1
            }

        case 'films/SET_ERROR':
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}

export const actions = {
    getFilmsSuccess: (films: Array<FimsType>) => ({
        type: 'films/GET_ALL_FILMS', films
    } as const),
    isLoadingChanged: (isLoading: boolean) => ({
        type: 'films/TOOGLE_IS_LOADING', isLoading
    } as const),
    getFilmDetailsSuccess: (filmDetails: FilmDetails) => ({
        type: 'films/GET_FILM_DETAILS', filmDetails

    } as const),
    totalPageChangedSuccess: (totalCount: number) => ({
        type: 'films/SET_TOTAL_COUNT', totalCount
    } as const),
    currentPageChangedSuccess: (currentPage: number) => ({
        type: 'films/SET_CURRENT_PAGE', currentPage
    } as const),
    errorRejected: (error:null|string) => ({
        type: 'films/SET_ERROR', error
    } as const),

}

type ActionsTypes = CommonActionsTypes<typeof actions>
type ThunkType = CommonThunkType<ActionsTypes>

export const getFilmsThunk = (page: number): ThunkType => async (dispatch) => {
    try {
        let data = await filmsApi.getFilms(page)
        dispatch(actions.getFilmsSuccess(data.results))

        dispatch(actions.totalPageChangedSuccess(data.total_results))
        dispatch(actions.currentPageChangedSuccess(page))

    } catch (e) {
        dispatch(actions.errorRejected('Error getting the list of movies! Please, try again.'))
    }

}

export const getFilmDetaisThunk= (id: number): ThunkType => async (dispatch) => {
    try {
        let data = await filmsApi.getFilmDetails(id)
        dispatch(actions.getFilmDetailsSuccess(data))

    } catch (e) {
        dispatch(actions.errorRejected('Error getting the movie descriptions! Please, try again.'))
    }
}


export default filmsReducer;



