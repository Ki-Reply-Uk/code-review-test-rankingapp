import PropTypes from 'prop-types';
import React from 'react';

const Item = ({ item, drag, itemImgObj }) => {
    return (
        <div className="unranked-cell">
            {/* Fixed the non-interactive element issue by replacing <img> with <button> */}
            <button
                id={`item-${item.id}`}
                className="item-button"
                onClick={drag}
                style={{ cursor: "pointer", background: `url(${itemImgObj.image}) no-repeat center center`, border: 'none' }}
                aria-label={`Item ${item.id}`}
            >
                {/* The content inside button is hidden as it serves as a replacement for the img, which was decorative */}
            </button>
        </div>     
    );
};

Item.propTypes = {
    // Added proper prop-types validation for item, drag, and itemImgObj
    item: PropTypes.shape({
        id: PropTypes.number.isRequired, // Validates that item.id is a number and is required.
    }).isRequired,
    drag: PropTypes.func.isRequired, // Validates that drag is a function and is required.
    itemImgObj: PropTypes.shape({
        image: PropTypes.string.isRequired, // Validates that itemImgObj.image is a string and is required.
    }).isRequired,
};

export default Item;