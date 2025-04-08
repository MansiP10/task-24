
import Header from "./header/header";
import "./App.css";
import Categories from "./Categories";
import Home from "./Home";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import About from "./About";
import Payment from "./payment/payment";
import { CartProvider } from "./context/CartContext.jsx";

function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />}/>
        <Route path="/payment" element={<Payment />} />
      </Routes>
      </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
