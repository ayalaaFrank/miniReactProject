import { useState } from "react";
import DishCard from "./DishCard";
import { dishListStyle } from "../styles";

function DishList() {

    const [dishes,setDishes] = useState([
        { id: 1, name: "בקר",details:"נתח עסיסי של בקר משובח, מבושל לשלמות ומתובל בתערובת תבלינים סודית שמעניקה לו טעם בלתי נשכח. המנה מוגשת עם רוטב יין אדום עשיר ולצידה תוספת של ירקות שורש קלויים בתנור. אידיאלי לאוהבי בשר אמיתי." ,price:"159", img: "meat.jpg" },
        { id: 2, name: "פוקצה",details:"פוקצ'ה טרייה וריחנית שנאפית במקום עם שכבת קריספיות מושלמת מבחוץ ורכות עננית מבפנים. הפוקצ'ה מעוטרת בשמן זית משובח, עשבי תיבול טריים, וזילוף עדין של מלח גס. מושלם לנשנוש או כתוספת לכל מנה.",price:"39",  img: "p2.jpg" },
        { id: 3, name: "סלט חסה",details:"סלט רענן ומלא חיים עם חסה טרייה ופריכה, עגבניות שרי מתוקות, מלפפונים פריכים וקרוטונים זהובים שנאפים במקום. המנה מתובלת ברוטב ויניגרט עדין ומפנק, ותוספת של גרעיני חמניה קלויים מעניקה לה טוויסט מפתיע.",price:"58",  img: "salet.jpg" }
    ]);

    return <>
        <h1 style={{color:'#fff'}}>המנות שלנו</h1>
        <div style={dishListStyle}>
        {dishes.map(r=><DishCard recipe={r} />)}
        </div>

    </>
}

export default DishList;