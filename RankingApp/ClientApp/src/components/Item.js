import PropTypes from 'prop-types';

const Item = ({ item, drag, itemImgObj }) => {
    const getImageId = itemId => `item-${itemId}`;
    return (
        <div className="unranked-cell">
            <img id={getImageId(item.id)} src={itemImgObj.image}
                alt={itemImgObj.description || 'Item image'}
                style={{ cursor: "pointer" }} draggable="true" onDragStart={drag}
            />
        </div>     
    )
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
    drag: PropTypes.func.isRequired,
    itemImgObj: PropTypes.object.isRequired
};

export default Item;