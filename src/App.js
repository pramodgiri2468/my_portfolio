
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sociallinks from "./components/Sociallinks";
import Experiences from "./components/Experiences";
import Contacts from "./components/Contacts";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Sociallinks />
        
        <Routes>
          
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
        
      </div>
    </Router>
  

  
     
    
  );
};

export default App;
