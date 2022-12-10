import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import c from './SwiperCategories.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';

export default function App() {
    return (
        <>
            <h2 className={c.swiperCategoriesTitle}>Ommabop kategoriyalar</h2>
            <Swiper
                className={c.swiperCategoriesWrapper}
                slidesPerView={5}
                spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}
                modules={[Pagination, Navigation]}
            >
                <SwiperSlide className={c.swiperCategoriesBox}>
                    <img
                        className={c.swiperCategoriesImg}
                        src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/smartfon.svg"
                        alt=""
                    />
                    <span>Smartfonlar</span>
                </SwiperSlide>
                <SwiperSlide className={c.swiperCategoriesBox}>
                    <img
                        className={c.swiperCategoriesImg}
                        src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/pilesos.svg"
                        alt=""
                    />
                    <span>Changyutgichlar</span>
                </SwiperSlide>
                <SwiperSlide className={c.swiperCategoriesBox}>
                    <img
                        className={c.swiperCategoriesImg}
                        src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/planshet.svg"
                        alt=""
                    />
                    <span>Planshetlar</span>
                </SwiperSlide>
                <SwiperSlide className={c.swiperCategoriesBox}>
                    <img
                        className={c.swiperCategoriesImg}
                        src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/xolodilnik.svg"
                        alt=""
                    />
                    <span>Muzlatgichlar</span>
                </SwiperSlide>
                <SwiperSlide className={c.swiperCategoriesBox}>
                    <img
                        className={c.swiperCategoriesImg}
                        src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/klimaticheskaya-texnika.svg"
                        alt=""
                    />
                    <span>Havo sovutgichlar</span>
                </SwiperSlide>
                <SwiperSlide className={c.swiperCategoriesBox}>
                    <img
                        className={c.swiperCategoriesImg}
                        src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/lg.svg"
                        alt=""
                    />
                    <span>Televizorlar</span>
                </SwiperSlide>
                <SwiperSlide className={c.swiperCategoriesBox}>
                    <img
                        className={c.swiperCategoriesImg}
                        src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/feni.svg"
                        alt=""
                    />
                    <span>Fenlar</span>
                </SwiperSlide>
                <SwiperSlide className={c.swiperCategoriesBox}>
                    <img
                        className={c.swiperCategoriesImg}
                        src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/stiralnaya_mashina.svg"
                        alt=""
                    />
                    <span>Kir suvish mashinalari</span>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
