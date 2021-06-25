import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import { getFilmsThunk } from "../2_bll_films/filmsReducer";
import { currentPageSelector, filmsSelector, totalCountSelector } from './../2_bll_films/filmsSelector';
import s from './MainPage.module.css'
import Error from './Error';


const MainPage = () => {
    const dispatch = useDispatch()

    const currentPage = useSelector(currentPageSelector)
    const films = useSelector(filmsSelector)
    const totalCount = useSelector(totalCountSelector)

    const [fetching, setFetching] = useState(true)

    const scrollHandler = (e: any) => {
        if (e.target.documentElement.scrollHeight -
            (e.target.documentElement.scrollTop + window.innerHeight) < 100 && films.length < totalCount) {
            setFetching(true)
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [scrollHandler])

    
    const handleClick = (e: any) => {
        sessionStorage.setItem("scrollPosition", window.pageYOffset as any);
    };

    const handleScrollPosition = () => {
        const scrollPosition = sessionStorage.getItem("scrollPosition");
        if (scrollPosition) {
            window.scrollTo(0, parseInt(scrollPosition));
            sessionStorage.removeItem("scrollPosition");
        }
    };

    useEffect(() => {
        localStorage.setItem('films', JSON.stringify(films));

        if (fetching) {
            dispatch(getFilmsThunk(currentPage))
            handleScrollPosition()
            setFetching(false)
        }
    }, [films, fetching])

    
    return (
        <div className={s.card_movie_container}>
            <div className={s.topbar_title}>Movie</div>

            <Error/>

            {films ? films.map((f, index) => <div key={index}> <NavLink to={'/details/' + f.id}><div onClick={handleClick} className={s.card_movie_body} >
                <div className={s.card_movie_poster}>

                    <img src={`https://image.tmdb.org/t/p/w500/${f.poster_path}`} alt={f.title}></img>

                </div>

                <div className={s.card_movie_about}>
                    <div className={s.card_movie_title}>{f.title}</div>
                    <div className={s.card_movie_vote}>
                        <span className={s.card_movie_vote_star}><i className="fas fa-star"></i></span>{f.vote_average}</div>
                    <div className={s.card_movie_overview}>{f.overview}</div>

                </div>

            </div> </NavLink> </div>) : null}
        </div>
    )
}

export default MainPage