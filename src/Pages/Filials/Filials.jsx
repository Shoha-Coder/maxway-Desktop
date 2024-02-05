import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Style from "./Filials.module.scss";
import FilialsHeader from '@/components/Filials_Header/FilialsHeader';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';
const Filials = () => {
  const Api = "https://maxway-back.shoha-coder.uz";
  const [filials, setFilials] = useState([]);
  const {i18n} = useTranslation()
  const currentLang = i18n.language
  const GetApiFunc = async () => {
    try {
      const response = await axios.get(`${Api}/filials`);
      setFilials(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    GetApiFunc();
  }, []);
  let soat;
  let vaqt;
  return (
    <div className={Style.Filials}>
      <FilialsHeader />
      {filials.map(filial => {
        if(currentLang === "uz"){
          soat = filial.soat1;
          vaqt = filial.vaqt1
        }else if(currentLang === "ru"){
          soat = filial.soat2
          vaqt = filial.vaqt2
        } else if (currentLang === "en") {
          soat = filial.soat3
          vaqt = filial.vaqt3
        }
        return (
          <div className={Style.Filial} key={filial.id}>
            <div className={Style.Top}>
              <div className={Style.Left}>
                <h1 className={Style.Title}>{filial.title}</h1>
                <p className={Style.Adress}> {filial.adress} </p>
              </div>
              <div className={Style.Right}>
                <h3 className={Style.Soat}> {soat} </h3>
              </div>
            </div>
            <div className={Style.Bottom}>
              <div>
                <p>{t("vaqt")}</p>
                <p>{vaqt}</p>
              </div>
              <div>
                <p className={Style.Number}>{t("telefon")}<a href='tel:+998712005400'> {filial.number} </a></p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default Filials;