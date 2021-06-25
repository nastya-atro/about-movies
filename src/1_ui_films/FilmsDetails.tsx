import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useLocation } from "react-router-dom"
import { getFilmDetaisThunk } from './../2_bll_films/filmsReducer';
import { filmDetailsSelector } from './../2_bll_films/filmsSelector';
import s from './FilmsDetails.module.css'
import Error from './Error';

const FilmsDetails = () => {

    const dispatch = useDispatch()

    const film = useSelector(filmDetailsSelector)

    const [prevFilm, setPrevFilm] = useState(0)
    const [nextFilm, setNextFilm] = useState(0)

    const location = useLocation()
    let adress = location.pathname
    const id = Number(adress.substring(9))

    const films = JSON.parse(localStorage.getItem('films') as string)

    useEffect(() => {
        dispatch(getFilmDetaisThunk(id))

        films.forEach((film: any, index: any) => {
            if (film.id === id) {
                setPrevFilm(index - 1)
                setNextFilm(index + 1)
            }
        })
    }, [id])


    return (
        <div>
            <div className={s.prev_button}><NavLink to='/films'>
                <i className="fas fa-chevron-left"></i>
            </NavLink>
            </div>

            <Error/>

            {film && <div>

                <div className={s.details_poster}>

                    <div className={s.details_poster_prev}>{films[prevFilm] &&

                        <NavLink to={'/details/' + films[prevFilm].id}>
                            <img src={`https://image.tmdb.org/t/p/w500/${films[prevFilm].poster_path}`} alt={films[prevFilm].title}></img>
                        </NavLink>}  </div>

                    <span> <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt={film.title}></img> </span>

                    <div className={s.details_poster_next}> {films[nextFilm] &&

                        <NavLink to={'/details/' + films[nextFilm].id}>
                            <img src={`https://image.tmdb.org/t/p/w500/${films[nextFilm].poster_path}`} alt={films[nextFilm].title}></img>
                        </NavLink>}</div>

                </div>
                <div className={s.details_title}>
                    {film.title}
                </div>

                <div className={s.details_common_info}>

                    <span>{film.release_date}</span>
                    <span className={s.details_common_info_dot}><i className="fas fa-circle"></i></span>
                    <span>{String(film.runtime).charAt(0)}h {String(film.runtime).substr(1)}m</span>
                    <span className={s.details_common_info_dot}><i className="fas fa-circle"></i></span>
                    <span>
                        <span className={s.details_common_info_star}><i className="fas fa-star"></i></span>
                        <span className={s.details_common_info_votu}>{film.vote_average}</span></span>
                </div>

                <div className={s.details_tagline}>
                    <span>Tagline:</span>
                    {film.tagline}
                </div>

                <div className={s.details_overview}>
                    {film.overview}
                </div>

            </div>}
        </div>
    )
}

export default FilmsDetails