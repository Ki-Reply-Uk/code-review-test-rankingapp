import PropTypes from 'prop-types';

const Item = ({ item, drag, itemImgObj }) => {
    return (
        <div className="unranked-cell">
            <img 
                id={`item-${item.id}`}
                src={itemImgObj.image}
                alt={`item-${item.id}`} // meaningful alt text based on the item id
                style={{ cursor: "pointer" }}
                draggable="true"
                onDragStart={drag}
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
    }).isRequired,
};

export default Item;