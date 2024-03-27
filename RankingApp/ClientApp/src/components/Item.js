import PropTypes from 'prop-types';

const Item = ({ item, drag, itemImgObj }) => {
    return (
        <div className="unranked-cell">
            <img src={itemImgObj.image}
                alt={itemImgObj.description || 'Item image'}
                style={{ cursor: "pointer" }} draggable="true" onDragStart={drag}
                aria-grabbed="false" // ARIA attribute for accessible drag-and-drop
                role="button" // ARIA role for interactive drag-and-drop
                tabIndex="0" // Make the element focusable
            />
        </div>     
    )
}

Item.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired,
    drag: PropTypes.func.isRequired,
    itemImgObj: PropTypes.shape({
        image: PropTypes.string.isRequired,
        description: PropTypes.string
    }).isRequired
};

Item.defaultProps = {
    itemImgObj: {
        description: '' // Default empty string for alt text if not provided
    }
};

export default Item;