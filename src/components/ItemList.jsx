import { useState } from "react";
import MenuItem from "./MenuItem";
import "./ItemList.css"

const ItemList = ({ items, menuItems, style }) => {
  const [visibleItemList, setVisibleItemList] = useState(null);

  const handleOnNavClick = (item) => {
    if (!visibleItemList) {
      setVisibleItemList(item.id);
    } else {
      setVisibleItemList(null);
    }
  }

  return (
    <ul className="item-list" style={style}>
        {items.map((item) => {
          const subList = menuItems.filter(value => value.idPadre===item.id);
          return (
            <div className="sublist-container">
              <MenuItem data={{ name: item.name }} onClick={_ => handleOnNavClick(item)}/>
              <ItemList
                items={subList}
                menuItems= {menuItems}
                style={{
                  display: visibleItemList === item.id ? "block" : "none"
                }}
              />
            </div>
        )})}
      </ul>
  )
}
export default ItemList