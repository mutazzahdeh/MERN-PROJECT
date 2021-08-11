
import './App.css';
import Heder from './components/Footer';
import Footer from './components/Navbar';
import NewsForm from './components/NewsForm';
import {Router} from '@reach/router'
import Main from './views/Main'
import NewsScroll from './components/NewsScroll';
import NewsMain from './views/NewsMain';
import {Aboutus} from "./views/Aboutus"

import Navbar from './components/Navbar';

import useStyles from './components/styles';


import Show from './views/Show';
function App() {
  const classes = useStyles();
  return (
    <div className="App">  
      <Navbar/>
      <Router>
        <NewsMain path="/news" />
        <Main path="/show"></Main>
        <Aboutus path='/aboutus'></Aboutus>
        <Show path='/kalb'/>
      </Router>
      <Heder/>
  </div>


  );
}

export default App;
