import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import ZShop from './pages/ZShop';
import About from './pages/About';
import Contact from './pages/Contact';
import { Context } from "./component/Context";
import { useContext } from "react";
import './component/Navbar.css'


import {DataProvider} from './component/Context'
import Navbar from './component/Navbar';


function App() {
  return (
    <Router>
      <DataProvider>

      <div className="App">
        <Navbar />
        <Routes>
         <Route path='/home' exact element={<Home/>}></Route>
         <Route path='/shop' element={<ZShop />}></Route> 
         <Route path='/about' element={<About />}></Route>
         <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </div>
      </DataProvider>
    </Router>
  );
}

export default App;
