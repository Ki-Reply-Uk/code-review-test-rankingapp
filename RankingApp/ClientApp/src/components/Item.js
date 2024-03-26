import PropTypes from 'prop-types';

const Item = ({ item, drag, image, description }) => {
    const getImageId = itemId => `item-${itemId}`;
    const imgSrc = image || 'default-image-path';
    const imgAlt = description || 'Description not available';
    
    return (
        <div className="unranked-cell">
            <img id={getImageId(item.id)} src={imgSrc}
                alt={imgAlt}
                style={{ cursor: "pointer" }} draggable="true" onDragStart={drag}
            />
        </div>     
    )
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
    drag: PropTypes.func.isRequired,
    image: PropTypes.string,
    description: PropTypes.string
};

Item.defaultProps = {
    image: 'default-image-path',
    description: 'Description not available'
};

export default Item;