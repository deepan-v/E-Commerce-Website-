
import { Route , Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './Navbar';
import { Index } from './Page/Shop';
import  { CartIndex }  from './Page/Cart';


function App() {
  return (
    <div>
      <Navbar/>
         <Routes>
           <Route path='/' element = {<Index/>}/>
           <Route path='/cart'element ={<CartIndex/>} />
         </Routes>
    </div>  
  );
}

export default App;
