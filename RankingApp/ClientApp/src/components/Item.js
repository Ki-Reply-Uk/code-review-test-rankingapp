```jsx
﻿import PropTypes from 'prop-types';

const Item = ({ item, drag, itemImgObj }) => {
    if (item && itemImgObj.image) {
        return (
            <div className="unranked-cell">
                <button 
                  id={`item-${item.id}`} 
                  style={{cursor: "pointer", background: "none", border: "none"}} 
                  draggable="true" 
                  onDragStart={drag}
                >
                <img src={itemImgObj.image} alt={`item ${item.id}`} />
                </button>
            </div>     
        );
    }
    return null;
}

Item.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired
    }).isRequired,
    itemImgObj: PropTypes.shape({
        image: PropTypes.string.isRequired
    }).isRequired,
    drag: PropTypes.func.isRequired
};

export default Item;