import React from 'react';

import styles from './Catalog.module.scss';

import catalogImage from '../../assets/img/catalogImage.png';

import carIcon from '../../assets/img/icons/carIcon.svg';
import ListIcon from '../../assets/img/icons/ListIcon.svg';
import penIcon from '../../assets/img/icons/penIcon.svg';
import earringsIcon from '../../assets/img/icons/earringsIcon.svg';

const Catalog = () => {
    return (
        <div>
            <section className={styles.selectBlock}>
                <div className={styles.wrapper}>
                    <div className={styles.selectBlockContainer}>
                        <div className={styles.select}>
                            <p>Бренд</p>
                            <div className={styles.down}></div>
                        </div>
                        <div className={styles.select}>
                            <p>Цена</p>
                            <div className={styles.down}></div>
                        </div>
                        <div className={styles.select}>
                            <p>Для кого</p>
                            <div className={styles.down}></div>
                        </div>
                        <div className={styles.select}>
                            <p>Коллекция</p>
                            <div className={styles.down}></div>
                        </div>
                        <div className={styles.select}>
                            <p>Сезон</p>
                            <div className={styles.down}></div>
                        </div>
                        <div className={styles.select}>
                            <p>Событие</p>
                            <div className={styles.down}></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.catalogeBlock}>
                <div className={styles.wrapper}>
                    <div className={styles.catalogeContainer}>
                        <div className={styles.catalogeFlex}>
                            <div className={styles.catalogeCard}>
                                <img src={catalogImage} alt="Cataloge" />
                                <p className={styles.cardName}>Подвеска</p>
                                <p className={styles.brandName}>Dolce & Gabanna</p>
                                <button className={styles.cardButton}>175 000 ₽</button>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <button className={styles.showMore}>покажите еще</button>
                </div>
            </section>
            <section className={styles.infoAbout}>
                <div className={styles.wrapper}>
                    <div className={styles.infoContainer}>
                        <div className={styles.infoTextBlock}>
                            <p className={styles.infoText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, lorem eu commodo porttitor erat. Amet mauris cursus bibendum in egestas. Nulla porttitor amet quam elit, mauris. Tortor egestas dignissim augue suspendisse rutrum pretium lobortis dolor. Commodo sagittis at amet faucibus faucibus id. Bibendum placerat convallis gravida eu quisque et augue. Sed dignissim amet ut vitae at ornare sed. Commodo sagittis at amet faucibus faucibus id. Bibendum placerat convallis gravida eu quisque et augue. Sed dignissim amet ut vitae at ornare sed.</p>
                            <p className={styles.infoTextButton}>читать полностью</p>
                        </div>
                        <div className={styles.infoIconBlock}>
                            <div>
                                <img src={carIcon} alt="Car" />
                                <p>Бесплатная доставка</p>
                            </div>
                            <div>
                                <img src={ListIcon} alt="List" />
                                <p>Индивидуальный дизайн</p>
                            </div>
                            <div>
                                <img src={penIcon} alt="Pen" />
                                <p>Бесплатная примерка</p>
                            </div>
                            <div>
                                <img src={earringsIcon} alt="Earrings" />
                                <p>Личный подход</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Catalog;