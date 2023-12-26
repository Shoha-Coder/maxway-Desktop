import React from "react";
import { useCart } from "react-use-cart";
import Style from "./Cart.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Cart() {
    const { items, isEmpty, cartTotal, updateItemQuantity } = useCart();
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language
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
    const Delivery = 9000;
    let Del = 1
    return (
        <React.Fragment>
            <h1>{t("cart")}</h1>
            {
                items.map(item => {
                    let title;
                    let description;
                    if (currentLang === "uz") {
                        title = item.title1
                        description = item.description1
                    } else if (currentLang === "ru") {
                        title = item.title2
                        description = item.description2
                    } else if (currentLang === "en") {
                        title = item.title3
                        description = item.description3
                    }
                    if (cartTotal >= 100000) {
                        Del = 1
                    } else if (cartTotal <= 100000) {
                        Del = 2
                    } else if (cartTotal <= 200000) {
                        Del = 3
                    } else if (cartTotal <= 300000) {
                        Del = 4
                    } else if (cartTotal <= 400000) {
                        Del = 5
                    } else if (cartTotal === 500000) {
                        Del = 6
                    }
                    return (
                        <div className={Style.Items} key={item.id}>
                            <div className={Style.Item}>
                                <div className={Style.ItemInterContent}>
                                    <div className={Style.ItemWrapper}>
                                        <span className={Style.img}>
                                            <img
                                                src={process.env.PUBLIC_URL + "/images/" + item.img}
                                                alt=""
                                                className={Style.item_img}
                                            />
                                        </span>
                                        <div className={Style.Prop}>
                                            <div className={Style.ItemProperty}>
                                                <h1 className={Style.ItemTitle}>{title}</h1>
                                                <p className={Style.ItemDesc}>{description}</p>
                                            </div>
                                            <div className={Style.ItemQuan}>
                                                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                                                    -
                                                </button>
                                                <h1 className={Style.ItemQuantity}>{item.quantity}</h1>
                                                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                                                    +
                                                </button>
                                            </div>
                                            <div className={Style.ItemPrice}>
                                                <h2>{item.price.toLocaleString()} {t("narx")}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div className={Style.Total}>
                <h1 className={Style.Heading}>{t("CartTotal")}</h1>
                <div className={Style.Pay}>
                    <h2>{t("CartItems")} {cartTotal.toLocaleString()} {t("narx")}</h2>
                    <h2>{t("Delivery")} {Delivery * Del} {t("narx")}</h2>
                    <h2>{t("BackToCheckout")} {cartTotal} {t("narx")}</h2>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Cart;