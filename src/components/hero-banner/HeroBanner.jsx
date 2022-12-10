import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Style file
import c from './HeroBanner.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

function HeroBanner() {
    return (
        <>
            <Swiper
                className={c.heroBannerSwiper}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                //  className="mySwiper"
            >
                <SwiperSlide className={c.heroSlider}>
                    <img
                        className={c.heroSliderImg}
                        src="https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/9272391920uz.webp"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className={c.heroSlider}>
                    <img
                        className={c.heroSliderImg}
                        src="https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/1829711920uz.webp"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className={c.heroSlider}>
                    <img
                        className={c.heroSliderImg}
                        src="https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/7489251920uz.webp"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className={c.heroSlider}>
                    <img
                        className={c.heroSliderImg}
                        src="https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/5602661920uz.webp"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className={c.heroSlider}>
                    <img
                        className={c.heroSliderImg}
                        src="https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/1483331920uz.webp"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className={c.heroSlider}>
                    <img
                        className={c.heroSliderImg}
                        src="https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/2423251920uz.webp"
                        alt=""
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default HeroBanner;
