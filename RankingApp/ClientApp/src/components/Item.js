import PropTypes from 'prop-types';

const Item = ({ item, drag, itemImgObj }) => {
    const handleKeyDown = (event) => {
        // Implement keyboard controls for drag functionality
        if (event.key === 'Enter' || event.key === ' ') {
            // Call the drag function or simulate drag behavior
            drag(event);
        }
    };

    return (
        <div className="unranked-cell">
            <img
                id={`item-${item.id}`}
                src={itemImgObj.image}
                alt={itemImgObj.description || 'Item image'}
                style={{ cursor: "pointer" }}
                draggable="true"
                onDragStart={drag}
                onKeyDown={handleKeyDown}
                tabIndex={0} // Make the image focusable
            />
        </div>
    );
};

Item.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
    }).isRequired,
    drag: PropTypes.func.isRequired,
    itemImgObj: PropTypes.shape({
        image: PropTypes.string.isRequired,
        description: PropTypes.string,
    }).isRequired,
};

Item.defaultProps = {
    itemImgObj: {
        description: 'No description available',
    },
};

// Note: Unit tests for this component should be created in a separate test file using a testing framework like Jest or React Testing Library. 

export default Item;