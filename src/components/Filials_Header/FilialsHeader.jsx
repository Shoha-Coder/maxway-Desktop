import React from 'react'
import { Link } from 'react-router-dom';
import Style from "./FilialsHeader.module.scss"; 
import { useTranslation } from 'react-i18next';
import "./FilialsHeader.scss";

const FilialsHeader = () => {
    const { t } = useTranslation()
    const Pathname = window.location.pathname;
    let Class1;
    let Class2;
    if (Pathname === "/Filials") {
        Class1 = "CurrentPage1";
        Class2 = "CurrentPage2";
    } else if (Pathname === "/Map") {
        Class1 = "CurrentPage2";
        Class2 = "CurrentPage1";
    }else{
        console.error("error")
    }
    return (
        <div className={Style.Header}>
            <h1 className={Style.Heading}>{t("FilialsHeading")}</h1>
            <div className={Style.Links}>
                <Link to={"/Filials"} className={Class1}> {t("FilialsTab1")} </Link>
                <Link to={"/Map"} className={Class2}> {t("FilialsTab2")} </Link>
            </div>
        </div>
    )
}

export default FilialsHeader