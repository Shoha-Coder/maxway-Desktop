import React from 'react';
import Logo from "@/images/logo.webp";
import { Link } from 'react-router-dom';
import Style from "./Footer.module.scss";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { t } from 'i18next';

const Footer = () => {
  return (
    <footer>
      <div className={Style.Footer_Container}>
        <div className={Style.Footer_Links}>
          <img className={Style.Logo} src={Logo} alt="" />
          <Link to={"/Filials"}> {t("Navigation2")} </Link>
          <Link to={"/About"}> {t("Navigation3")} </Link>
          <Link to={"/Contact"}> {t("Navigation4")} </Link>
        </div>
        <div className={Style.Footer_Bottom}>
          <p>{t("Footer")}</p>
          <div className={Style.Links}>
            <a href='https://instagram.com/shoha_coder' target='_blank' rel='noreferrer'>
            <BsInstagram size={25} fill='gray' />
            </a>
            <a href='https://facebook.com/shoha-coder' target='_blank' rel='noreferrer'>
            <BsFacebook size={25} fill='gray' />
            </a>
            <AiFillYoutube size={28} fill='gray' />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer