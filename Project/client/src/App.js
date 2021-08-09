
import './App.css';
import Form from './components/Form'
import {Router} from '@reach/router'
import Main from './views/Main'

function App() {
  return (
    <>
    
   <Router>
     
     <Main path="/show"></Main>
     
   </Router>
    </>


  );
}

export default App;
