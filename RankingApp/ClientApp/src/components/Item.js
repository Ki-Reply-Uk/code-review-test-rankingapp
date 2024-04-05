import PropTypes from 'prop-types';

/**
 * Item component represents a draggable item with an image.
 * @param {Object} props - Component props.
 * @param {Object} props.item - Item data.
 * @param {Function} props.drag - Drag handler function.
 * @param {Object} props.itemImgObj - Image object for the item.
 */
const Item = ({ item, drag, itemImgObj }) => {
    const { id, imageAlt } = item;
    const { image } = itemImgObj;

    return (
        <div className="unranked-cell">
            <img src={image} alt={imageAlt} style={{ cursor: "pointer" }}
                draggable="true" onDragStart={drag}
                aria-grabbed="true" aria-label={`Draggable item ${imageAlt}`} />
        </div>     
    );
};

Item.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        imageAlt: PropTypes.string
    }).isRequired,
    drag: PropTypes.func.isRequired,
    itemImgObj: PropTypes.shape({
        image: PropTypes.string.isRequired
    }).isRequired
};

Item.defaultProps = {
    item: {
        imageAlt: 'Item image'
    }
};

export default Item;