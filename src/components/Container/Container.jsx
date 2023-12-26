import React from 'react';
import Style from "./Container.module.scss";

const Container = ({children}) => {
  return (
    <div className={Style.Container}>
        {children}
    </div>
  )
}

export default Container;