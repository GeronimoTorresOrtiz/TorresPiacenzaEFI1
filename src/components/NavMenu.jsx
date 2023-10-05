import "./NavMenu.css"

const NavMenu = ({ name, onClick }) =>{
    return (
        <button
            className="nav-menu"
            onClick={onClick}
        >
            {name}
        </button>
    )
  } 

  export default NavMenu