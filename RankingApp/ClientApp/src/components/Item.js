const Item = ({item, drag, itemImgObj }) => {
    return (
        <div className="unranked-cell">
            <img id={`item-${item.id}`} src={itemImgObj.image}
                alt={`Image for ${item.name}`}
                style={{ cursor: "pointer" }} draggable="true" onDragStart={drag}
            />
        </div>     
    )
}
export default Item;