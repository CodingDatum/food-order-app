import React, { useContext , useEffect , useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

import styles from './HeaderCartButton.module.css';

const HeaderCartButton = props => {

    const [btnAnimated, setButtonAnimated] = useState(false);

    const cartCtx = useContext(CartContext);

    // reduce array method returns a single value
    // reduce takes 2 parameters: a function, and a starting value
    // the inner function ALSO takes 2 parameters: 

    const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0)

    const btnClasses= `${styles.button} ${btnAnimated ? styles.bump : ''}`;

    useEffect(()=>{

        if(cartCtx.items.length === 0){
            return;
        }

        setButtonAnimated(true);

        const timer = setTimeout(() => {
            setButtonAnimated(false)
        }, 300);

        return () => {
            clearTimeout(timer)
        }


    }, [cartCtx.items, setButtonAnimated]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )
}

export default HeaderCartButton