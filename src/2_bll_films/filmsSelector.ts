import { AppStateType } from "./reduxToolkit/reduxToolkit"
 
export const filmsSelector=(state: AppStateType)=>{
    return state.toolkit.films
}

export const isLoadingSelector=(state: AppStateType)=>{
    return state.toolkit.isLoading
}

export const filmDetailsSelector=(state: AppStateType)=>{
    return state.toolkit.filmDetails
}

export const currentPageSelector=(state: AppStateType)=>{
    return state.toolkit.currentPage
}


export const totalCountSelector=(state: AppStateType)=>{
    return state.toolkit.totalCount
}

export const errorSelector=(state: AppStateType)=>{
    return state.toolkit.error
}