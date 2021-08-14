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
import { AdminNews } from './views/AdminNews';

import Tasahel from './components/Tasahel';



import ScriptTag from 'react-script-tag';



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
          setinfos([...infos,res.data]);
          setProducts([...products,res.data])

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

  <ScriptTag src="./socket.js" />
  const classes = useStyles();

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
      <ScriptTag src="./socket.js" ></ScriptTag>
      <ScriptTag src="./socket.js" />
      <Router>
      <NewsMain news={news}loaded={loaded}setNews={setNews} path="/news" />
        <User path="/">
        <NewsMain path="/news" />

        <NewsForm path="/news" news={news}/>
        <Main path="/show"></Main>
        <Aboutus path='/aboutus'></Aboutus>
        <Show infos={infos} products={products} product={product} setProduct={setProduct} setProducts={setProducts} setinfos={setinfos} path='/kalb' />
        <ProductDetails path = "/product/:id"/>
        <AdminPrduct infos={infos} products={products} product={product} setProduct={setProduct} setProducts={setProducts} setinfos={setinfos} path="/products"  formFun={formFun} errors={errors} />
        <NewsDetails path = "/news/:id"/>
        <NewsForm path="/news/new"/>
        <Tasahel path = "/"></Tasahel>
        </User>
        <AdminSide path="/admin">
        <Admin path='/login'></Admin>
        <AdminPrduct infos={infos} products={products} product={product} setProduct={setProduct} setProducts={setProducts} setinfos={setinfos} path="/products"  formFun={formFun} errors={errors} />
        <AdminNews path="/news" news={news} setNews={setNews}/>
        </AdminSide>

        <Test path="test" ></Test>
      </Router>
    
  </div>
</>
  );
}

export default App;
