import React from 'react';
import c from './Advertising.module.css';
import PhoneImage from '../../assets/image/phone.png';

const Advertising = () => {
    return (
        <div className={c.advertisingWrapper}>
            <div className={c.advertisingLeft}>
                <img className={c.advertisingImg} src={PhoneImage} alt="" />
            </div>
            <div className={c.advertisingRight}>
                <h2 className={c.advertisingTitle}>Ilovani yuklang</h2>
                <p className={c.advertisingText}>Haridlarni uydan chiqmagan holda mobil ilova orqali amalga oshiring!</p>
                <div className={c.infoQuar}>
                    <img className={c.code} src="https://texnomart.uz/_nuxt/img/quar-code.e14205a.png" alt="" />
                    <span className={c.text}>Kamerani yo`naltiring va Texnomart ilovasini bepul yuklang</span>
                </div>
                <img src="https://texnomart.uz/_nuxt/img/play-market-uz.20f41ac.png" alt="" />
            </div>
        </div>
    );
};

export default Advertising;
