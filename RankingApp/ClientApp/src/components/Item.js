import PropTypes from 'prop-types';

const Item = ({ item, drag, itemImgObj }) => {
    return (
        <div className="unranked-cell" onDragStart={drag} draggable="true" role="button" tabIndex={0}>
            <img id={`item-${item.id}`} src={itemImgObj.image}
                alt={`Item ${item.id}`} style={{ cursor: "pointer" }}
            />
        </div>
    )
}

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