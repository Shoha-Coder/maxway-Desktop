import React from 'react';
import Style from "./Nav.module.scss";
import { Link, NavLink } from 'react-router-dom';
import Logo from "@/images/logo.webp";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidCart } from "react-icons/bi";
import { useCart } from 'react-use-cart';
import { FaUser } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { BsCheck2 } from "react-icons/bs";
import "./DrDefStyle.scss";
import { t } from 'i18next';

const Nav = () => {
    const { i18n } = useTranslation();
    const { cartTotal } = useCart();
    const currentLang = i18n.language;
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    let img = "uz.svg"
    if (currentLang === "uz") {
        img = "uz.svg";
    } else if (currentLang === "ru") {
        img = "ru.svg";
    } else if (currentLang === "en") {
        img = "en.svg";
    }
    return (
        <React.Fragment>
            <nav className={Style.Nav}>
                <div className={Style.Nav_Container}>
                    <Link to={"/"}>
                        <img src={Logo} alt="Logo" className={Style.Logo} />
                    </Link>
                    <div className={Style.Links}>
                        <NavLink to="/"
                            style={({ isActive }) => ({
                                fontWeight: isActive ? 500 : 400
                            })}>{t("Navigation1")}</NavLink>
                        <NavLink to="/Filials"
                            style={({ isActive }) => ({
                                fontWeight: isActive ? 500 : 400
                            })}>{t("Navigation2")}</NavLink>
                        <NavLink to="/About"
                            style={({ isActive }) => ({
                                fontWeight: isActive ? 500 : 400
                            })}>{t("Navigation3")}</NavLink>
                        <NavLink to="/Contact"
                            style={({ isActive }) => ({
                                fontWeight: isActive ? 500 : 400
                            })}>{t("Navigation4")}</NavLink>
                    </div>
                    <div className={Style.Right}>
                        <FaLocationDot className={Style.LocationDot} size={25} style={{ backgroundColor: "#f1eff4" }} />
                        <h3>{t("dostavka1")}<br /> <span>{t("dostavka2")}</span></h3>
                        <DropdownButton
                            variant="til"
                            className={Style.dropdown}
                            title={<img src={process.env.PUBLIC_URL + "/images/" + img} alt='Til' />}
                        >
                            <div className={Style.DropdownContainer}>
                                <Dropdown.Item
                                    className={`${Style.DrItem} ${i18n.language === "uz" ? Style.activeDrItem : ""}`}
                                    onClick={() => changeLanguage("uz")}
                                >
                                    <img src="https://maxway.uz/images/uz.svg" alt="" />{t("O'zbekcha")} <span><BsCheck2 fontSize={20} /></span>
                                </Dropdown.Item>
                                <Dropdown.Item
                                    className={`${Style.DrItem} ${i18n.language === "ru" ? Style.activeDrItem : ""}`}
                                    onClick={() => changeLanguage("ru")}
                                >
                                    <img src="https://maxway.uz/images/ru.svg" alt="" />{t("Русский")} <span><BsCheck2 fontSize={20} /></span>
                                </Dropdown.Item>
                                <Dropdown.Item
                                    className={`${Style.DrItem} ${i18n.language === "en" ? Style.activeDrItem : ""}`}
                                    onClick={() => changeLanguage("en")}
                                >
                                    <img src="https://maxway.uz/images/en.svg" alt="" />{t("English")} <span><BsCheck2 fontSize={20} /></span>
                                </Dropdown.Item>
                            </div>
                        </DropdownButton>
                        <Link to="/cart">
                            <BiSolidCart className={Style.Cart} />
                        </Link>
                        <h3 className={Style.CartTotal}><span>{cartTotal.toLocaleString()}</span><span> {t("narx")}</span></h3>
                        <FaUser className={Style.User} />
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default Nav;