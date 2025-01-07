import { useState } from "react";
import { useParams } from "react-router-dom";
import { detailsStyle  } from "../styles";

function DishDetails({addDish}) {


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
                {/* <p>מספר המנה הוא {id}</p> */}
                <p>מחיר המנה: {price}</p>
                <button style={detailsStyle.button} onClick={handleAddToCart}> הוסף מנה לסל
                </button>
                   {/* <button style={detailsStyle.button}>
                    הוסף מנה לסל
                </button> */}
            </div>
        </div>
    );
}

export default DishDetails;
