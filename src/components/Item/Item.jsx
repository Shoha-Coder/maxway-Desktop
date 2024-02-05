import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useCart } from 'react-use-cart';
import Style from "./Item.module.scss"
import { useLocation } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import { t } from 'i18next';

const Item = () => {
    const { items, updateItemQuantity } = useCart();
    const { i18n } = useTranslation();
    const currentLang = i18n.language
    const router = useLocation()
    const [itemShow, setItemShow] = useState(false)
    const handleShowFunc = () => {
        setItemShow(prev => !prev)
    }
    return (
        <div className={`${Style.Items} ${router.pathname === "/checkout" ? (itemShow ? Style.T10 : "") : ""}`}>
            <h1 className={`${Style.List} ${router.pathname !== "/checkout" ? Style.None : Style.List} ${itemShow ? "" : Style.ItemHide}`} onClick={handleShowFunc}>{t("ProductsList")} <FaChevronLeft style={itemShow ? { transform: "rotate(-90deg)", transition: ".5s ease" } : { transition: ".5s ease" }} size={15} /></h1>
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
                    return (
                        <div className={`${Style.Item} ${router.pathname === "/checkout" ? (itemShow ? Style.ItemShow : Style.None) : ""}`} key={item.id}>
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
                    )
                })
            }
        </div>
    )
}

export default Item