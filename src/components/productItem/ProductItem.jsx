import React from 'react';

import styles from './ProductItem.module.scss';

const ProductItem = ({
    img, name, price
}) => {
    return (
        <div className={styles.productItem}>
            <img className={styles.itemImage} src={img} alt="Cataloge" />
            <p className={styles.brandName}>{name}</p>
            <button className={styles.cardButton}>{price} руб</button>
        </div>
    );
};

export default ProductItem;