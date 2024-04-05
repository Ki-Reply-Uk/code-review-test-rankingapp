import PropTypes from 'prop-types';

/**
 * Item component represents a draggable item with an image.
 * 
 * @param {Object} props - Component props.
 * @param {Object} props.item - Item data.
 * @param {Function} props.drag - Drag handler function.
 * @param {Object} props.itemImgObj - Image object for the item.
 */
const Item = ({ item, drag, itemImgObj }) => {
    const { id, image } = itemImgObj;
    const altText = `Image of ${item.name}`;

    return (
        <div className="unranked-cell">
            <img src={image} alt={altText}
                style={{ cursor: "pointer" }} draggable="true"
                onDragStart={drag} aria-grabbed="true"
            />
        </div>     
    );
};

Item.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired,
    drag: PropTypes.func.isRequired,
    itemImgObj: PropTypes.shape({
        image: PropTypes.string.isRequired
    }).isRequired
};

Item.defaultProps = {
    item: {
        id: 0,
        name: 'Default Item'
    },
    drag: () => {},
    itemImgObj: {
        image: 'default-image.png'
    }
};

export default Item;