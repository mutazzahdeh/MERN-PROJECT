
import './App.css';
import {Router} from '@reach/router'
import Main from './views/Main'
import NewsMain from './views/NewsMain';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import useStyles from './components/styles';
import Show from './views/Show';
import NewsScroll from './components/NewsScroll';
import {Aboutus} from "./views/Aboutus"
import ProductDetails from './components/ProductDetails';
import NewsDetails from './components/NewsDetails';




function App() {
  const classes = useStyles();
  return (
    <>    
    
    <div className="App">  
      <Navbar/>
      <Router>
        <NewsMain path="/news" />
        <Main path="/show"></Main>
        <Aboutus path='/aboutus'></Aboutus>
        <Show path='/kalb'/>
        <ProductDetails path = "/product/:id"/>
        <NewsDetails path = "/news/:id"/>
      </Router>
      <Footer/>
  </div>
   </>

  );
}

export default App;
