import React, { useContext } from 'react'
import Style from "./CurrierCall.module.scss"
import { Context } from '@/Context'
import { t } from 'i18next'

const CurrierCall = () => {
    const { canCurrierCall, setCanCurrierCall } = useContext(Context)
    return (
        <div className={Style.CurrierCall}>
            <h1 className={Style.Heading}>{t("CanCureerPhone")}</h1>
            <div className={Style.Radio}>
                <label> <span><input type="radio" name="CanCurrierCal" value={canCurrierCall === true ? true : false} onChange={e => setCanCurrierCall(e.target.checked === true ? true : false)} /></span> {t("Yes")}</label>
                <label> <span><input type="radio" name="CanCurrierCal" value={canCurrierCall === true ? false : true} onChange={e => setCanCurrierCall(e.target.checked === true ? false : true)} /></span> {t("No")}</label>
            </div>
        </div>
    )
}

export default CurrierCall