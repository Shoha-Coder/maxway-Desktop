import React, { Fragment } from 'react';
import 'swiper/css';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import Style from './SwiperHeader.module.scss';
import {Navigation} from "swiper/modules"
import { MdNavigateNext } from "react-icons/md";

const SwiperHeader = () => {
    const { t } = useTranslation();
    return (
        <div className={Style.Swiper} style={{display: "flex"}}>
            
            <Swiper
                spaceBetween={30}
                slidesPerView={8}
                centeredSlides={true}
                slideActiveClass='slideActive'
                modules={[Navigation]}
                navigation={{ nextEl: '.nextButton', prevEl: '.prevButton' }}
                onSlideChange={() => console.log('slide change')}
            >
                {[t('MaxiBox'), t('Klab'), t('Lavash'), t('Shaurma'), t('Donar'), t('Panini'), t('Burger'), t('HotDog'), t('Sneklar'), t('Ichimliklar'), t('Desertlar'), t('Souslar'), t('Saladlar')].map((item, index) => (
                    <SwiperSlide key={index} className={Style.SwiperButton}>
                        {item}
                    </SwiperSlide>
                ))}
            </Swiper>
            <MdNavigateNext />
        </div>
    );
};

export default SwiperHeader;