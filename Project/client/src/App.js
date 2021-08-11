
import './App.css';
import Heder from './components/Footer';
import Footer from './components/Navbar';
import NewsForm from './components/NewsForm';
import {Router} from '@reach/router'
import Main from './views/Main'
import NewsScroll from './components/NewsScroll';
import NewsMain from './views/NewsMain';
import {Aboutus} from "./views/Aboutus"
<<<<<<< HEAD

import Navbar from './components/Navbar';

import useStyles from './components/styles';


=======
import Show from './views/Show';
>>>>>>> ab09f3cecb93e81eb9897e813b7e5daf79df2a06
function App() {
  const classes = useStyles();
  return (
<<<<<<< HEAD
    <div className="App">  
      <Navbar/>
      <Router>
        <NewsMain path="/news" />
        <Main path="/show"></Main>
        <Aboutus path='/aboutus'></Aboutus>
      </Router>
      <Heder/>
  </div>
=======
    <>    
    <Router>
    
    <NewsMain path="/news" />
     <Main path="/show"></Main>
     <Show path='/kalb'/>
     
   </Router>
    </>


>>>>>>> ab09f3cecb93e81eb9897e813b7e5daf79df2a06
  );
}

export default App;
