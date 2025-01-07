
import { useParams } from "react-router-dom"; // שימוש ב-useParams

function Purchase() {

    const { total } = useParams(); // שליפת סכום הקנייה מהנתיב

    return <>
        <h1 style={{color:'#fff'}}>Purchase</h1>

        <p style={{color:'#fff'}}>סך הכל לתשלום: {total}</p>

        <button >לתשלום לחץ כאן</button>
    </>
}

export default Purchase;


