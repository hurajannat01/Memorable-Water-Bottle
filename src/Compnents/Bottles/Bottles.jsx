import { useEffect, useState } from "react";
import Bottle from "./Bottle";
import './Bottles.css'
import Cart from "../Cart/Cart";
import { addToLS, getStoreCart,removeFromLS  } from "../../Uthilities/Localstorage";


const Bottles = () => {
 
    const [bottles,setBottles] = useState([]);
    const [cart , setCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data));
    }, []);
    

    // load cart from local storage
    useEffect(() => {
        console.log('called the data' , bottles.length);
        // const storedCart = getStoreCart();
        // console.log(storedCart);
        if(bottles.length){
            const storedCart = getStoreCart();
            console.log(storedCart , bottles);
            const savedCart = [];
        for(const id of storedCart){
            console.log(id);
            const bottle = bottles.find(bottle => bottle.id === id);
           if(bottle){
                  savedCart.push(bottle)
           }
        }
        
       console.log('Saved Cart' , savedCart)
       setCart(savedCart);

        }
    } , [bottles])

    const handleAddtoCard = bottle => {
        const newCart = [...cart , bottle];
        setCart (newCart);
        addToLS(bottle.id);
    }

    const handleRemoveFromCart = id => {
        // visual cart remove
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        // remove from LS 
        removeFromLS(id);
    }



    return (
        <div>
            <h2>Bottles Availble:{bottles.length}</h2>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
        <div className="bottle-container">
        {
            bottles.map(bottle => <Bottle key={bottle.id}
                 bottle={bottle}
                 handleAddtoCard={handleAddtoCard}
                 ></Bottle>)
         }
        </div>
        </div>
    );
};

export default Bottles;