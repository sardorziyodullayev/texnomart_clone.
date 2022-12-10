// import { Container, Grid, Typography } from '@mui/material';
// import { v4 as uuidv4 } from 'uuid';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TelegramIcon from '@mui/icons-material/Telegram';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import { Link } from 'react-router-dom'
// import './Footer.module.css'

// const Footer = () => {
//     return (
//         <div style={{backgroundColor: '#333', padding: '54px 0 24px 0', color: '#fff'}}>
//             <Container maxWidth="xl">
//                 <Grid container spacing={1}>
//                     <Grid item xs={4}>
//                         <Typography variant='span' mb={14}>Саволингиз борми? Қўнғироқ қилинг</Typography><br />
//                         <Link key={uuidv4} to="/">+998 71 209 99 44</Link>
//                         <div>
//                             <div><FacebookIcon /></div>
//                             <div><TelegramIcon /></div>
//                             <div><InstagramIcon /></div>
//                             <div><YouTubeIcon /></div>
//                         </div>
//                         <img src="https://texnomart.uz/_nuxt/img/playmarket-logo-kr.24580f9.svg" alt="" />
//                         <Link to="/">Дўконлар манзиллари Тошкент</Link>
//                     </Grid>
//                     <Grid item xs={8}>

//                     </Grid>
//                     <Grid item xs={12}>
//                     </Grid>
//                 </Grid>
//             </Container>
//         </div>
//     );
// };

// export default Footer;

import React from 'react';
import { GrFacebookOption } from 'react-icons/gr';
import { FaTelegramPlane, FaYoutube } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';
import ControlledAccordions from './MobileAccardion';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="footer__wrapper">
                <ControlledAccordions />
                <div className="container">
                    <div className="footer__left">
                        <p className="footer__left-span">Savolingiz bormi? Qo'ng'iroq qiling</p>
                        <Link className="footer__left-number" to="/">
                            +998 71 209 99 44
                        </Link>
                        <div className="footer__icon-wrapper">
                            <Link className="footer__icons-box" to="/">
                                <GrFacebookOption className="footer__icons" />
                            </Link>
                            <Link className="footer__icons-box" to="/">
                                <FaTelegramPlane className="footer__icons" />
                            </Link>
                            <Link className="footer__icons-box" to="/">
                                <SiInstagram className="footer__icons" />
                            </Link>
                            <Link className="footer__icons-box" to="/">
                                <FaYoutube className="footer__icons" />
                            </Link>
                        </div>
                        <div className="footer__playmarket">
                            <img src="https://texnomart.uz/_nuxt/img/playmarket-logo-kr.24580f9.svg" alt="" />
                        </div>
                        <Link className="footer__link-map" to="/">
                            Do`konlar manzillari Toshkent
                        </Link>
                    </div>
                    <div className="footer__right">
                        <div className="footer__menu-wrapper">
                            <div className="footer__menu-boxs">
                                <h3 className="footer__menu-title">Kompaniya</h3>
                                <div className="footer__menu-link">
                                    <Link className="footer__menu-text">B2B savdosi</Link>
                                </div>
                                <div className="footer__menu-link">
                                    <Link className="footer__menu-text">Biz haqimizda</Link>
                                </div>
                                <div className="footer__menu-link">
                                    <Link className="footer__menu-text">Yangiliklar va sharhlar</Link>
                                </div>
                                <div className="footer__menu-link">
                                    <Link className="footer__menu-text">IMEI ni tekshirish</Link>
                                </div>
                            </div>
                            <div className="footer__menu-boxs">
                                <h3 className="footer__menu-title">Ma'lumot</h3>
                                <div className="footer__menu-link">
                                    <Link className="footer__menu-text">Bepul yetkazib berish</Link>
                                </div>
                                <div className="footer__menu-link">
                                    <Link className="footer__menu-text">Bonus tizimi</Link>
                                </div>
                                <div className="footer__menu-link">
                                    <Link className="footer__menu-text">Texnomartda ishlash</Link>
                                </div>
                                <div className="footer__menu-link">
                                    <Link className="footer__menu-text">Shaxsiy kabinet</Link>
                                </div>
                                <div className="footer__menu-link">
                                    <Link className="footer__menu-text">Aloqa raqamlari</Link>
                                </div>
                            </div>
                            <div className="footer__menu-boxs">
                                <h3 className="footer__menu-title">Haridorga yordam</h3>
                                <div className="footer__menu-link">
                                    <Link className="footer__menu-text">Muddatli to'lovga sotib olish</Link>
                                </div>
                                <div className="footer__menu-link">
                                    <Link className="footer__menu-text">Mahsulotni qaytarish</Link>
                                </div>
                                <div className="footer__menu-link">
                                    <Link className="footer__menu-text">Mahsulotlar uchun kafolat</Link>
                                </div>
                                <div className="footer__menu-link">
                                    <Link className="footer__menu-text">Ko'p so'raladigan savollar</Link>
                                </div>
                                <Link className="footer__menu-tg">
                                    <FaTelegramPlane className="footer__tg-icon" />
                                    <span>Bonusingizni bilib oling</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <div className="footer__data">
                        <div className="footer__alltext">
                            <p>
                                2016-2022 © texnomart.uz. Barcha huquqlar himoyalangan. Tovarlarning ko'rsatilgan qiymati va ularni sotib
                                olish shartlari joriy sanaga amal qiladi
                            </p>
                        </div>
                        <div>
                            <p className="payment__text">Quyidagi to'lovlarni qabul qilamiz</p>
                            <ul className="payment__wrap">
                                <li className="payment__item">
                                    <Link className="payment__link">
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAcCAYAAAA9UNxEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKXSURBVHgB7ZldSFNhGMf/5pxu6NiWS9FZXkSDUsqosQsF66JCYmAEFhFSSd0lBELdFV30cTm6qS5c3UTQbjJiRs1laR9i2lppa8XKbW3i3Kfbcl+9x2A0FtVFzxrbfvDCec77cOB/nvd5zvO+pyyVSjUDGGSjE4XNNBvdZUzwFLvYguLAyAlOoYhYhSKDB0K0unG8nrGn7TqZCKdP7MnwuXhVj5O9O4HhM0BiGTx5G/jKo6CCVLDh2SxGJ6xpWyatyRJ8z2BCp3IDWgIuxD8akfQ7SQXnxZK+wKLM67qE8tr1oCYvBHPLXn1Kh1fK60ipr4CSvClaFpsbvQNaHDs3BEpKVTrXHNi7HYFQNG3L6yWg5L8LFlTxEYsn07awkg9KiAWX/dFj8M4Y7C5f2lZtbsb+rq2ggjSHBVUVGfZyLJ7lE4nGMuxyXjkoIRXMNRo/4w9GYLY407bN7oHHt5Th01QvBSWkglsVjVn3zmqG8Nm5COe8H/3nb2fNb2tdB0pId0tc9W3vuZxRhX+HRCTEsLYfa1bXgArSCIuqq3BIrfxr/+MHO0jFcpDvh7nHa24YoLk5gkQi+UufSj4PfT3tGOjbBWpydgBgd3mh009hwmSDayGAeDyBtQ1StG1swuF9KtSKq5ELSice/xKrbR4O1lQsLIZw95EJSfZuX7AIc42GxxuCzeFBKPwND8dnWbeVwOOXH1bmRp6/BxWkgifffsGDsXcQs+obCEVW8tnyycVmUnhjceDarSfw+sO4bzTDHwgjwL7T+lEzdqgUoIJ0Sc999SLIIiivE+PppBW7OzbBNDOHRrZBCC5FUcG6KqGADzfLae7a4fahRdEAmYSuUpdyuNDhBBtRPExzgo/gx2+IQsfIRvd3aYsETCPHV5cAAAAASUVORK5CYII="
                                            alt=""
                                        />
                                    </Link>
                                </li>
                                <li className="payment__item">
                                    <Link className="payment__link">
                                        <img src="https://texnomart.uz/_nuxt/img/alif.6e1bcde.png" alt="" />
                                    </Link>
                                </li>
                                <li className="payment__item">
                                    <Link className="payment__link">
                                        <img src="https://texnomart.uz/_nuxt/img/intend.81957d2.png" alt="" />
                                    </Link>
                                </li>
                                <li className="payment__item">
                                    <Link className="payment__link">
                                        <img src="https://texnomart.uz/_nuxt/img/ofb.b3ef2cd.png" alt="" />
                                    </Link>
                                </li>
                                <li className="payment__item">
                                    <Link className="payment__link">
                                        <img src="https://texnomart.uz/_nuxt/img/payme.677630d.png" alt="" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
