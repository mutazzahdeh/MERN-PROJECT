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
import Form from "./components/Form"
import { navigate } from '@reach/router';
import  Test from "./components/Test" 
import AdminPrduct from './views/AdminPrduct';






function App() {

  const [errors, setErrors] = useState([])
  const [task, setTask] = useState([])
  const [infos, setinfos] = useState([])
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState([])

  const formFun = (task) => {
      axios.post("http://localhost:8000/api/product/new", task)
      .then(res=>{
          console.log(res.data)
          setTask(res.data);
          navigate("/show")
  
  
  }) 
      .catch(err=>{
          console.log(err.response)
              const errorResponse = err.response.data.errors; // Get the errors from err.response.data
              const errorArr = []; // Define a temp error array to push the messages in
              for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                  errorArr.push(errorResponse[key].message)
              }
              // Set Errors
              setErrors(errorArr);
          })    
              
  }

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

    useEffect(() => {
      axios.get('http://localhost:8000/api/')
          .then(res => {
              setinfos(res.data);
              console.log(res.data);
              setProducts(res.data)
              setProduct(res.data)
          })
          .catch(err => console.log(err))
  }, [])

  return (
    <>

      <div className="App">



        <Router>
          <User path="/">
            <NewsMain news={news}loaded={loaded}setNews={setNews} path="/news" />
            <Main path="/show"></Main>
            <Aboutus path='/aboutus'></Aboutus>
            <Show infos={infos} products={products} product={product} setProduct={setProduct} setProducts={setProducts} setinfos={setinfos} path='/kalb' />
            <ProductDetails path="/product/:id" />
            <NewsDetails path="/news/:id" />
            <NewsForm path="news/new"/>
            
          </User>
          <AdminSide path="/admin">
            <Admin path='/login'></Admin>
            
              <NewsForm path="/news" news={news}/>
              <AdminPrduct infos={infos} products={products} product={product} setProduct={setProduct} setProducts={setProducts} setinfos={setinfos} path="/product" product formFun={formFun} errors={errors} />
              <Test path="test" ></Test>
            
            
          </AdminSide>
        </Router>

      </div>
    </>

  );
}

export default App;
