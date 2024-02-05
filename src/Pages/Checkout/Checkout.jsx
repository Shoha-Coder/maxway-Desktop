import React from 'react'
import Style from "./Checkout.module.scss"
import Total from '@/components/Total/Total'
import Item from '@/components/Item/Item'
import PersonalInfo from '@/components/PersonalInfo/PersonalInfo'
import CurrierCall from '@/components/CurrierCall/CurrierCall'
import DeliveryTime from '@/components/DeliveryTime/DeliveryTime'
import DeliveryDetails from '@/components/DeliveryDetails/DeliveryDetails'
import { t } from 'i18next'

const Checkout = () => {
  return (
    <div className={Style.Checkout}>
      <h1>{t("Check")}</h1>
      <div className={Style.Content}>
        <div className={Style.left}>
          <PersonalInfo />
          <DeliveryDetails />
          <DeliveryTime />
          <Item />
          <CurrierCall />
        </div>
        <div className={Style.right}>
          <Total />
        </div>
      </div>
    </div>
  )
}

export default Checkout