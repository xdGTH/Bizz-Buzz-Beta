import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./newnew/pages/register";
import Login from "./newnew/pages/login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import VendorRoute from "./components/Routes/VendorRoute";
import ForgotPassword from "./newnew/pages/reset";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
// import CreateProduct from "./pages/Admin/CreateProduct";
import Users from "./pages/Admin/Users";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
// import Products from "./pages/Admin/Products";
// import UpdateProduct from "./pages/Admin/UpdateProduct";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
import CartPage from "./pages/CartPage";
import AdminOrders from "./pages/Admin/AdminOrders";
import Reset from "./newnew/pages/reset";
import VendorDashboard from "./pages/Vendor/VendorDashboard";
import VendorProductCreate from "./pages/Vendor/VendorProductCreate";
import VendorProductUpdate from "./pages/Vendor/VendorProductUpdate";
import VendorProducts from "./pages/Vendor/VendorProduct";
import VendorUsers from "./pages/Vendor/VendorUsers";
import VendorOrders from './pages/Vendor/VendorOrders';
// import { useAuth } from "../../context/auth";
import Barchart from './charts/Barchart';

// user
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          {/* <Route path="admin/create-product" element={<CreateProduct />} /> */}
          {/* <Route path="admin/product/:slug" element={<UpdateProduct />} /> */}
          {/* <Route path="admin/products" element={<Products />} /> */}
          <Route path ="admin/barchart" element= {<Barchart />}/>
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/orders" element={<AdminOrders />} />
        </Route>
        <Route path="/dashboard" element={<VendorRoute />}>
          <Route path="vendor" element={<VendorDashboard />} />
          <Route path="vendor/create-product" element={<VendorProductCreate />} />
          <Route path="vendor/product/:slug" element={<VendorProductUpdate />} />
          <Route path="vendor/products" element={<VendorProducts />} />
          <Route path="vendor/users" element={<VendorUsers />} />
          <Route path="vendor/orders" element={<VendorOrders />} />
        
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<Reset />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
