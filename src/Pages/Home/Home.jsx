import React, { useState } from 'react';
import Style from "./Home.module.scss";
import Cards from '@/components/Cards/Cards';
import i18next from 'i18next';

const Home = () => {
  const [isLangLoad, setIslangLoad] = useState(false)
  if (isLangLoad === false) {
    i18next.changeLanguage("uz")
    setIslangLoad(true)
  }
  return (
    <div className={Style.Home}>
      <Cards />
    </div>
  )
}

export default Home;