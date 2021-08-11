
import './App.css';
import Heder from './components/Heder';
import NewsForm from './components/NewsForm';
import {Router} from '@reach/router'
import Main from './views/Main'
<<<<<<< HEAD
import Show from './views/Show'
=======
import NewsScroll from './components/NewsScroll';
import NewsMain from './views/NewsMain';
import {Aboutus} from "./views/Aboutus"
>>>>>>> 872f165adcab9434e64be93945b1cc484eb8b766



function App() {
  return (
    <>    
    <Router>
    
    <NewsMain path="/news" />
     <Main path="/show"></Main>
<<<<<<< HEAD
     <Show path='/kalb'/>
=======
     <Aboutus path='/aboutus'></Aboutus>
>>>>>>> 872f165adcab9434e64be93945b1cc484eb8b766
     
   </Router>
    </>


  );
}

export default App;
