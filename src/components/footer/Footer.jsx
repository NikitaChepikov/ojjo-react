import React from 'react';
import styles from './Footer.module.scss';

import visa from '../../assets/img/visa.svg';
import masterCard from '../../assets/img/masterCard.svg';

import { BsFillTelephoneFill, BsYoutube, BsFacebook, BsTelegram } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaEtsy } from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.footerContainer}>
                    <div className={styles.usefullLinks}>
                        <h3>Полезные ссылки</h3>
                        <hr />
                        <a href="#">Доставка</a>
                        <a href="#">Оплата </a>
                        <a href="#">Акции</a>
                        <a href="#">Политика конфиденциальности</a>
                    </div>
                    <div className={styles.pay}>
                        <h3>оплата</h3>
                        <hr />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.</p>
                        <img className={styles.visa} src={visa} alt="visa" />
                        <img className={styles.masterCard} src={masterCard} alt="master card" />
                    </div>
                    <div className={styles.contacts}>
                        <h3>контакты</h3>
                        <hr />
                        <div className={styles.telefoneBlock}>
                            <IconContext.Provider value={{ size: "14px" }}>
                                <div>
                                    <BsFillTelephoneFill />
                                </div>
                            </IconContext.Provider>
                            <a className={styles.telephone} href="tel:8 812 234 56 55">8 (812) 234-56-55</a>
                        </div>
                        <div className={styles.telefoneBlock}>
                            <IconContext.Provider value={{ size: "14px" }}>
                                <div>
                                    <BsFillTelephoneFill />
                                </div>
                            </IconContext.Provider>
                            <a className={styles.telephone} href="tel:8 812 234 56 55">8 (812) 234-56-55</a>
                        </div>
                        <div className={styles.telefoneBlock}>
                            <IconContext.Provider value={{ size: "14px" }}>
                                <div>
                                    <FiMail />
                                </div>
                            </IconContext.Provider>
                            <a className={styles.email} href="mailto:ojjo@ojjo.ru">ojjo@ojjo.ru</a>
                        </div>
                        
                    </div>
                    <div className={styles.socialMedia}>
                        <h3>социальные сети</h3>
                        <hr />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.</p>
                        <div className={styles.iconBlock}>
                            <a href="#">
                                <BsYoutube />
                            </a>
                            <a href="#">
                                <BsFacebook />
                            </a>
                            <a href="#">
                                <BsTelegram />
                            </a>
                            <a href="#">
                                <FaEtsy />
                            </a>
                            <a href="#"></a>
                        </div>
                    </div>
                </div>
                <hr />
                <div className={styles.copyright}>
                    <hr />
                    <div className={styles.copyrightBlock}>
                        <p>(c) 2020 OJJO jewelry</p>
                        <p>Договор публичной офферты</p>
                        <p>Контрагентам</p>
                        <p>Сделано Figma.info</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;