
import './App.css';
import {Router} from '@reach/router'
import Main from './views/Main'
<<<<<<< HEAD
import NewsMain from './views/NewsMain';
import {Aboutus} from "./views/Aboutus"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import useStyles from './components/styles';
import Show from './views/Show';





function App() {
  const classes = useStyles();
  return (
    <div>  
=======
import Show from './views/Show'
import NewsScroll from './components/NewsScroll';
import NewsMain from './views/NewsMain';
import {Aboutus} from "./views/Aboutus"



function App() {
  const classes = useStyles();
  return (
    <>    
    
    <div className="App">  
>>>>>>> d0d1eff608fc3f26e61413fe7dc79e1e987447aa
      <Navbar/>
      <Router>
        <NewsMain path="/news" />
        <Main path="/show"></Main>
        <Aboutus path='/aboutus'></Aboutus>
        <Show path='/kalb'/>
      </Router>
      <Footer/>
  </div>
   </>

  );
}

export default App;
