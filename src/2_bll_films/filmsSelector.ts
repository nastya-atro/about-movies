import { AppStateType } from "./redux"

  
export const filmsSelector=(state: AppStateType)=>{
    return state.films.films
}

export const isLoadingSelector=(state: AppStateType)=>{
    return state.films.isLoading
}

export const filmDetailsSelector=(state: AppStateType)=>{
    return state.films.filmDetails
}

export const currentPageSelector=(state: AppStateType)=>{
    return state.films.currentPage
}


export const totalCountSelector=(state: AppStateType)=>{
    return state.films.totalCount
}