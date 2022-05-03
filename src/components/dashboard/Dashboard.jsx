import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Dashboard.module.scss';
import logoCompany from '../../assets/img/logoCompany.svg';

const Dashboard = () => {
    return (
        <div>
            <main className={styles.main}>
                <div className={styles.wrapper}>
                    <h1 className={styles.titleMain}>Долго, дорого, богато!</h1>
                    <NavLink to='/catalog' className={styles.mainButton}>
                        Каталог изделий
                    </NavLink>
                    <hr />
                    <div className={styles.companyBlock}>
                        <a href="#"><img src={logoCompany} alt="logoCompany" /></a>
                        <div className={styles.line}></div>
                        <a href="#"><img src={logoCompany} alt="logoCompany" /></a>
                        <div className={styles.line}></div>
                        <a href="#"><img src={logoCompany} alt="logoCompany" /></a>
                        <div className={styles.line}></div>
                        <a href="#"><img src={logoCompany} alt="logoCompany" /></a>
                        <div className={styles.line}></div>
                        <a href="#"><img src={logoCompany} alt="logoCompany" /></a>
                        <div className={styles.line}></div>
                        <a href="#"><img src={logoCompany} alt="logoCompany" /></a>
                        <div className={styles.line}></div>
                        <a href="#"><img src={logoCompany} alt="logoCompany" /></a>
                    </div>
                </div>
            </main>
            <section className={styles.events}>
                <div className={styles.wrapper}>
                    <div className={styles.eventsContainer}>
                        <div className={styles.textBlock}>
                            <h1 className={styles.titleEvents}>Настоящая красота здесь!</h1>
                        </div>
                        <div className={styles.eventsButtons}>
                            <a href="#">Свадьба</a>
                            <a href="#">Мужу</a>
                            <a href="#">Жене</a>
                            <a href="#">Партнеру</a>
                            <a href="#">Коллекции</a>
                            <a href="#">Редкость</a>
                        </div>
                        <div className={styles.eventsCards}>
                            <div className={styles.eventsCard}>
                                <p>Кольца</p>
                            </div>
                            <div className={styles.eventsCard}>
                                <p>Серьги</p>
                            </div>
                            <div className={styles.eventsCard}>
                                <p>Подвески</p>
                            </div>
                            <div className={styles.eventsCard}>
                                <p>Запонки</p>
                            </div>
                            <div className={styles.eventsCard}>
                                <p>Браслеты</p>
                            </div>
                            <div className={styles.eventsCard}>
                                <p>Часы</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.salons}>
                <div className={styles.wrapper}>
                    <div className={styles.salonsContainer}>
                        <p className={styles.firstText}>Не знаете, что выбрать?</p>
                        <h1 className={styles.title}>Посетите наши салоны в Москве</h1>
                        <p className={styles.secondText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis tortor vitae pellentesque egestas quam pulvinar. Pellentesque porttitor velit sit pellentesque. Suspendisse donec pretium id dignissim. Dignissim ultrices eget orci viverra. Egestas quis et ut ultrices imperdiet lectus nulla tempus. Pharetra lorem sem purus nisi libero viverra ipsum.</p>
                        <a href="#">Наши салоны</a>
                    </div>
                </div>
            </section>
            <section className={styles.articles}>
                <div className={styles.wrapper}>
                    <div className={styles.articlesContainer}>
                        <p>Полезные статьи</p>
                        <h1 className={styles.title}>Лучшие советы по подбору дорогих подарков</h1>
                        <div className={styles.imageArticleBlocks}>
                            <div className={styles.imageArticleBlock}>
                                <p>Как выбрать часы для своей будущей жены</p>
                            </div>
                            <div className={styles.imageArticleBlock}>
                                <p>Запонки для мужа: 7 ключевых правил покупки аксессуара</p>
                            </div>
                            <div className={styles.imageArticleBlock}>
                                <p>Как выбрать обручальные кольца молодоженам</p>
                            </div>
                        </div>
                        <a href="#">читать наш блог</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;