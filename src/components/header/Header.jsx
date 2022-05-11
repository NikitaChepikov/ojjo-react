import React from 'react';
import { NavLink } from "react-router-dom";

import styles from './Header.module.scss';

import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <nav className={styles.navigation}>
                    <div className={styles.links}>
                            <NavLink to='/dashboard'>
                                Главная
                            </NavLink>
                            <NavLink to='/catalog'>
                                Каталог
                            </NavLink>
                            <NavLink to='/contacts'>
                                Контакты
                            </NavLink>
                        {/* <a href="#">Вакансии</a> */}
                    </div>
                    <NavLink  to='/dashboard'><div className={styles.logo}></div></NavLink>
                    <div className={styles.signupBlock}>
                        <IconContext.Provider value={{ size: '14px' }}>
                            <div>
                                <FaSearch className={styles.searchIcon} />
                            </div>
                        </IconContext.Provider>
                        <div className={styles.inputSearch}>
                            <input type="text" className={styles.search} id="search" />
                            <label for="search" className={styles.label}>Поиск</label>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;