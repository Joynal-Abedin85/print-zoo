import Dashboard from "@/components/admin/Dashboard";
import AdminLayout from "@/layout/AdminLayout";
import Layout from "@/layout/Layout";
import Addcart from "@/pages/sites/Addcart";
import CheckoutPage from "@/pages/sites/Checkoutpage";
import Home from "@/pages/sites/Home";
import Product from "@/pages/sites/Product";
import Productsdetails from "@/pages/sites/Productsdetails";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product></Product>,
      },
      {
        path: "/product/:id",
        element: <Productsdetails />,
      },
        {
        path: "/addcart",
        element: <Addcart></Addcart>
      },
              {
        path: "/checkout",
        element: <CheckoutPage></CheckoutPage>
      },
    ],
  },
  // Admin routes
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />, // ✅ Fixed typo
      },
    ],
  },
]);

export default router;
