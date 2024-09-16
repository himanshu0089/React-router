import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Category from "./pages/Category";
import Refer from "./Refer";
import Login from "./pages/Login";
import Address from "./pages/Address";
import RequireAuth from "./components/RequireAuth";
import { useAuth } from "./components/UseAuthContext";

// const login =false;
function App() {
  // const [login, setLogin] = useState(false);  
  const { isLoggedIn, setIsLoggedIn } = useAuth(); //passed to login page


  return (
    <>
      <nav>
        <Link to="/">Home</Link> ||
        <Link to="Product">Product</Link> ||
        <Link to="Category"> Category</Link> ||
        <Link to="About">About</Link> ||
        <Link to="Address">Address</Link> ||


      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product/:productId" element={<Product />} />
        <Route path="About" element={<About />} />
        <Route path="Category" element={<Category />} />
        <Route path="Login" element={<Login />} />
        <Route
          path="Address"
          element={
            <RequireAuth >
              {" "}
              <Address />
            </RequireAuth>
          }
        />
        // below code is replaced by Auth
        {/* {!login  && < Route path='Address' element={< Login/>} /> }
      {login &&  <Route path='Address' element={< Address/>} />} */}
      </Routes>
    </>
  );
}

export default App;

{/* <button onClick={() => loginStatus()}>
          {isLoggedIn ? "Logout" : "Login"}
        </button> */}
{/* passed to login page */ }