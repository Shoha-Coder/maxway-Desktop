import axios from 'axios';
import Style from "./Gazaklar.module.scss";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Gazaklar = () => {
  const {t, i18n} = useTranslation()
  const currentLang = i18n.language
  const Api = "http://localhost:9000";
  const [products, setProducts] = useState([])
  const GetApiFunc = async () => {
    await axios.get(Api + `/products`)
      .then(response =>
        setProducts(response.data))
  }
  useEffect(() => {
    GetApiFunc()
  }, [])
  return (
    <div className={Style.Cards}>
      {
        products.slice(23, 28).map(product => {
          let title;
          let description;
          let className = ""
          if (currentLang === "uz") {
            title = product.title1
            description = product.description1
            if (description === undefined) {
              className = Style.DescUndefined
            } else {
              description = product.description1
            }
          } else if (currentLang === "ru") {
            title = product.title2
            description = product.description2
            if (description === undefined) {
              className = Style.DescUndefined
            } else {
              description = product.description2
            }
          } else if (currentLang === "en") {
            title = product.title3
            description = product.description3
            if (description === undefined) {
              className = Style.DescUndefined
            } else {
              description = product.description3
            }
          } else {
            console.error("error");
          }
          return (
            <div className={Style.Card} key={product.id}>
              <img src={process.env.PUBLIC_URL + "/images/" + product.img} alt="" />
              <div className={Style.Prop}>
                <h2 className={Style.Title}> {title} </h2>
                <p className={Style.Desc && className}> {description} </p>
                <div className={Style.Bottom}>
                  <h1 className={Style.Price}> {product.price.toLocaleString()} <span> {t("narx")} </span></h1>
                  <Link to={`/single-product/${product.id}`}>
                    <button className={Style.Add}>{t("AddBtn")}</button>
                  </Link>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Gazaklar