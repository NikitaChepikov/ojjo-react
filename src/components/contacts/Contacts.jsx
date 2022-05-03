import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Contacts.module.scss';

const Contacts = () => {
    return (
        <section className={styles.contacts}>
            <div className={styles.wrapper}>
                <div className={styles.contactsContainer}>
                    <div className={styles.contactsLinks}>
                        <NavLink to='/contacts'> 
                            Главная
                        </NavLink>
                        <span>/</span>
                        <a>Контакты</a>
                    </div>
                    <h1 className={styles.contactsTitle}>Контакты</h1>
                    <div className={styles.contactsBlock}>
                        <div className={styles.mainOffice}>
                            <h5 className={styles.contactsBlockTitle}>Главный офис</h5>
                            <p>Невский 140, офис 1-5</p>
                            <p className={styles.marginLeft}>Невский 140, офис 1-5</p>
                        </div>
                        <div className={styles.phones}>
                            <h5 className={styles.contactsBlockTitle}>Телефоны</h5>
                            <a href="tel:88124585645">8 (812) 458-56-45</a>
                            <a className={styles.marginLeft} href="tel:8-911-878-00-00">8-911-878-00-00</a>
                        </div>
                        <div className={styles.email}>
                            <h5 className={styles.contactsBlockTitle}>E-mail</h5>
                            <a href="mailto:office@ojjo.com">office@ojjo.com</a>
                            <a className={styles.marginLeft} href="mailto:sales@ojjo.com">office@ojjo.com</a>
                        </div>
                        <div className={styles.addAdress}>
                            <h5 className={styles.contactsBlockTitle}>Доп. адреса</h5>
                            <p>Невский 142, офис 1-5</p>
                            <p className={styles.marginLeft}>Невский 142, офис 1-5</p>
                        </div>
                    </div>
                    <hr />
                    {/* <div style="position:relative;overflow:hidden; border:none"><a href="https://yandex.by/maps/157/minsk/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Минск</a><a href="https://yandex.by/maps/157/minsk/?ll=27.556493%2C53.897527&utm_medium=mapframe&utm_source=maps&z=15.76" style="color:#eee;font-size:12px;position:absolute;top:14px;">Минск — Яндекс.Карты</a><iframe src="https://yandex.by/map-widget/v1/-/CCUyqCxzHC" width="100%" height="750" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div> */}
                </div>
            </div>
        </section>
    );
};

export default Contacts;