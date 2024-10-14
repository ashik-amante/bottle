import './Bottle.css'
import PropTypes from 'prop-types'

const Bottle = ({bottle, handlePurchase}) => {
    
    const { name, img,price} = bottle;
    return (
        <div className="bottle box">
            <h3>Name :{name} </h3>
            <img src={img} alt="" />
            <p>Price :{price} </p>
            <button onClick={() => handlePurchase(bottle)} >Purchase</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle : PropTypes.array.isRequired, 
    handlePurchase : PropTypes.func.isRequired
}
export default Bottle;