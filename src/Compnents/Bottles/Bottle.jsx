import PropTypes from 'prop-types';
import './Bottle.css'

const Bottle = ({bottle , handleAddtoCard}) => {
    const{name , img , price } = bottle;
    // console.log(bottle);
    return (
        <div className="bottle">
             <h3>Bottle Available:{name} </h3>
             
             <img src={img} alt="" />
             <p>Price: ${price}</p>
             <button onClick={() => handleAddtoCard(bottle)}>Purchase</button>
        </div>
    );
};

Bottle.propTypes ={
    bottle: PropTypes.object.isRequired,
    handleAddtoCard: PropTypes.func.isRequired
}

export default Bottle;