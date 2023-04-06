import './App.css';
import Login from './Component/Login';
import Signup from  './Component/Signup';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './Component/HomePage';





function App() {
  return (
    <>
    

    
    <BrowserRouter>
    <Routes>
      
    <Route path='/' element={<Login/>}></Route>
    <Route path='/Signup' element={<Signup/>}></Route>
     <Route path='./HomePage' element={<HomePage/>}></Route>  
    </Routes>
    </BrowserRouter>
  

    </>
  );
  
}

export default App;
