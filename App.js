import './App.css';
import Signup from './Components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Test from './Components/Test';
import Signin from './Components/Sigin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Home/Navbar';
import Home from './Home/Home';
import About from './Home/About';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
            <Route  path='/Signup'  element={ <Signup/> } />
            <Route path='/Signin'  element={ <Signin/> } />
            <Route path='/Home'  element={ <Home/> } />
            <Route path='/About' element={<About/> } />
          
         </Routes>
      </BrowserRouter>
      {/* <Navbar/> */}
      
    </div>
  );
}

export default App;
