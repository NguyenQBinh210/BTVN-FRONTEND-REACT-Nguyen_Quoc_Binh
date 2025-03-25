import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import Page404 from "./page/Page404";
import Layout from "./page/Layout";
import ProductList from "./page/ProductList";
import ProductDetail from "./page/ProductDetail";
import Dashbroad from "./page/Dashbroad";
import Profile from "./page/Profile";
import Setting from "./page/Setting";
import Login from "./page/Login";
import { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/"
            element={isLoggedIn ? <Layout /> : <Navigate to="/login" />}
          >
            <Route index element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="product" element={<ProductList />}></Route>
            <Route path="product/:id" element={<ProductDetail />}></Route>
            <Route path="dashbroad" element={<Dashbroad />}>
              <Route path="profile" element={<Profile />}></Route>
              <Route path="setting" element={<Setting />}></Route>
            </Route>
            <Route path="*" element={<Page404 />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
