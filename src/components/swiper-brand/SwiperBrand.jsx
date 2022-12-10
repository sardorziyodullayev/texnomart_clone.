import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import c from './SwiperBrand.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';

function SwiperBrand() {
    return (
        <>
            <Swiper
                slidesPerView={8}
                spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className={c.swiperBrandWrapper}
            >
                <SwiperSlide className={c.slideBrandBox}>
                    <img className={c.slideBrandImg} src="https://backend.texnomart.uz//images/brands/2022101404154940058.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className={c.slideBrandBox}>
                    <img className={c.slideBrandImg} src="https://backend.texnomart.uz//images/brands/2022101404501355729.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className={c.slideBrandBox}>
                    <img className={c.slideBrandImg} src="https://backend.texnomart.uz//images/brands/2022101404542676301.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className={c.slideBrandBox}>
                    <img className={c.slideBrandImg} src="https://backend.texnomart.uz//images/brands/2022101404481916020.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className={c.slideBrandBox}>
                    <img className={c.slideBrandImg} src="https://backend.texnomart.uz//images/brands/2022101405315369098.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className={c.slideBrandBox}>
                    <img className={c.slideBrandImg} src="https://backend.texnomart.uz//images/brands/2022101404183539183.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className={c.slideBrandBox}>
                    <img className={c.slideBrandImg} src="https://backend.texnomart.uz//images/brands/2022101404450190315.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className={c.slideBrandBox}>
                    <img className={c.slideBrandImg} src="https://backend.texnomart.uz//images/brands/2022101404474125545.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className={c.slideBrandBox}>
                    <img className={c.slideBrandImg} src="https://backend.texnomart.uz//images/brands/2022101404461797247.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className={c.slideBrandBox}>
                    <img className={c.slideBrandImg} src="https://backend.texnomart.uz//images/brands/2022101404240931733.webp" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default SwiperBrand;
