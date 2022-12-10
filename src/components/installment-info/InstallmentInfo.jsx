import React from 'react';
import c from './InstallmentInfo.module.css';
import MobileInstall from './MobileInstall';

const InstallmentInfo = () => {
    return (
        <div className={c.installmentInfo}>
            <h2 className={c.installmentInfoTitle}>Telefonlar va maishiy texnika muddatli to'lovga</h2>
            <MobileInstall />
            <div>
                <div className={c.swiper}>
                    <ul className={c.swiperList}>
                        <li className={c.swiperItem}>
                            <div className={c.imageBox}>
                                <img className={c.swiperImg} src="https://texnomart.uz/_nuxt/img/installment-1.da8d77c.svg" alt="" />
                            </div>
                            <h3 className={c.swiperTitle}>Muddatli to'lovga sotib olish</h3>
                            <p className={c.swiperText}>Texnomartda maishiy texnika mahsulotlari uchun qulay onlayn to'lov</p>
                        </li>
                        <span className={c.swiperLine}></span>
                        <li className={c.swiperItem}>
                            <div className={c.imageBox}>
                                <img className={c.swiperImg} src="https://texnomart.uz/_nuxt/img/installment-2.de0c0ae.svg" alt="" />
                            </div>
                            <h3 className={c.swiperTitle}>Bepul yetkazib berish</h3>
                            <p className={c.swiperText}>Texnomartga tovarlarni yetkazib berish shartlari</p>
                        </li>
                        <span className={c.swiperLine}></span>
                        <li className={c.swiperItem}>
                            <div className={c.imageBox}>
                                <img className={c.swiperImg} src="https://texnomart.uz/_nuxt/img/installment-3.575d98a.svg" alt="" />
                            </div>
                            <h3 className={c.swiperTitle}>Mahsulotlar uchun kafolat</h3>
                            <p className={c.swiperText}>Texnomartda mahsulotning kafolati va qaytarilishi haqida hamma narsani</p>
                        </li>
                        <span className={c.swiperLine}></span>
                        <li className={c.swiperItem}>
                            <div className={c.imageBox}>
                                <img className={c.swiperImg} src="https://texnomart.uz/_nuxt/img/installment-4.4086694.svg" alt="" />
                            </div>
                            <h3 className={c.swiperTitle}>Bonus tizimi</h3>
                            <p className={c.swiperText}>Bonus tizimi</p>
                        </li>
                        <span className={c.swiperLine}></span>
                        <li className={c.swiperItem}>
                            <div className={c.imageBox}>
                                <img className={c.swiperImg} src="https://texnomart.uz/_nuxt/img/installment-5.513f513.svg" alt="" />
                            </div>
                            <h3 className={c.swiperTitle}>Yordam</h3>
                            <p className={c.swiperText}>Ko'p beriladigan savollar</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default InstallmentInfo;
