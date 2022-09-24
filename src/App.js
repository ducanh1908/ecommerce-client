
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import ProductList from './pages/ProductList/ProductList';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate 
} from "react-router-dom";
function App() {
  const user = true;
  return (
    <Router>
      <Routes> 
        <Route path='/' element={<Home />}/>
        <Route path='/products/:category' element={<ProductList />}/>
        <Route path='/product/:id' element={<Product />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path="/login" element= {user ? <Navigate replace to ="/"/> : <Login />} />
        <Route path='/register' element={user ? <Navigate replace to ="/"/> : <Register />}/>
      </Routes>
    </Router>
 
  // <ProductList />
  // <Product />
  // <Register />
  // <Login />
  // <Cart /> 
  );
}

export default App;
