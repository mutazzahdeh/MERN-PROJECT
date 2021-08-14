import './App.css';
import {Router} from '@reach/router'
import Main from './views/Main'

import NewsMain from './views/NewsMain';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import useStyles from './components/styles';
import Admin from './views/Admin'
import Show from './views/Show';
import NewsScroll from './components/NewsScroll';
import { AdminPage } from './views/AdminPage';
import { User } from './views/User';
import { AdminSide } from './views/AdminSide';
import {Aboutus} from "./views/Aboutus"
import ProductDetails from './components/ProductDetails';
import NewsDetails from './components/NewsDetails';
import NewsForm from './components/NewsForm';
import Tasahel from './components/Tasahel'





function App() {
  const classes = useStyles();

  const link={"/aboutus":"من نحن","/products":"منتجاتنا","/callus":" اتصل بنا"}
  return (
    <>    
    
    <div className="App">  
      

 
      <Router>
        <User path="/">
        <NewsMain path="/news" />
        <Main path="/show"></Main>
        <Aboutus path='/aboutus'></Aboutus>
        <Show path='/products'/>
        <ProductDetails path = "/product/:id"/>
        <NewsDetails path = "/news/:id"/>
        <NewsForm path="/news/new"/>
        <Tasahel path = "/tasahel"></Tasahel>
        </User>
        <AdminSide path="/admin">
        <Admin path='/login'></Admin>
        <AdminPage path='/login/admin' ></AdminPage>
        </AdminSide>
      </Router>
    
  </div>
  </>

  );
}

export default App;
