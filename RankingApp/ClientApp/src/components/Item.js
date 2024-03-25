const Item = ({item, drag, itemImgObj: { image } = {} }) => {
    return (
        <div className="unranked-cell">
            <img id={`item-${item.id}`} src={image}
                alt={`Draggable item ${item.id}`}
                style={{ cursor: "pointer" }} draggable="true" onDragStart={drag}
            />
        </div>     
    )
}
export default Item;