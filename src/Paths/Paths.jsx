import React from 'react';
import Nav from '@/components/Nav/Nav.jsx';
import Footer from '@/components/Footer/Footer.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from '@/Pages/Home/Home.jsx';
import Filials from '@/Pages/Filials/Filials.jsx';
import Contact from '@/Pages/Contact/Contact.jsx';
import About from '@/Pages/About/Abou.jsxt';
import Page404 from '@/Pages/404Page/404';
import Cart from '@/Pages/Cart/Cart.jsx';
import Style from "./Paths.module.scss";
import Map from '@/Pages/Map/Map.jsx';
import SProduct from '@/Pages/SProduct/SProduct.jsx';
import Loader from '@/components/Loader/Loader.jsx';
import User from '@/Pages/User/User.jsx';

export const Paths = [
    {
        id: 1,
        path: "/",
        el: <Home />
    },
    {
        id: 2,
        path: "/Filials",
        el: <Filials />
    },
    {
        id: 3,
        path: "/About",
        el: <About />
    },
    {
        id: 4,
        path: "/Contact",
        el: <Contact />
    },
    {
        id: 5,
        path: "/Map",
        el: <Map />
    },
    {
        id: 6,
        path: "*",
        el: <Page404 />
    },
    {
        id: 7,
        path: "/single-product/:productId/",
        el: <SProduct />
    },
    {
        id: 8,
        path: "/cart",
        el: <Cart />
    },
    {
        id: 9,
        path: "/user/:userId",
        el: <User />
    }
];

const Index = () => {
    return (
        <React.Fragment>
            <Loader />
            <Nav />
            <div className={Style.Routes}>
                <Routes>
                    {Paths.map((path) => {
                        return <Route key={path.id} path={path.path} element={path.el} />;
                    })}
                </Routes>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default Index;