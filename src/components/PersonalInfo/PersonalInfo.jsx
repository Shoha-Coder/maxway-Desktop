import { Context } from '@/Context'
import React, { useContext } from 'react'
import Style from "./PersonalInfo.module.scss"
import { t } from 'i18next'

const PersonalInfo = () => {
    const {
        name,
        setName,
        phone,
        setPhone
    } = useContext(Context)
    const handleNumberChange = (e) => {
        const limit = 9
        setPhone(e.target.value.slice(0, limit))
    }
    return (
        <div className={Style.PersonalInfo}>
            <h1 className={Style.Heading}>{t("PersonalData")}</h1>
            <div className={Style.Bottom}>
                <div className={Style.Info}>
                    <h3>{t("Name")}</h3>
                    <input type="text" placeholder={t("Name")} value={name} onChange={e => setName("+998" + e.target.value)} />
                </div>
                <div className={`${Style.Info} ${Style.Number}`}>
                    <h3>{t("Phone")}</h3>
                    <input type="number" placeholder={t("Phone")} value={phone} onChange={e => handleNumberChange(e)} maxLength={9} />
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo