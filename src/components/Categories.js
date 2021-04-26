
import {NavLink} from 'react-router-dom';
import { Drawer as MUIDrawer, List,ListItem,ListItemIcon,ListItemText} from "@material-ui/core";
import fire from "../fire.js";
import Footer from './Footer'
import SideCat from './HomePage/SideCat';
const Categories = ({categories}) => {

    return(
    
      <div>

        <div className="category">
       
     <div className='grid2'>
       {categories.map((category, index)=>(         
       <ul key={index} className="cat-item" >
       <NavLink className="nav-link" to={"/categories/"+ category} >{category}</NavLink>
        </ul>
        ))}
        </div>
        </div>
       
      
     
   
       </div>
    )
   
}

export default Categories;