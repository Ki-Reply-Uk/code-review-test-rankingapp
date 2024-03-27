import PropTypes from 'prop-types';

const Item = ({ item, drag, image }) => {
    return (
        <div className="unranked-cell">
            <img src={image} alt={item.name} style={{ cursor: "pointer" }} draggable="true" onDragStart={drag} />
        </div>     
    )
}

Item.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired,
    drag: PropTypes.func.isRequired,
    image: PropTypes.string.isRequired
};

export default Item;