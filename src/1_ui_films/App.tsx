import { BrowserRouter, Redirect, Route, withRouter } from "react-router-dom";
import { Provider } from "react-redux"
import MainPage from './MainPage';
import store from "../2_bll_films/redux";
import FilmsDetails from './FilmsDetails';
import s from './App.module.css'


const App = () => {
  return (<>
  <div className={s.center_container}>
    <div className={s.container}>
      <Route exact path='/' render={() => <Redirect to={"/films"} />} />
      <Route path='/films' render={() => <MainPage />} />
      <Route path='/details/:filmId?' render={() => <FilmsDetails />} />
    </div>
    </div>
    
   <div className={s.footer}>
      <div><i className="fas fa-video"></i></div>
      Movie
    </div>
  </>
  );
}

let AppC = withRouter(App)

const AppContainer = () => {
  return (
    <AppC />
  )
}

let MainApp: React.FC = () => {
  return <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default MainApp
