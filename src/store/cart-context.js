import React from 'react';

// WHAT WE ADD TO THIS CREATE CONTEXT OBJECT IS REALLY ONLY FOR IDE AUTOCOMPLETION, NOT NECESARRY, BUT GOOD PRACTICE

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
});

export default CartContext;