import React, { useContext } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';

import styles from './Cart.module.css';


const Cart = props => {

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {

        cartCtx.removeItem(id);

    }

    const cartItemAddHandler = item => {

        const itemToAdd = {...item, amount: 1};
        cartCtx.addItem(itemToAdd)

    }

    const cartItems = cartCtx.items.map((item) => {
        return (
            <CartItem 
                key={item.id} 
                name={item.name} 
                amount={item.amount} 
                price={item.price} 
                onRemove={cartItemRemoveHandler.bind(null, item.id)} 
                onAdd={cartItemAddHandler.bind(null, item)}/>
            )
    }) 

    return (
        <Modal onCloseCart={props.onCloseCart}>
            <ul className={styles["cart-items"]}>
                {cartItems}
            </ul>
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles["button--alt"]} onClick={props.onCloseCart}>Close</button>
                {hasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;