import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './component/Register'
import Run from './component/Login'
function App() {
  return (
    <BrowserRouter>
    <Routes >
      <Route path='/Login' element={<Run/>}></Route> 
      <Route path="/Register" element={<Home/>} ></Route> 
    </Routes>
    
    
    
    </BrowserRouter>
  
  );
}

export default App;
