import PropTypes from 'prop-types';

const Item = ({ item, drag, itemImg }) => {
    return (
        <div className="unranked-cell">
            <img src={itemImg} alt={`Item ${item.id}`}
                style={{ cursor: "pointer" }} draggable="true" onDragStart={drag}
            />
        </div>     
    )
}

Item.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired
    }).isRequired,
    drag: PropTypes.func.isRequired,
    itemImg: PropTypes.string.isRequired
};

Item.defaultProps = {
    itemImg: 'default-image-url.png'
};

export default Item;