import './App.css';
import { navStyle } from './styles';
import { BrowserRouter, Link } from 'react-router-dom';
import { linkStyle } from './styles';
import { useState } from 'react';
import { Routing } from './components/Routing';
import { MyProvider } from './components/context/context';
import { CreateStore } from './components/context/store';

function App() {

  const [dishes,setDishes] = useState([
    { id: 1, name: "בקר",details:"נתח עסיסי של בקר משובח, מבושל לשלמות ומתובל בתערובת תבלינים סודית שמעניקה לו טעם בלתי נשכח. המנה מוגשת עם רוטב יין אדום עשיר ולצידה תוספת של ירקות שורש קלויים בתנור. אידיאלי לאוהבי בשר אמיתי." ,price:"159", img: "meat.jpg" },
    { id: 2, name: "פוקצה",details:"פוקצ'ה טרייה וריחנית שנאפית במקום עם שכבת קריספיות מושלמת מבחוץ ורכות עננית מבפנים. הפוקצ'ה מעוטרת בשמן זית משובח, עשבי תיבול טריים, וזילוף עדין של מלח גס. מושלם לנשנוש או כתוספת לכל מנה.",price:"39",  img: "p2.jpg" },
    { id: 3, name: "סלט חסה",details:"סלט רענן ומלא חיים עם חסה טרייה ופריכה, עגבניות שרי מתוקות, מלפפונים פריכים וקרוטונים זהובים שנאפים במקום. המנה מתובלת ברוטב ויניגרט עדין ומפנק, ותוספת של גרעיני חמניה קלויים מעניקה לה טוויסט מפתיע.",price:"58",  img: "salet.jpg" },
    { id: 4, name: "בקר",details:"נתח עסיסי של בקר משובח, מבושל לשלמות ומתובל בתערובת תבלינים סודית שמעניקה לו טעם בלתי נשכח. המנה מוגשת עם רוטב יין אדום עשיר ולצידה תוספת של ירקות שורש קלויים בתנור. אידיאלי לאוהבי בשר אמיתי." ,price:"159", img: "meat2.jpg" },
    { id: 5, name: "פוקצה",details:"פוקצ'ה טרייה וריחנית שנאפית במקום עם שכבת קריספיות מושלמת מבחוץ ורכות עננית מבפנים. הפוקצ'ה מעוטרת בשמן זית משובח, עשבי תיבול טריים, וזילוף עדין של מלח גס. מושלם לנשנוש או כתוספת לכל מנה.",price:"39",  img: "pukatsa.jpg" },
    { id: 6, name: "סלט חסה",details:"סלט רענן ומלא חיים עם חסה טרייה ופריכה, עגבניות שרי מתוקות, מלפפונים פריכים וקרוטונים זהובים שנאפים במקום. המנה מתובלת ברוטב ויניגרט עדין ומפנק, ותוספת של גרעיני חמניה קלויים מעניקה לה טוויסט מפתיע.",price:"58",  img: "salat2.webp" }
]);

  const store = CreateStore();

  const { currentUser, logout } = store; // משתמשים בפונקציות ובסטייט מתוך הסטור

  const [cart, setCart] = useState([]);
  
  const [total, setTotal] = useState(0);

  const deleteDish = (productId) => {
    setDishes(dishes.filter((item) => item.id !== productId));
  };

  const removeDish = (productId) => {
    const existingDish = cart.find((item) => item.id === productId);
    if (existingDish) {
      if (existingDish.quantity > 1) {
        setCart(cart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ));
      } else {
        setCart(cart.filter((item) => item.id !== productId));
      }
    }
  };

  const addDish = (product) => {
    const existingDish = cart.find((item) => item.id === product.id);
    if (existingDish) {
      setCart(cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <MyProvider value={store}>
      <BrowserRouter>
        <header>
          <nav style={navStyle}>
            <Link style={linkStyle} to="home">
              <img src={"/images/logoW.png"} style={{ width: '85px', height: '40px', cursor: 'pointer' }} />
            </Link>
            <Link style={linkStyle} to="home">דף הבית</Link>
            <Link style={linkStyle} to="about">אודות</Link>
            <Link style={linkStyle} to="dishList">המנות שלנו</Link>
            {currentUser ? (<><div style={linkStyle} onClick={logout}> שלום {currentUser.name} (ליציאה) </div></>) : (
            <>
                <Link style={linkStyle} to="login">כניסה</Link>
                <Link style={linkStyle} to="register">הרשמה</Link>
              </>
            )}
           {currentUser?.role=="manager" && <Link style={linkStyle} to="/dishList">ניהול תפריט</Link>}
           {cart.length>0  &&  <Link style={linkStyle} to="cart">
              <img src={"/images/wagon.png"} style={{ width: '35px', height: '35px' }} alt="עגלה" />
            </Link>}
          </nav>
        </header>

        <main>
          <Routing
        cart={cart}
        deleteDish={deleteDish}
        dishes={dishes}
        addDish={addDish}
        removeDish={removeDish}
        setTotal={setTotal}
        total={total}
          />
        </main>
      </BrowserRouter>
    </MyProvider>
  );
}

export default App;
