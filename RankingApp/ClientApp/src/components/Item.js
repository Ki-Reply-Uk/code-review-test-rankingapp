import PropTypes from 'prop-types';

const Item = ({ item, drag, itemImgObj }) => {
    return (
        <div className="unranked-cell">
            <div 
                role="button" 
                tabIndex={0} 
                id={`item-${item.id}`} 
                style={{ cursor: "pointer", backgroundImage: `url(${itemImgObj.image})` }}
                onKeyPress={drag}
                onClick={drag}
            />
        </div>
    );
};

Item.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired
    }).isRequired,
    drag: PropTypes.func.isRequired,
    itemImgObj: PropTypes.shape({
        image: PropTypes.string.isRequired
    }).isRequired
};

export default Item;