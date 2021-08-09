
import './App.css';
<<<<<<< HEAD
import Heder from './component/Heder';

function App() {
  return (
    <div className="App">
<Heder/>
    </div>
=======
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


>>>>>>> 03931145177c90a8a320be2fc4f9b82a6f3e9ec4
  );
}

export default App;
