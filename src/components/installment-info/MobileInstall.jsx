import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import c from './InstallmentInfo.module.css';

import { Pagination } from 'swiper';

function MobileInstall() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true
                }}
                modules={[Pagination]}
                className={c.mobileSwiperList}
            >
                <SwiperSlide className={c.mobileSwiperItem}>
                    <div className={c.imageBox}>
                        <img className={c.swiperImg} src="https://texnomart.uz/_nuxt/img/installment-1.da8d77c.svg" alt="" />
                    </div>
                    <div className={c.mobileText}>
                        <h3 className={c.swiperTitle}>Muddatli to'lovga sotib olish</h3>
                        <p className={c.swiperText}>Texnomartda maishiy texnika mahsulotlari uchun qulay onlayn to'lov</p>
                    </div>
                </SwiperSlide>
                <span className={c.swiperLine}></span>
                <SwiperSlide className={c.mobileSwiperItem}>
                    <div className={c.imageBox}>
                        <img className={c.swiperImg} src="https://texnomart.uz/_nuxt/img/installment-2.de0c0ae.svg" alt="" />
                    </div>
                    <div className={c.mobileText}>
                        <h3 className={c.swiperTitle}>Bepul yetkazib berish</h3>
                        <p className={c.swiperText}>Texnomartga tovarlarni yetkazib berish shartlari</p>
                    </div>
                </SwiperSlide>
                <span className={c.swiperLine}></span>
                <SwiperSlide className={c.mobileSwiperItem}>
                    <div className={c.imageBox}>
                        <img className={c.swiperImg} src="https://texnomart.uz/_nuxt/img/installment-3.575d98a.svg" alt="" />
                    </div>
                    <div className={c.mobileText}>
                        <h3 className={c.swiperTitle}>Mahsulotlar uchun kafolat</h3>
                        <p className={c.swiperText}>Texnomartda mahsulotning kafolati va qaytarilishi haqida hamma narsani</p>
                    </div>
                </SwiperSlide>
                <span className={c.swiperLine}></span>
                <SwiperSlide className={c.mobileSwiperItem}>
                    <div className={c.imageBox}>
                        <img className={c.swiperImg} src="https://texnomart.uz/_nuxt/img/installment-4.4086694.svg" alt="" />
                    </div>
                    <div className={c.mobileText}>
                        <h3 className={c.swiperTitle}>Bonus tizimi</h3>
                        <p className={c.swiperText}>Bonus tizimi</p>
                    </div>
                </SwiperSlide>
                <span className={c.swiperLine}></span>
                <SwiperSlide className={c.mobileSwiperItem}>
                    <div className={c.imageBox}>
                        <img className={c.swiperImg} src="https://texnomart.uz/_nuxt/img/installment-5.513f513.svg" alt="" />
                    </div>
                    <div className={c.mobileText}>
                        <h3 className={c.swiperTitle}>Yordam</h3>
                        <p className={c.swiperText}>Ko'p beriladigan savollar</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default MobileInstall;
