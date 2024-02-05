import React, { useContext } from 'react'
import Style from "./DeliveryDetails.module.scss"
import { t } from 'i18next'
import { Context } from '@/Context'

const DeliveryDetails = () => {
    const {
        setHome,
        home,
        setFloor,
        floor,
        setApartment,
        apartment,
        setComment,
        comment,
        setPorch,
        porch
    } = useContext(Context)
    return (
        <div className={Style.DeliveryDetails}>
            <div className={Style.Top}>
                <h1>{t('DeliveryAdress')}</h1>
            </div>
            <div className={Style.Middle}>
                <div>
                    <label></label>
                    <div>
                        <input type="text" placeholder={t('Accomondation')} value={home} onChange={e => setHome(e.target.value)} />
                    </div>
                </div>
                <div>
                    <label></label>
                    <div>
                        <input type="text" placeholder={t('Floor')} value={floor} onChange={e => setFloor(e.target.value)} />
                    </div>
                </div>
                <div>
                    <label></label>
                    <div>
                        <input type="text" placeholder={t('Apartment')} value={apartment} onChange={e => setApartment(e.target.value)} />
                    </div>
                </div>
                <div>
                    <label></label>
                    <div>
                        <input type="text" placeholder={t('Porch')} value={porch} onChange={e => setPorch(e.target.value)} />
                    </div>
                </div>
            </div>
            <div className={Style.Bottom}>
                <textarea placeholder={t('Comment')} value={comment} onChange={e => setComment(e.target.value)}></textarea>
            </div>
        </div>
    )
}

export default DeliveryDetails