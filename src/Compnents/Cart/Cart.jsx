import PropTypes from 'prop-types'
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    console.log("Cart component rendered with items:", cart);
    return (
        <div>
            <h4>Cart: {cart.length}</h4>
            <div className="cart-container">
                {cart.map(bottle => (
                    <div key={bottle.id}>
                        <img src={bottle.img} alt={bottle.name} />
                        <button onClick={() => handleRemoveFromCart(bottle.id)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
};


Cart.propTypes = {
    cart: PropTypes.array.isRequired ,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;
