
import './App.css';
import Heder from './components/Heder';
import NewsForm from './components/NewsForm';
import {Router} from '@reach/router'
import Main from './views/Main'
import NewsScroll from './components/NewsScroll';
import NewsMain from './views/NewsMain';
import {Aboutus} from "./views/Aboutus"
import Show from './views/Show';
function App() {
  return (
    <>    
    <Router>
    
    <NewsMain path="/news" />
     <Main path="/show"></Main>
     <Show path='/kalb'/>
     
   </Router>
    </>


  );
}

export default App;
