import s from './App.module.css'
import { useSelector } from 'react-redux';
import { errorSelector } from '../2_bll_films/filmsSelector';



const Error=()=>{
const error = useSelector(errorSelector)
 
    return(
        <div className={!error ? s.error_none: s.error_block}>
            {error && error}
            </div>
    )
} 

export default Error