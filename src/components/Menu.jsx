import { useState } from "react";
import NavMenu from "./NavMenu";
import ItemList from "./ItemList";


const Menu = ({data}) =>{
  const [visibleItemList, setVisibleItemList] = useState(null);

  const handleOnNavClick = (item) => {
    if (!visibleItemList) {
      setVisibleItemList(item.id);
    } else {
      setVisibleItemList(null);
    }
  }

  const navMenues = data.menuItems.filter(value => value.idPadre===data.idFirstNivel);
  return (
    navMenues.map(item => {
      const subMenues = data.menuItems.filter(value => value.idPadre===item.id);
      
      return ( 
        <div className="list-container">
          <NavMenu
            name={item.name}
            onClick={_ => handleOnNavClick(item)}
          />
          <ItemList
            items={subMenues}
            menuItems={data.menuItems}
            style={{
              display: visibleItemList === item.id ? "block" : "none"
            }}
          />
        </div>
      )
    })
  )
}


      
export default Menu