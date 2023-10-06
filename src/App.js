import Menu from "./components/Menu"
import DrawClass from './components/DrawClass';


const configMenu = {
  configColor: {
  background:'#f4f5fa', 
  itemBackground: '#d0d0d0',
  itemColor:'#666', 
  itemActive:'#a8a8a8', 
  },
  idFirstNivel : 150,
  menuItems : [
  {name:'Another Action', isFolder:false, id:148, idPadre:150},
  {name:'sub menu', isFolder:true, id:2, idPadre:150},
  {name:'Action', isFolder:false, id:3, idPadre:2},
  
  {name:'Another action', isFolder:false, id:4, idPadre:2},
  {name:'something else here', isFolder:false, id:89, idPadre:4},
  {name:'sub menu', isFolder:true, id:5, idPadre:2},
  {name:'Another action', isFolder:false, id:55, idPadre:5},
  {name:'something else here', isFolder:false, id:56, idPadre:5},
  {name:'ultimate', isFolder:false, id:59, idPadre:56},  
],
  } 


const CLASS_UML = {
  name: 'Person',
  attributes: ['+name:str', '+phoneNumber:str', '+emailAddress:str'],
  methods: ['+purchaseParkingPass()'],
  borderColor: '#cc8684',
  headColor: 'white',
  titleBackgroundColor: 'pink',
  textColor: '#333333',
  separatorColor: 'gray'
  };


function App() {
  return (
   //<Menu data={configMenu} />
   <DrawClass data={CLASS_UML}/>
   
  );
}

export default App;
