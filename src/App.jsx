import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Nav/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx"
import Chatbox from "../src/components/Chatbox/Chatbox.jsx"

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx";
import Products from "./pages/Products.jsx";
import ServiceCard from "./components/Services/ServiceCard.jsx";
import Contact from "./pages/Contact.jsx";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      


  

      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} />

        <Route path="/service" element={<Service />} />
        <Route path="/servicecard" element={<ServiceCard />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Chatbox/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
