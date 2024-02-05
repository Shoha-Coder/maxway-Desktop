import React from 'react'
import Style from "./Total.module.scss"
import { useCart } from 'react-use-cart';
import { useLocation, useNavigate } from 'react-router-dom';
import { t } from 'i18next';

const Total = () => {
    const { cartTotal } = useCart();
    const router = useNavigate()
    const location = useLocation()
    const Delivery = 9000;
    let Del = 1
    if (cartTotal <= 100000) {
        Del = 1
    } else if (cartTotal <= 150000) {
        Del = 2
    } else if (cartTotal <= 200000) {
        Del = 3
    } else if (cartTotal <= 300000) {
        Del = 4
    } else if (cartTotal <= 400000) {
        Del = 5
    } else if (cartTotal === 500000) {
        Del = 6
    } else {
        Del = 6
    }
    const handleBtnFunc = () => {
        if (location.pathname === "/checkout") {
            router("/")
        } else {
            router("/checkout")
        }
    }
    return (
        <div className={Style.Total}>
            <h1 className={Style.Heading}>{t("CartTotal")}</h1>
            <div className={Style.Pay}>
                <h2>{t("CartItems")} <span>{cartTotal.toLocaleString()} {t("narx")}</span></h2>
                <h2>{t("Delivery")} <span>{Delivery * Del} {t("narx")}</span></h2>
                <h2>{t("Checkout")}  <span>{cartTotal} {t("narx")}</span></h2>
                <button onClick={handleBtnFunc}>{location.pathname === "/checkout" ? t('Checkout') : t("BackToCheckout")}</button>
            </div>
        </div>
    )
}

export default Total