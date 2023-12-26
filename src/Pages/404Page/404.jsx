import React from 'react';
import Style from "./404.module.scss";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Page404 = () => {
  const {t} = useTranslation()
  return (
    <div className={Style.Page_404}>
          <img src="https://maxway.uz/_next/image?url=%2Fimages%2Fnotfound.png&w=256&q=75" className={Style.Page_404_image} alt="" />
          <h1 className={Style.p404}>404</h1>
          <h2>{t("404")}</h2>
          <p>{t("404.1")}</p>
          <Link to={"/"} className={Style.btn}>{t("404Btn")}</Link>
    </div>
  )
}

export default Page404;