import axios from 'axios';

const instanse = axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/`
})

export const filmsApi = {
    getFilms(page: number) {
        return instanse.get(`https://api.themoviedb.org/3/movie/popular?api_key=a2df3d1a7611194432bbdf1fc80540f2&language=en-US&page=${page}`)
        .then(res=>res.data)
    },
    getFilmDetails(id: number){
        return instanse.get(`${id}?api_key=a2df3d1a7611194432bbdf1fc80540f2&language=en-US`)
        .then(res=>res.data)
    }
}