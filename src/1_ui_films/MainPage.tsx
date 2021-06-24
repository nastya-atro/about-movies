import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import { getFilmsThunk } from "../2_bll_films/filmsReducer";
import { currentPageSelector, filmsSelector, totalCountSelector } from './../2_bll_films/filmsSelector';
import s from './MainPage.module.css'


const MainPage = () => {
    const dispatch = useDispatch()

    const currentPage = useSelector(currentPageSelector)
    const films = useSelector(filmsSelector)
    const totalCount = useSelector(totalCountSelector)

    const [fetching, setFetching] = useState(true)
  
    

    useEffect(()=>{
        
        document.addEventListener('scroll', scrollHandler)
        return function(){
            document.removeEventListener('scroll', scrollHandler)
        }
    },[])

    const scrollHandler = (e: any) => {
        if(e.target.documentElement.scrollHeight - 
            (e.target.documentElement.scrollTop + window.innerHeight) < 100 ){

            setFetching(true)
        }
    }

    useEffect(() => {
        if(fetching){
            dispatch(getFilmsThunk(currentPage))
            setFetching(false)
        }    
    }, [fetching])


    return (
        <div className={s.card_movie_container}>
            <div className={s.topbar_title}>Movie</div>
            

            {films ? films.map((f, index) =><div key={index}> <NavLink to={'/details/' + f.id}><div className={s.card_movie_body} >
                <div className={s.card_movie_poster}>
                    <img src={`https://image.tmdb.org/t/p/w500/${f.poster_path}`}></img>
                </div>
                <div className={s.card_movie_about}>
                   <div className={s.card_movie_title}>{f.title}</div> 
                   <div className={s.card_movie_vote}>
                       <span className={s.card_movie_vote_star}><i className="fas fa-star"></i></span>{f.vote_average}</div>
                   <div className={s.card_movie_overview}>{f.overview}</div> 
                </div>

            </div> </NavLink> </div> ) : null}

            
        
        </div>
    )
}

export default MainPage