import React from 'react';

import styles from './Item.module.scss';

import bigImage from '../../assets/img/bigImage.png';
import smallImage from '../../assets/img/smallImage.png';

import catalogImage from '../../assets/img/catalogImage.png';

import carIcon from '../../assets/img/icons/carIcon.svg';
import ListIcon from '../../assets/img/icons/ListIcon.svg';
import penIcon from '../../assets/img/icons/penIcon.svg';
import earringsIcon from '../../assets/img/icons/earringsIcon.svg';


const Item = () => {
    return (
        <div>
            <section className={styles.cardItem}>
                <div className={styles.wrapper}>
                    <div className={styles.cardContainer}>
                        <div className={styles.cardNavigation}>
                            <a href="#">Главная</a>
                            <span>/</span>
                            <a href="#">Каталог</a>
                            <span>/</span>
                            <a href="#">Категория</a>
                            <span>/</span>
                            <a href="#">Подвеска Dolce & Gabarra</a>
                        </div>
                        <div className={styles.cardBlock}>
                            <div className={styles.imagesBlock}>
                                <img className={styles.bigImage} src={bigImage} alt="Big Image" />
                                <img className={styles.smallImage1} src={smallImage} alt="Small Image" />
                                <img className={styles.smallImage2} src={smallImage} alt="Small Image" />
                                <img className={styles.smallImage3} src={smallImage} alt="Small Image" />
                            </div>
                            <div className={styles.infoCardBlock}>
                                <h2 className={styles.nameItem}>Подвеска Dolce & Gabbara</h2>
                                <div>
                                    <p className={styles.infoItem}>Категория:</p>
                                    <p className={styles.infoItem}>Подвески</p>
                                    <p className={styles.infoItem}>Бренд:</p>
                                    <p className={styles.infoItem}>Dolce & Gabbara</p>
                                </div>
                                <hr />
                                <p className={styles.discription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit mattis scelerisque odio nunc. Ipsum quis facilisis turpis vulputate. Viverra dignissim in nec phasellus. Tincidunt est ipsum diam, vestibulum dignissim dui diam. Et nulla sit convallis orci est, fames sit luctus lacus. Nunc donec malesuada amet eget eget pharetra. Ultricies et, ac varius at amet viverra feugiat non massa. <br /> Vel vel in urna, sodales urna ac sed felis. Tellus augue et senectus malesuada faucibus sollicitudin ornare. Sit non et sit enim in ornare velit. Ac imperdiet vitae, orci, nec scelerisque enim sit enim risus.  Et nulla sit convallis orci est, fames sit luctus lacus.</p>
                                <p className={styles.price}>200 000 ₽</p>
                                <div className={styles.buttonBlock}>
                                    <button className={styles.buy}>Купить</button>
                                    <button className={styles.addCart}>Добавить в корзину</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.fullDescription}>
                <div className={styles.wrapper}>
                    <div className={styles.fullDescriptionContainer}>
                        <div className={styles.fullDescriptionTextBlock}>
                            <h2 className={styles.fullDescriptionTextTitle}>Полное описание товара</h2>
                            <p className={styles.fullDescriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, lorem eu commodo porttitor erat. Amet mauris cursus bibendum in egestas. Nulla porttitor amet quam elit, mauris. Tortor egestas dignissim augue suspendisse rutrum pretium lobortis dolor. Commodo sagittis at amet faucibus faucibus id. Bibendum placerat convallis gravida eu quisque et augue. Sed dignissim amet ut vitae at ornare sed. Commodo sagittis at amet faucibus faucibus id. Bibendum placerat convallis gravida eu quisque et augue. Sed dignissim amet ut vitae at ornare sed.</p>
                            <p className={styles.fullDescriptionButton}>читать полностью</p>
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
            <section className={styles.recommendation}>
                <div className={styles.wrapper}>
                    <div className={styles.recommendationContainer}>
                        <div className={styles.recommendationText}>
                            <p>Мы подготовили для вас кое-что еще</p>
                            <h3>Товары, которые могут Вам понравиться</h3>
                        </div>
                        <div className={styles.catalogeFlex}>
                            <div className={styles.catalogeCard}>
                                <img src={catalogImage} alt="Image Item" />
                                <p className={styles.cardName}>Подвеска</p>
                                <p className={styles.brandName}>Dolce & Gabanna</p>
                                <button className={styles.cardButton}>175 000 ₽</button>
                            </div>
                            <div className={styles.catalogeCard}>
                                <img src={catalogImage} alt="Image Item" />
                                <p className={styles.cardName}>Подвеска</p>
                                <p className={styles.brandName}>Dolce & Gabanna</p>
                                <button className={styles.cardButton}>175 000 ₽</button>
                            </div>
                            <div className={styles.catalogeCard}>
                                <img src={catalogImage} alt="Image Item" />
                                <p className={styles.cardName}>Подвеска</p>
                                <p className={styles.brandName}>Dolce & Gabanna</p>
                                <button className={styles.cardButton}>175 000 ₽</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Item;