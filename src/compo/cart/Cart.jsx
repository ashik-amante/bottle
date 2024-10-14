import './Cart.css'
import PropTypes from 'prop-types'

const Cart = ({ cart, handleRemove }) => {
    console.log(cart);
    return (
        <div className="cart">
            <h3>Cart : {cart.length} </h3>
            {
                cart.map(bottle => <div key={bottle.id}>
                    <img  src={bottle.img} alt="" />
                    <button onClick={() => handleRemove(bottle.id)}>Remove</button>
                </div>)
            }
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemove: PropTypes.func.isRequired
}
export default Cart;