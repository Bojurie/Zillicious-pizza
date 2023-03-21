import './App.css';
import {
  BrowserRouter as Router } from "react-router-dom";

import {DataProvider} from './component/Context'
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import './component/Navbar.css'
import AnimatedRoutes from './AnimatedRoutes';

const App = () => {
  return (
    <Router>
      <DataProvider>
        <div className="App">
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </div>
      </DataProvider>
    </Router>
  );
}

export default App;
