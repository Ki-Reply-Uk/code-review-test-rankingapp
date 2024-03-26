const Item = ({ item, drag }) => {
    const getImageId = (itemId) => `item-${itemId}`;

    return (
        <div className="unranked-cell">
            <img id={getImageId(item.id)} src={item.image}
                style={{ cursor: "pointer" }} draggable="true" onDragStart={drag} alt={item.description || `Item ${item.id}`}
            />
        </div>     
    )
}
export default Item;