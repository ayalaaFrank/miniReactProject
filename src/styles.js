// עיצוב header
export const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    paddingLeft: "140px",
    paddingRight: "120px",
    paddingTop: "18px",
    position: "sticky",
    top: "0",
    zIndex: 10,
    backgroundColor: "transparent", 
    fontSize: "1.2rem",
};
// עיצוב דף הבית
export const homeImg = {
    backgroundImage: `url("/images/open1.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "94vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
    marginTop: "-76px",
    
};
export const homeStyle = {
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgb(22, 0, 0)', 
        padding: "30px",
         paddingBottom:"50px",
    },
    nevigate: {
         margin: "0 20px",
         textAlign: "center",
        backgroundColor: "white",   
    },
    link:{
        color: "black",
        textDecoration: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0 20px",
        textAlign: "center",
        height: "50px",
        fontSize: "1.5rem",
        
    },
    img: {
        width: "360px",
        height: "360px",
        marginBottom: "10px",
    }

};

// עיצוב כיתוב הקישורים
export const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    marginTop: "10px",
};
// עיצוב הפסקה באודות
export const pStyle = {
    fontSize: "1rem",
    color: "#fff",
    textAlign: "right",
    marginRight: "30px",
};
// עיצוב עמוד כללי - אודות
export const aboutDiv = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    fontSize: "0.8rem",
    // background: "rgba(193, 154, 107, 0.79)",
    marginLeft: "150px",
    marginRight: "150px",
    borderRadius: "10px",
    color:"rgba(193, 154, 107, 0.79)",
  
};
//עיצוב טופס יצירת קשר
export const formStyle = {
    container: {
        backgroundColor: "#2c2c2c",
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
        maxWidth: "500px",
        margin: "30px auto",
        textAlign: "center",
    },
    input: {
        width: "90%",
        padding: "15px",
        margin: "15px 0",
        border: "2px solid #444",
        borderRadius: "10px",
        fontSize: "1rem",
        backgroundColor: "#fff",
        color: "black",
        outline: "none",
        fontFamily: "'Poppins', sans-serif",
    },
    inputFocus: {
        borderColor: "rgba(193, 154, 107, 0.79)",
    },
    button: {
        backgroundColor: "rgba(193, 154, 107, 0.79)",
        color: "#1a1a1a",
        border: "none",
        borderRadius: "10px",
        padding: "15px 30px",
        fontSize: "1.2rem",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "transform 0.2s, background-color 0.3s",
        fontFamily: "'Poppins', sans-serif",
    },
    buttonHover: {
        backgroundColor: "rgba(193, 154, 107, 0.79)",
        transform: "scale(1.05)",
    },
};

//עיצוב עמוד מנות
export const dishListStyle = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row", 
    justifyContent: "space-around",
    alignItems: "center",

}
//עיצוב כרטיס המנה
export const cardContainerStyle = {
    alignItems: "center",
    padding: "45px",
    width: "20rem",
    height: "17rem",
    boxShadow: "0px 0px 10px gray",
    color: "#fff",
    borderRadius: "10px",
    margin: "15px",
    marginBottom: "25px"
    //background: "rgba(193, 154, 107, 0.79)",
};
export const cardImgStyle = {
    width: "20rem",
    borderRadius: "10px 10px 0 0",
    
};

export const btnDitels = {
    background: "white",
    width: "30%",
    height: "30px",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(235, 211, 211, 0.1)",
    fontSize: "large",
    cursor: "pointer",

}
//עיצוב עמוד פרטי מנה
export const detailsStyle = {
    container: {
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
        backgroundColor: "black",
        color: "white",
        fontSize: "1.1rem",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0px 4px 50px rgba(255, 254, 254, 0.45)",
        margin: "73px auto",
        width: "50%",
        height: "350px",
    },
    image: {
        width: "280px",
        height: "300px",
        borderRadius: "10px",
        objectFit: "cover",
    },
    details: {
        flex: 1,
        marginLeft: "20px",
        textAlign: "center",
    },
    buttonsContainer: {
        display: "flex", // יוצר סידור בשורה
        justifyContent: "center", // מרכז את הכפתורים
        gap: "10px", // מוסיף רווח בין הכפתורים
        marginTop: "20px",
    },
    button: {
        backgroundColor: "#fff",
        color: "black",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "1rem",
        height: "40px",
    },
};
//עיצוב דף עגלה
export const cartContainer = {
    padding: "20px",
    backgroundColor: "#000", // רקע שחור בולט
    borderRadius: "10px",
    maxWidth: "800px",
    margin: "30px auto",
    fontFamily: "'Arial', sans-serif", // גופן נקי ומודרני
    color: "#fff", // טקסט לבן
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.7)", // הצללה עדינה
};

export const headerStyle = {
    color: "rgba(193, 154, 107, 0.79)", // כותרת בצבע חום
    textAlign: "center",
    padding: "10px",
    fontSize: "2rem",
    fontWeight: "bold",
    borderBottom: "2px solid rgba(193, 154, 107, 0.79)", // קו תחתון מודגש לחלק העליון
};

export const tableStyle = {
    width: "100%",
    marginTop: "20px",
    borderCollapse: "collapse",
    color: "#fff", // טקסט לבן בטבלה
};

export const tableHeader = {
    backgroundColor: "rgba(193, 154, 107, 0.79)", // רקע חום
    color: "#000", // טקסט שחור לכותרות
    fontSize: "1.1rem",
    fontWeight: "bold",
    padding: "15px", // הגדלת מרווח בכותרות
    textAlign: "center",
};

export const rowStyle = {
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)", // קו עדין בין השורות
    textAlign: "center",
    padding: "20px", // הגדלת מרווח בשורות
    fontSize: "1rem",
};

export const btnRemove = {
    backgroundColor: "rgba(193, 154, 107, 0.79)", // צבע חום
    color: "#000", // טקסט שחור
    border: "none",
    borderRadius: "5px",
    padding: "5px 15px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "0.9rem",
    transition: "background-color 0.3s",
};

export const btnRemoveHover = {
    backgroundColor: "#b38d6e", // גוון כהה יותר לחיצה
};

export const totalContainer = {
    textAlign: "center",
    marginTop: "20px",
    color: "#fff", // סכום בטקסט לבן
    fontSize: "1.2rem",
    fontWeight: "bold",
};

export const btnPay = {
    backgroundColor: "rgba(193, 154, 107, 0.79)", // צבע חום
    color: "#000", // טקסט שחור
    border: "none",
    borderRadius: "50px", // עיצוב עגול יותר
    padding: "10px 25px", // כפתור יותר גדול ובולט
    fontSize: "1.2rem",
    cursor: "pointer",
    transition: "transform 0.2s, background-color 0.3s",
    textDecoration: "none",
    
    
};

export const btnPayHover = {
    backgroundColor: "#b38d6e", // שינוי גוון בלחיצה
    transform: "scale(1.05)", // אפקט הגדלה קל בלחיצה
    boxShadow: "0 6px 15px rgba(193, 154, 107, 0.8)", // הצללה מודגשת יותר בלחיצה
};
//עיצוב טופב התחברות והרשמה
export const formStyle2 = {
    container: {
        backgroundColor: "#fff", // רקע בהיר ונקי
        padding: "10px 40px", // יותר רווח
        borderRadius: "10px", // רדיוס פינות קצת יותר גדול
        boxShadow: "0 12px 24px rgba(87, 81, 81, 0)", // הצללה יותר מודגשת
        maxWidth: "300px", // טופס בינוני
        margin: "50px auto", 
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
    },
    input: {
        width: "90%",
        padding: "13px",
        margin: "3px 0",
        border: "2px solid rgba(193, 154, 107, 0.79)", // גבול עדין
        borderRadius: "8px",
        fontSize: "1rem",
        backgroundColor: "#f6f6f6", // רקע עדין בשדות
        color: "#333", 
        outline: "none",
        transition: "border-color 0.3s, transform 0.3s ease-in-out", // אנימציה רכה
    },
    inputFocus: {
        borderColor: "#5d76f2", // צבע כחול דומיננטי כשיש פוקוס
        transform: "scale(1.03)", // התפשטות קלה כדי למשוך תשומת לב
    },
    button: {
        backgroundColor: "rgba(193, 154, 107, 0.79)", // כחול אלגנטי
        color: "#fff", // טקסט בהיר
        border: "none",
        borderRadius: "8px", // פינות מעוגלות
        padding: "15px 30px", 
        margin: "10px 0",
        fontSize: "1.1rem",
        fontWeight: "600", // טקסט מודגש
        cursor: "pointer",
        transition: "background-color 0.3s, transform 0.3s, box-shadow 0.3s", // אנימציה חלקה עם הצללה
    },
    buttonHover: {
        backgroundColor: "#4b63e4", // גוון כחול כהה יותר בעת hover
        transform: "scale(1.05)", // הגדלה עדינה בעת hover
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", // הצללה רכה בזמן hover
    },
    errorMessage: {
        color: "#e63946", // צבע אדום להדגשה
        fontSize: "1rem",
        fontWeight: "500",
        marginTop: "10px",
        textAlign: "center",
    },
    
};
//עיצוב דף רכישה
export const purchaseStyles = {
    wrapper: {
      backgroundColor: "#fff",
      padding: "20px 40px",
      borderRadius: "10px",
      boxShadow: "0 12px 24px rgba(87, 81, 81, 0.2)",
      maxWidth: "400px",
      margin: "50px auto",
      textAlign: "center",
      fontFamily: "'Poppins', sans-serif",
    },
    paymentSummary: {
      fontSize: "1.5rem",
      margin: "20px 0",
      color: "#333",
    },
    payButton: {
      backgroundColor: "rgba(193, 154, 107, 0.79)",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      padding: "15px 30px",
      fontSize: "1.1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "background-color 0.3s, transform 0.3s, box-shadow 0.3s",
    },
    payButtonHover: {
      backgroundColor: "#a67c52",
      transform: "scale(1.05)",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    },
  };