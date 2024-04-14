import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Products from './components/Products';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Prod from './components/Prod'
import About from './components/About'
import Contact from './components/Contact';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import Footer from './components/Footer'


function App() {
  return (
    
    <Router>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path='/products/:id' element={<Prod/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path="/" element={Navbar  ? <Home /> : <Navigate to="/login" />} />
      </Routes>
      <Footer/>
      
      

    

    </Router>
    
    
  );
}

export default App;
