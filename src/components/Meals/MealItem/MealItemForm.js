import React, { useRef, useState } from 'react';

import Input from '../../UI/Input';

import styles from './MealItemForm.module.css';

const MealItemForm = props => {

    const [amountIsValid, setAmountIsValid] = useState(true)

    const amountInputRef = useRef()

    const submitFormHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value; //THIS VALUE IS ALWAYS A STRING EVEN THOUGH THE INPUT IS OF TYPE: 'NUMBER'
        const enteredAmountNumber = +enteredAmount;

        if(
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ){
            setAmountIsValid(false)
            return //break out of function, and give the user a message as to why this happened
        }

        props.onAddToCart(enteredAmountNumber)
    }

    return(

        <form className={styles.form} onSubmit={submitFormHandler}>
            <Input
                ref={amountInputRef} 
                label="Amount" 
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
            }} />
            <button>Add</button>
            {!amountIsValid && <p>Please enter a valid amount 1-5.</p>}
        </form>

    )
}

export default MealItemForm