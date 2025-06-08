import './App.css'
import HomePage from './pages/HomePage.tsx';
import CartPage from './pages/CartPage.tsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CartProvider } from './context/cartContext';



function App() {
  return (
    <CartProvider>
      <Router>
        <header className="bg-white shadow-sm py-4">
          <nav>
            <Link to="/cart"> Carrito </Link>
            <Link to="/"> Home </Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>
      </Router>
    </CartProvider>
  )
}

export default App