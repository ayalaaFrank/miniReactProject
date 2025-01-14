import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { detailsStyle  } from "../styles";

function DishDetails({addDish}) {

    
    const navigate = useNavigate(); // יצירת פונקציה לניווט

    const handleToDishList = () => {
        navigate("/dishList"); // ניווט חזרה לרשימת המנות
      };

      const handlToCart = () => {
        navigate("/cart"); // ניווט חזרה לרשימת המנות
      };
      
    const {id,name,details,price,img}= useParams();

    const handleAddToCart = ()=>{
        addDish({id,name,price})
    }
  

    return (
        <div style={detailsStyle.container}>
            <img src={"/images/" + img} style={detailsStyle.image} alt={name} />
            <div style={detailsStyle.details}>
                <h1>פרטי המנה:</h1>
                <p>{details}</p>    
                <p>מחיר המנה: {price}</p>
                <div style={detailsStyle.buttonsContainer}>
                    <button style={detailsStyle.button} onClick={handleAddToCart}>
                        הוסף מנה לסל
                    </button>
                    <button style={detailsStyle.button} onClick={handleToDishList}>
                        המשך קנייה
                    </button>
                    <button style={detailsStyle.button} onClick={handlToCart}>
                        <img src={"/images/cart.jpg"} style={{ width: '25px', height: '25px' }} alt="עגלה" />
                    </button>
                </div>
            </div>
        </div>
    
    
    );
}

export default DishDetails;
