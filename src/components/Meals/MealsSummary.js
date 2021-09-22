import React from 'react';

import styles from './MealsSummary.module.css';

const MealsSummary = props => {
    return (
        <section className={styles.summary}>
            <h2>Delicious Food available for pickup</h2>
            <p>
                Choose your desired meal from our broad selection of available meals and enjoy a delicious lunch or dinner in the comfort of your own home.
            </p>
            <p>
                All meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs.
            </p>
        </section>

    )
}

export default MealsSummary;