import React from "react";
import { useCart } from "react-use-cart";
import Style from "./Cart.module.scss";
import { Link } from "react-router-dom";
import Item from "@/components/Item/Item";
import Total from "@/components/Total/Total";
import { t } from "i18next";

function Cart() {
    const { isEmpty } = useCart();
    if (isEmpty) {
        return (
            <div className={Style.Empty}>
                <img src="https://maxway.uz/images/empty_cart.svg" alt="" />
                <h1>{t("emptyCart")}</h1>
                <p>{t("emptyCart1")}</p>
                <Link to={"/"}>
                    <button>{t("emptyCartBtn")}</button>
                </Link>
            </div>
        );
    }
    return (
        <React.Fragment>
            <h1>{t("cart")}</h1>
            <div className={Style.Container}>
                <Item />
                <Total />
            </div>
        </React.Fragment>
    )
}

export default Cart;