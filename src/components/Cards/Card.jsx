import axios from 'axios';
import Style from "./Card.module.scss";
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';
import { useCart } from 'react-use-cart';

const Card = ({num1 = 0, num2 = 0}) => {
  const Api = "https://maxway-back.shoha-coder.uz";
  const [products, setProducts] = useState([]);
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const { addItem, getItem, updateItemQuantity } = useCart()
  const getApiFunc = async () => {
    await axios.get(Api + "/products").then((response) => {
      setProducts(response.data);
    });
  };

  useEffect(() => {
    getApiFunc();
  }, []);
  return (
    <div className={Style.Cards}>
      {products.slice(num1, num2).map((product) => {
        let title;
        let description;
        if (currentLang === "uz") {
          title = product.title1
          description = product.description1
        } else if (currentLang === "ru") {
          title = product.title2
          description = product.description2
        } else if (currentLang === "en") {
          title = product.title3
          description = product.description3
        } else {
          console.error("error");
        }
        return (
          <div className={Style.Card} key={product.id}>
            <img
              src={process.env.PUBLIC_URL + "/images/" + product.img}
              alt=""
            />
            <div className={Style.Prop}>
              <h2 className={Style.Title}>{title}</h2>
              <p className={Style.Desc}>{description?.substring(0, 53)}{description?.length >= 30 ? "..." : ""}</p>
              <div className={Style.Bottom}>
                <h1 className={Style.Price}>
                  {product.price.toLocaleString()} <span> {t("narx")} </span>
                </h1>
                <button className={`${getItem(product.id) ? Style.ItemQuan : Style.Add}`} onClick={() => getItem(product.id) ? "" : addItem(product)}> {getItem(product.id) ? (
                  <>
                    <button onClick={() => updateItemQuantity(product.id, getItem(product.id).quantity - 1)}>
                      -
                    </button>
                    <h1 className={Style.ItemQuantity}>{getItem(product.id).quantity}</h1>
                    <button onClick={() => updateItemQuantity(product.id, getItem(product.id).quantity + 1)}>
                      +
                    </button>
                  </>
                ) : t("AddBtn")} </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;