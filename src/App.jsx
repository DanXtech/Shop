import './App.css'
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
// import Footer from './Components/Footer/Footer';
import men_shopping from './assets/mensBanner.jpg';
import women_Banner from "./assets/womenBanner.jpg"
import kids_shoping from "./assets/kidsBanner.jpg"
function App() {


  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />

            <Route path='/mens' element={<ShopCategory
              banner={men_shopping}
              category="mens"
              Title='Mens wear`s avaliable with easy price'
              Discriptions="we offer you Men`s Product wear`s and if there is any problem with our product you can contact us"
            />}
            />

            <Route path='/womens' element={<ShopCategory
              banner={women_Banner}
              category="womens"
              Title='Womens wear`s avaliable with easy price'
              Discriptions="we offer you Women`s Product wear`s and if there is any problem with our product you can contact us"
            />}
            />

            <Route path='/kids' element={<ShopCategory
              banner={kids_shoping}
              category="kids"
              Title='Kids wear`s avaliable with easy price'
              Discriptions="we offer you Kid`s Product wear`s and if there is any problem with our product you can contact us"
            />}
            />

            <Route path='/product' element={<Product />}>
              {/* I will use this product ID in my product.jsx */}
              <Route path=':productId' element={<Product />} />
            </Route>
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;