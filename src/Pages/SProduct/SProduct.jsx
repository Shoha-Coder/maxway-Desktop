import React, { useEffect, useState } from "react";
import Style from "./SProduct.module.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "react-use-cart";
import { useTranslation } from "react-i18next";

const SProduct = () => {
    const Api = "http://localhost:9000";
    const { addItem } = useCart();
    const params = useParams();
    const [ProductData, setProductData] = useState([]);
    const {t} = useTranslation()
    useEffect(() => {
        axios.get(`${Api}/products/${params.productId}`)
            .then((response) => setProductData(response.data));
    }, [params.productId]);
    return (
        params.productId ? (
            <div className="div">
                <div className={Style.SContainer} key={ProductData.id}>
                    <div className={Style.Product_Image}>
                        <img src={process.env.PUBLIC_URL + "/images/" + ProductData.img} alt="" />
                    </div>
                    <div className={Style.Properties}>
                        <h1 className={Style.title}>{ProductData.title}</h1>
                        <h2 className={Style.price}>{ProductData.price} {t("narx")}</h2>
                        <br /><br />
                        <Link to={"/cart"}>
                            <button onClick={() => addItem(ProductData)} className={Style.Add}>{t("AddCart")}</button>
                        </Link>
                    </div>
                </div>
            </div>
        ) : null
    );
};

export default SProduct;