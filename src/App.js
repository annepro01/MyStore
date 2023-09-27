import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Hompage/HomePage";
import AdminDashboard from "./components/Admin/AdminDashboard"
import OrdersList from "./components/Admin/Orders/OdersList";
import AddProduct from "./components/Admin/Products/AddProduct";
import ManageStocks from "./components/Admin/Products/ManageStocks";
import UpdateProduct from "./components/Admin/Products/UpdateProduct";
import AddCoupon from "./components/Admin/Coupons/AddCoupon";
import ManageCoupons from "./components/Admin/Coupons/ManageCoupons";
import UpdateCoupon from "./components/Admin/Coupons/UpdateCoupon";
import CategoryToAdd from "./components/Categories/CategoryToAdd";
import ManageCategories from "./components/Categories/ManageCategories";
import UpdateCategory from "./components/Categories/UpdateCategory";
import AddBrand from "./components/Categories/AddBrand";
import BrandColorList from "./components/Categories/BrandColorList";
import AddColor from "./components/Categories/AddColor";
import ManageOrders from "./components/Admin/Orders/ManageOrders";
import OrderPayment from "./components/User/Products/OrderPayment"
import Customers from "./components/Admin/Orders/Customers";
import ProductsFilters from "./components/Admin/Products/ProductsFilters"
import Product from "./components/User/Products/Product"
import AllCategories from "./components/Hompage/AllCategories";
import AddReview from "./components/User/Reviews/AddReview"
import ShoppingCart from "./components/User/Products/ShoppingCart"
import Login from "./components/User/Forms/Login";
import RegisterForm from "./components/User/Forms/RegisterForm";
import CustomerProfile from "./components/User/Profile/CustomerProfile";

const  App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="admin" element={<AdminDashboard />}>
          {/* products */}
          <Route path="" element={<OrdersList />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="manage-products" element={<ManageStocks />} />
          <Route path="products/edit/:id" element={<UpdateProduct />} />
          {/* coupons */}
          <Route path="add-coupon" element={<AddCoupon />} />
          <Route path="manage-coupon" element={<ManageCoupons />} />
          <Route path="manage-coupon/edit/:id" element={<UpdateCoupon />} />
          {/* Category */}
          <Route path="category-to-add" element={<CategoryToAdd />} />
          <Route path="manage-category" element={<ManageCategories />} />
          <Route path="edit-category/:id" element={<UpdateCategory />} />
          {/* brand category */}
          <Route path="add-brand" element={<AddBrand />} />
          <Route path="all-brands" element={<BrandColorList />} />
          {/* color category  */}
          <Route path="add-color" element={<AddColor />} />
          <Route path="all-colors" element={<BrandColorList />} />
          {/* Orders */}
          <Route path="manage-orders" element={<ManageOrders />} />
          {/* Orders -user  */}
          <Route path="order-payment" element={<OrderPayment />} />
          {/* Orders -customers  */}
          <Route path="customers" element={<Customers />} />
        </Route>
        {/* public links */}
        {/* Products */}
        <Route path="/" element={<HomePage />} />
        <Route path="/products-filters" element={<ProductsFilters />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/all-categories" element={<AllCategories />} />

        {/* review */}
        <Route path="/add-review/:id" element={<AddReview />} />

        {/* shopping cart */}
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/order-payment" element={<OrderPayment />} />
        {/* users */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/customer-profile" element={<CustomerProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
