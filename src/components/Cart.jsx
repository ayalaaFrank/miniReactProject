import { Link } from "react-router-dom";
import { btnPay ,totalContainer ,btnRemove , rowStyle , tableHeader , tableStyle,headerStyle,cartContainer } from "../styles";

function Cart({ cart, removeDish , addDish }) {
  
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div style={cartContainer}>
      <h1 style={headerStyle}>עגלה</h1>

      <table style={tableStyle}>
        <thead>
          <tr style={tableHeader}>
            <th>שם מנה</th>
            <th>מחיר</th>
            <th>כמות</th>
            <th>סה"כ</th>
            <th>הסר/הוסף</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((c) => (
            <tr key={c.id} style={rowStyle}>
              <td>{c.name}</td>
              <td>{c.price} ש"ח</td>
              <td>{c.quantity}</td>
              <td>{c.price * c.quantity} ש"ח</td>
              <td>
                <button style={btnRemove} onClick={() => removeDish(c.id)}>
                  -
                </button>
                <button style={btnRemove} onClick={() => addDish(c)}>
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={totalContainer}>
        <h3 style={tableStyle}>סכום כולל: {calculateTotal()} ש"ח</h3>
        <Link style={btnPay} to={`/purchase/${calculateTotal()}`}>
          לתשלום
        </Link>
      </div>
    </div>
  );
}

export default Cart;

