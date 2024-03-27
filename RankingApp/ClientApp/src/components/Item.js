import PropTypes from 'prop-types';

const Item = ({ item, drag, itemImage }) => {
    return (
        <div className="unranked-cell">
            <img src={itemImage} alt={`Item ${item.id}`} style={{ cursor: "pointer" }} draggable="true" onDragStart={drag} />
        </div>     
    );
};

Item.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired
    }).isRequired,
    drag: PropTypes.func.isRequired,
    itemImage: PropTypes.string.isRequired
};

Item.defaultProps = {
    itemImage: 'default-image-url.png'
};

export default Item;