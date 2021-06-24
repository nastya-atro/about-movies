import { CommonActionsTypes, CommonThunkType } from "./redux";
import { filmsApi } from './../3_dal_films/api';



let initialState = {
    films: [] as Array<FimsType>,
    isLoading: false,
    filmDetails: null as null | FilmDetails,
    currentPage: 1,
    fetchingScroll: true,
    totalCount: 0
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
        console.log('Some error')
    }

}

export const getFilmDetaisThunk = (id: number): ThunkType => async (dispatch) => {
    try {
        let data = await filmsApi.getFilmDetails(id)
        dispatch(actions.getFilmDetailsSuccess(data))
    } catch(e){
        console.log('Some error')
    }  
}


export default filmsReducer;



type FimsType = {
    poster_path: string | null
    adult: boolean
    overview: string
    release_date: string
    genre_ids: Array<number>
    id: number
    original_title: string
    original_language: string
    title: string
    backdrop_path: string | null
    popularity: number
    vote_count: number
    video: boolean
    vote_average: number
}

type FilmDetails = {
    adult: boolean
    backdrop_path: string | null
    belongs_to_collection: null | {}
    budget: number
    genres: Array<{ id: number, name: String }>
    homepage: string | null
    id: number
    imdb_id: string | null
    original_language: string
    original_title: string
    overview: string | null
    popularity: number
    poster_path: string | null
    production_companies: Array<{ name: string, id: number, logo_path: string | null, origin_country: string }>
    production_countries: Array<{ iso_3166_1: string, name: string }>
    release_date: string
    revenue: number
    runtime: number | null
    spoken_languages: Array<{ iso_639_1: string, name: string }>
    status: string
    tagline: string | null
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}