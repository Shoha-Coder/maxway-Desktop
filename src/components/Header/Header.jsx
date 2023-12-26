
import React, { useState } from 'react';
import Style from "./Header.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';

const Header = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const handleSlideChange = (swiper) => {
        setActiveSlide(swiper.activeIndex);
    };

    return (
        <Swiper
            className={Style.Swiper}
            slidesPerView={7}
            onSlideChange={handleSlideChange}
        >
            <SwiperSlide className={Style.SwiperSlide}>
                <a href="#MaxiBox" className={activeSlide === 0 ? Style.Active : ''}>🍟🍔🥤Maxi BOX</a>
            </SwiperSlide>
            <SwiperSlide className={Style.SwiperSlide}>
                <a href="#Klab" className={activeSlide === 1 ? Style.Active : ''}>🥪Klab-Sendvich</a>
            </SwiperSlide>
            <SwiperSlide className={Style.SwiperSlide}>
                <a href="#Lavash" className={activeSlide === 2 ? Style.Active : ''}>🌯Lavash</a>
            </SwiperSlide>
            <SwiperSlide className={Style.SwiperSlide}>
                <a href="#Shaurma" className={activeSlide === 3 ? Style.Active : ''}>🌮Shaurma</a>
            </SwiperSlide>
            <SwiperSlide className={Style.SwiperSlide}>
                <a href="#Donar" className={activeSlide === 4 ? Style.Active : ''}>🍱Donar Kebab</a>
            </SwiperSlide>
            <SwiperSlide className={Style.SwiperSlide}>
                <a href="#Panini" className={activeSlide === 5 ? Style.Active : ''}>🫔Panini</a>
            </SwiperSlide>
            <SwiperSlide className={Style.SwiperSlide}>
                <a href="#Burger" className={activeSlide === 6 ? Style.Active : ''}>🍔Burger</a>
            </SwiperSlide>
            <SwiperSlide className={Style.SwiperSlide}>
                <a href="#HotDog" className={activeSlide === 7 ? Style.Active : ''}>🌭Hot-Dog</a>
            </SwiperSlide>
            <SwiperSlide className={Style.SwiperSlide}>
                <a href="#Gazaklar" className={activeSlide === 8 ? Style.Active : ''}>🍟Gazaklar</a>
            </SwiperSlide>
            <SwiperSlide className={Style.SwiperSlide}>
                <a href="#Ichimlik" className={activeSlide === 9 ? Style.Active : ''}>🥤Ichimliklar</a>
            </SwiperSlide>
            <SwiperSlide className={Style.SwiperSlide}>
                <a href="#Desertlar" className={activeSlide === 10 ? Style.Active : ''}>🍰Desertlar</a>
            </SwiperSlide>
            <SwiperSlide className={Style.SwiperSlide}>
                <a href="#Souslar" className={activeSlide === 11 ? Style.Active : ''}>🥫Souslar</a>
            </SwiperSlide>
            <SwiperSlide className={Style.SwiperSlide}>
                <a href="#Tamaddilar" className={activeSlide === 12 ? Style.Active : ''}>🍚Tamaddilar</a>
            </SwiperSlide>
        </Swiper>
    );
}

export default Header;