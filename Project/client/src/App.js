import './App.css';
import { Router } from '@reach/router'
import Main from './views/Main'
import React, {useState, useEffect} from 'react'
import io from 'socket.io-client';
import NewsMain from './views/NewsMain';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import useStyles from './components/styles';
import Admin from './views/Admin'
import Show from './views/Show';
import NewsScroll from './components/NewsScroll';
import { NewsAdminPage } from './views/NewsAdminPage';
import { User } from './views/User';
import { AdminSide } from './views/AdminSide';
import { Aboutus } from "./views/Aboutus"
import ProductDetails from './components/ProductDetails';
import NewsDetails from './components/NewsDetails';
import NewsForm from './components/NewsForm';
import axios from 'axios';




function App() {
  const classes = useStyles();
  const link = { "/aboutus": "من نحن", "/products": "منتجاتنا", "/callus": " اتصل بنا" }
  const [news, setNews] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/news')
            .then(  res=>{
                setNews(res.data);

                setLoaded(true);
            });


    },[])

  return (
    <>

      <div className="App">



        <Router>
          <User path="/">
            <NewsMain news={news}loaded={loaded}setNews={setNews} path="/news" />
            <Main path="/show"></Main>
            <Aboutus path='/aboutus'></Aboutus>
            <Show path='/kalb' />
            <ProductDetails path="/product/:id" />
            <NewsDetails path="/news/:id" />
            <NewsForm path="news/new"/>
          </User>
          <AdminSide path="/admin">
            <Admin path='/login'></Admin>
            
              <NewsForm path="/news" news={news}/>
              
            
            
          </AdminSide>
        </Router>

      </div>
    </>

  );
}

export default App;
