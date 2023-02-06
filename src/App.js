import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./layout/Layout";
import SignUp from "./pages/SignUp";
import { ConfigProvider } from "antd";
import Product from "./pages/Product";
import Cart from "./pages/CartPage";
import Profile from "./pages/Profile";
import SearchPage from "./pages/SearchPage";
import NotFound from "./pages/404";

function App() {
  return (
    <ConfigProvider
      ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FCDD06",
        },
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/product/:id" element={<Product />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ConfigProvider>
  );
}

export default App;
