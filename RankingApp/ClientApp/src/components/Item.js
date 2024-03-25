const Item = ({ item, drag, itemImgObj: { image } = {} }) => {
    return (
        <div className="unranked-cell">
            <img id={`item-${item.id}`} src={image} alt={item.name || 'Item'}
                style={{ cursor: "pointer" }} draggable="true" onDragStart={drag}
            />
        </div>     
    )
}
export default Item;