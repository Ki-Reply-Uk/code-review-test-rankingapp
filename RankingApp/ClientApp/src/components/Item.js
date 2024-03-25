import PropTypes from 'prop-types';

const Item = ({item, drag, itemImgObj }) => {
    // Use of button element to make it interactive
    return (
        <div className="unranked-cell">
            <button id={`item-${item.id}`} style={{ cursor: "pointer" }} draggable="true" onDragStart={drag}>
                <img src={itemImgObj.image} alt={`Image of ${item.name}`} />
            </button>
        </div>     
    )
}

// Adding props validation
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

export default Item;