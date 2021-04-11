

import {NavLink} from 'react-router-dom';
import { Drawer as MUIDrawer, List,ListItem,ListItemIcon,ListItemText} from "@material-ui/core";
const Categories = ({categories}) => {
   
    return(
       <>
        <div className="category">
       {categories.map((category, index)=>(
           
       <ul key={index} className="cat-item">
       <NavLink className="nav-link" to={"/categories/"+ category}>{category}</NavLink>
     </ul>
        ))}
        </div>
       </>
    )
   
}

export default Categories;