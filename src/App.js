import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import Contact from './components/Contact'
import Notfound from './components/Notfound'
const App=()=>{
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route  exact path='/' Component={Home}/>
            <Route  exact path='/about' Component={About}/>
            <Route  exact path='/contact' Component={Contact}/>
            <Route  exact path='*' Component={Notfound}/>
        </Routes>
        </BrowserRouter>
    )
}
export default App