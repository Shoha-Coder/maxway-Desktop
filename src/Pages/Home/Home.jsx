import React from 'react';
import Style from "./Home.module.scss";
import Cards from '@/components/Cards/Container/Cards';

const Home = () => {

  return (
    <div className={Style.Home}>
      <Cards />
    </div>
  )
}

export default Home;