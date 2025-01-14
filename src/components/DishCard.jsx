
import { Link } from "react-router-dom";
import { cardImgStyle, linkStyle, cardContainerStyle, btnPay, btnRemove } from "../styles";
import { useContext } from "react";
import MyContext from "./context/context";

function DishCard({ recipe: dish, deleteDish }) {
  
  const { currentUser } = useContext(MyContext);

  return (
    <>
      <div style={cardContainerStyle}>
        <img src={"/images/" + dish.img} style={cardImgStyle} alt={dish.name} />
        <p>{dish.name}</p>


        <Link
          style={linkStyle}
          to={"/dishDetails/" + dish.id + "/" + dish.name +"/" + dish.details +"/" + dish.price + "/" + dish.img
          } >
          לפרטים נוספים
        </Link>
        <br />
        {currentUser?.role === "manager" && (
          <button style={btnRemove} onClick={() => deleteDish(dish.id)}>מחק מנה</button>
        )}

      </div>
    </>
  );
}

export default DishCard;
