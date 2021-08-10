
import './App.css';
import Heder from './components/Heder';
import NewsForm from './components/NewsForm';
import {Router} from '@reach/router'
import Main from './views/Main'



function App() {
  return (
    <>
    <NewsForm/>
    <br></br>
    <br></br>
    
   <Router>
     
     <Main path="/show"></Main>
     
   </Router>
    </>


  );
}

export default App;
