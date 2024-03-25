import PropTypes from 'prop-types';
// For buttons or similar elements, use `role="button"` and tabIndex="0"
// if the element does not support it natively to make it interactive.
const Item = ({ item, drag, itemImgObj }) => {
  return (
    <div className="unranked-cell">
      <div
        role="button"
        tabIndex="0"
        onKeyPress={drag}
        onDragStart={drag}
        draggable="true"
        style={{ cursor: 'pointer' }}
      >
        <img
          id={`item-${item.id}`}
          src={itemImgObj.image}
          alt="" // Assuming the image is decorative. Add meaningful text if not.
          draggable="false"
        />
      </div>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
  drag: PropTypes.func.isRequired,
  itemImgObj: PropTypes.shape({
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Item;