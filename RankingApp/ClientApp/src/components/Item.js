import PropTypes from 'prop-types';

const Item = ({ item, drag, itemImgObj }) => {
    return (
        <div className="unranked-cell">
            <img id={`item-${item.id}`} src={itemImgObj.image}
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