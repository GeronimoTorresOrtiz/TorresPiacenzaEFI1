const MenuItem = ({data, onClick}) =>{
    return (
      <button 
      className="nav-menu"
      onClick={onClick}>{data.name}</button>
      )
    }

export default MenuItem