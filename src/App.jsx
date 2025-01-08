import './App.css';
import { navStyle } from './styles';
import { BrowserRouter, Link } from 'react-router-dom';
import { linkStyle } from './styles';
import { useState } from 'react';
import { Routing } from './components/Routing';
import { MyProvider } from './components/context/context';
import { CreateStore } from './components/context/store';

function App() {
  const store = CreateStore();

  const { currentUser, logout } = store; // משתמשים בפונקציות ובסטייט מתוך הסטור

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

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
            {currentUser ? (<><div style={linkStyle} onClick={logout}> יציאה ({currentUser.name}) </div></>) : (
            <>
                <Link style={linkStyle} to="login">כניסה</Link>
                <Link style={linkStyle} to="register">הרשמה</Link>
              </>
            )}
           {currentUser?.role=="manager" && <Link style={linkStyle} to="/manager">ניהול תפריט</Link>}
            <Link style={linkStyle} to="cart">
              <img src={"/images/wagon.png"} style={{ width: '35px', height: '35px' }} alt="עגלה" />
            </Link>
          </nav>
        </header>

        <main>
          <Routing
            cart={cart}
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
