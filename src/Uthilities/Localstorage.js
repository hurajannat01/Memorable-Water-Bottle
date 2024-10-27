const getStoreCart = ()=>{
   const storedCartString = localStorage.getItem('cart')
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return [];
} 

const saveCartToLS = cart => {
    const catStringified = JSON.stringify(cart);
    localStorage.setItem('cart' , catStringified);
}

const  removeFromLS = id => {
    const cart = getStoreCart();
    //removing every id
    const remaining = cart.filter(idx => idx !== id)
    saveCartToLS(remaining);
}

const addToLS = id => {
    const cart = getStoreCart();
    cart.push(id);
    // Save to local storage
    saveCartToLS(cart);
};

export {addToLS , getStoreCart ,removeFromLS};