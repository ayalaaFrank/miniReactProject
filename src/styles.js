// עיצוב header
export const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    // padding: "10px 10px",
    paddingTop: "18px",
    position: "sticky",
    top: "0",
    zIndex: 10,
    backgroundColor: "transparent", // ��� ���
    fontSize: "1.3rem",
    // background: "rgba(193, 154, 107, 0.79)",
    // background: "black",

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
    // fontWeight: "bold"
    marginTop: "10px",
};
// עיצוב הפסקה באודות
export const pStyle = {
    fontSize: "1.1rem",
    color: "#fff",
    textAlign: "right",
    marginRight: "30px",
    // paddingTop: "10px",
};
// עיצוב עמוד כללי - אודות
export const aboutDiv = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    fontSize: "1rem",
    background: "rgba(193, 154, 107, 0.79)",
    marginLeft: "100px",
    marginRight: "100px",
    borderRadius: "10px",
  
};
export const formStyle = {
    container: {
        backgroundColor: "#2c2c2c",
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
        maxWidth: "700px",
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


export const dishListStyle = {
    display: "flex",
    flexDirection: "row", // 
    justifyContent: "space-around",
    alignItems: "center",

}
//עיצוב כרטיס המנה
export const cardContainerStyle = {
    alignItems: "center",
    padding: "45px",
    width: "20rem",
    // height: "20rem",
    boxShadow: "0px 0px 10px gray",
    color: "#fff",
    borderRadius: "10px",
    margin: "10px",
    //background: "rgba(193, 154, 107, 0.79)",
};
export const cardImgStyle = {
    width: "20rem",
    borderRadius: "10px 10px 0 0",
    
};

export const cartPopupStyle = {
    position: "fixed",
    top: "50px",
    left: "0",
    width: "300px",
    // background: "white",
    border: "1px solid #ddd",
    boxShadow: "0px 4px 6px rgba(235, 211, 211, 0.1)",
    padding: "20px",
    zIndex: 1000,
    borderRadius: "8px",
    color: "white",

};

export const closeButtonStyle = {
    background: "white",
    color: "black",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    float: "right",
    marginTop: "-10px",
    marginRight: "-10px",
    borderRadius: "50%",
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
        margin: "25px auto",
        width: "40%",
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
    button: {
        backgroundColor: "#fff",
        color: "black",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "1rem",
    },
};

export const cartContainer = {
    padding: "20px",
    backgroundColor: "#1a1a1a",
    borderRadius: "15px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
    maxWidth: "800px",
    margin: "30px auto",
  };
  
  export const headerStyle = {
    color: "#fff",
    backgroundColor: "rgba(193, 154, 107, 0.79)",
    textAlign: "center",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "20px",
    fontSize: "1.8rem",
  };
  
  export const tableStyle = {
    width: "100%",
    margin: "0 auto",
    borderCollapse: "collapse",
    backgroundColor: "#2c2c2c",
    borderRadius: "10px",
    overflow: "hidden",
  };
  
  export const tableHeader = {
    backgroundColor: "rgba(193, 154, 107, 0.79)",
    color: "#fff",
    fontSize: "1.2rem",
  };
  
 export const rowStyle = {
    textAlign: "center",
    color: "#fff",
    borderBottom: "1px solid #444",
  };
  
  export const btnRemove = {
    backgroundColor: "#e63946",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
  };
  
 export const totalContainer = {
    textAlign: "center",
    margin: "20px auto",
    color: "#fff",
  };
  
  export const totalStyle = {
    color: "rgba(193, 154, 107, 0.79)",
    fontSize: "1.5rem",
  };
  export const btnPay = {
    background: "white",
    width: "30%",
    height: "30px",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(235, 211, 211, 0.1)",
    fontSize: "large",
    cursor: "pointer",
}