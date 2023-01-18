import { NavBar } from "./Components/NavBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemListContainer } from "./Components/ItemListContainer";
import { LandingCarrousel } from "./Components/LandingCarrousel";
import { ItemDetailContainer } from "./Components/ItemDetailContainer";
import { CartProvider } from "./Contexts/CartContext";
import { Cart } from "./Components/Cart";
import { Footer } from "./Components/Footer"


const App = () => {
  
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/'  element={<LandingCarrousel />} />
          <Route path='/tienda' element={<ItemListContainer />} />
          <Route path='/:categoryId'  element={<ItemListContainer />} />
          <Route path='/detalles/:itemId'  element={<ItemDetailContainer />} />
          <Route path='/cart'  element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
