import React from 'react';
import AboutImg from "@/images/about.webp";
import Style from "./About.module.scss";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation()
  const aboutKeys = [
    'About.0',
    'About.1',
    'About.2',
    'About.3',
    'About.4',
    'About.6',
    'About.7',
    'About.8',
    'About.9',
    'About.10',
    'About.11',
    'About.12',
  ];
  return (
    <div>
      <h1>{t("AboutHeading")}</h1>
      <img src={AboutImg} className={Style.About_img} alt="" />
      {aboutKeys.map((key, index) => (
        <p key={index} className={Style.p}>
          {t(key)}
          <br />
        </p>
      ))}
    </div>
  )
}

export default About;