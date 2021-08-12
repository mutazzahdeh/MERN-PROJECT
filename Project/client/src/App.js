
import './App.css';
import {Router} from '@reach/router'
import Main from './views/Main'
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
      <Navbar/>
      <Router>
        <NewsMain path="/news" />
        <Main path="/show"></Main>
        <Aboutus path='/aboutus'></Aboutus>
        <Show path='/kalb'/>
      </Router>
      <Footer/>
  </div>


  );
}

export default App;
