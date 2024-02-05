import React from 'react';
import Style from "./Cards.module.scss";
import { t } from 'i18next';
import Card from './Card';

const Cards = () => {
    return (
        <div className={Style.Cards_Conainer}>
            <img src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Feedc6ad0-1c3c-40fb-a3f2-15b807b7ed30&w=1200&q=75" className={Style.Header} alt="" />
            <h1 id='MaxiBox'>{t("MaxiBox")}</h1>
            <Card num1={0} num2={6} />
            <h1 id='Klab'>{t("Klab")}</h1>
            <Card num1={6} num2={8} />
            <h1 id='Lavash'>{t("Lavash")}</h1>
            <Card num1={8} num2={10} />
            <h1 id='Shaurma'>{t("Shaurma")}</h1>
            <Card num1={10} num2={11} />
            <h1 id='Donar'>{t("Donar")}</h1>
            <Card num1={11} num2={15} />
            <h1 id='Panini'>{t("Panini")}</h1>
            <Card num1={15} num2={16} />
            <h1 id='Burger'>{t("Burger")}</h1>
            <Card num1={16} num2={19} />
            <h1 id='HotDog'>{t("HotDog")}</h1>
            <Card num1={19} num2={23} />
            <h1 id='Gazaklar'>{t("Sneklar")}</h1>
            <Card num1={23} num2={28} />
            <h1 id='Ichimlik'>{t("Ichimliklar")}</h1>
            <Card num1={28} num2={42} />
            <h1 id='Desertlar'>{t("Desertlar")}</h1>
            <Card num1={42} num2={45} />
            <h1 id='Souslar'>{t("Souslar")}</h1>
            <Card num1={45} num2={50} />
            <h1 id='Tamaddilar'>{t("Tamaddilar")}</h1>
            <Card num1={50} num2={52} />
        </div>
    )
}

export default Cards