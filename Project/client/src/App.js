import './App.css';
import {Router} from '@reach/router'
import Main from './views/Main'

import NewsMain from './views/NewsMain';
import {Aboutus} from "./views/Aboutus"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import useStyles from './components/styles';
import LoginForm from './components/LoginForm'
import Show from './views/Show';
import NewsScroll from './components/NewsScroll';








function App() {
  const classes = useStyles();
  const link={"/aboutus":"من نحن","/products":"منتجاتنا","/callus":" اتصل بنا"}
  return (
    <>    
    
    <div className="App">  

      <Navbar LinkTo={link}/>
      <Router>
        <NewsMain path="/news" />
        <Main path="/show"></Main>
        <Aboutus path='/aboutus'></Aboutus>
        <Show path='/kalb'/>
        <LoginForm path='/login'></LoginForm>
      </Router>
      <Footer/>
  </div>
   </>

  );
}

export default App;
