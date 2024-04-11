import { useState } from 'react';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Detail from './Card/Details/Details';
import Home from './Home/Home';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
          <Route path='/detail' element={<Detail/>}></Route>
          

          
        </Routes>
      </BrowserRouter>

  





      
    </>
  );
}

export default App;
