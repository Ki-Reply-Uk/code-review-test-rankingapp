import PropTypes from 'prop-types';

const Item = ({ item, drag, itemImgObj }) => {
    return (
        <div className="unranked-cell">
            <div
                id={`item-${item.id}`}
                role="button" // Interactive role for the div
                tabIndex="0" // Make it focusable
                onKeyPress={drag} // Keyboard event listener for accessibility
                onClick={drag} // Mouse event listener
                style={{ cursor: "pointer" }}
            >
                <img
                    src={itemImgObj.image}
                    alt={`Item ${item.id}`} // Meaningful alt text
                />
            </div>
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