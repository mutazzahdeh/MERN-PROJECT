
import './App.css';
import Heder from './components/Heder';
import {Router} from '@reach/router'
import Main from './views/Main'



function App() {
  return (
    <>
    <Heder/>
   <Router>
     
     <Main path="/show"></Main>
     
   </Router>
    </>


  );
}

export default App;
