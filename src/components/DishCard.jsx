import { Link } from "react-router-dom";
import { cardImgStyle, linkStyle, cardContainerStyle} from "../styles";

function DishCard({ recipe }) {
    
    return <>
    <div style={cardContainerStyle} >
        <img src={"/images/" + recipe.img} style={cardImgStyle} />
        <p>{recipe.name}</p>
        <Link style={linkStyle } to={"/dishDetails/"+recipe.id+"/"+recipe.name+"/"+recipe.details+"/"+recipe.price+"/"+recipe.img}>לפרטים נוספים</Link>
    </div>
     </>

}

export default DishCard;