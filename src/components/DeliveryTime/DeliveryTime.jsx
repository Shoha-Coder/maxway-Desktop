import React from 'react'
import { FaClock } from 'react-icons/fa6'
import Style from "./DliveryTime.module.scss"
import { t } from 'i18next'

const DeliveryTime = () => {
    const date = new Date();
    const timeFunc = () => {
        date.setMinutes(date.getMinutes() + 50);

        let hours = date.getHours();
        let minutes = date.getMinutes();

        const formatTime = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12;
        hours = hours ? hours : 12;

        minutes = minutes < 10 ? '0' + minutes : minutes;

        return hours + ':' + minutes + ' ' + formatTime;
    }
    return (
        <div className={Style.DeliveryTime}>
            <div className={Style.Top}>
                <h3>{t("DeliveryTime")}</h3>
            </div>
            <div className={Style.Bottom}>
                <FaClock />
                {`${t('Today')} ~ ${timeFunc()} (50 ${t('Min')})`}
            </div>
        </div>
    )
}

export default DeliveryTime