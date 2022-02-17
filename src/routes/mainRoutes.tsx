import { useRoutes } from "react-router-dom";
import { Home } from "../pages/home";
import { Contact } from "../pages/contact";
import { WhishList } from "../pages/whishList";
import { Panel } from "../pages/panel";
import { NotFound } from "../pages/notFound";
import { RequireAuth } from '../RequireAuth'
import { ProductPage } from "../pages/productsPage";
import { ProductPageItem } from "../pages/productPageItem";
import { Checkout } from "../pages/payment/checkout";
import { PayCart } from "../pages/payment/payCart";
import { Order } from "../pages/payment/order";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { Dashboard } from "../pages/myAccount/dashboard";
import { Orders } from "../pages/myAccount/orders";
import { Download } from "../pages/myAccount/download";
import { Address } from "../pages/myAccount/address";
import { Account } from "../pages/myAccount/account";

export const MainRoutes = () => {
    return (
        useRoutes([
            { path: '/', element: <Home /> },
            { path: '/contact', element: <Contact /> },
            { path: '/wishlist/:id', element: <WhishList /> },
            { path: '/productpageitem/:id', element: <ProductPageItem /> },
            { path: '/productpage/:slug', element: <ProductPage /> },
            { path: '/checkout', element: <Checkout /> },
            { path: '/paycart', element: <PayCart /> },
            { path: '/order', element: <Order /> },
            { path: '/panel', element: <RequireAuth><Panel /></RequireAuth> },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },
            { path: '/myaccount/dashboard', element: <Dashboard /> },
            { path: '/myaccount/orders', element: < Orders /> },
            { path: '/myaccount/download', element: < Download /> },
            { path: '/myaccount/address', element: <Address /> },
            { path: '/myaccount/account', element: <Account /> },
            { path: '*', element: <NotFound /> }
        ])
    )
}