import { useParams } from "react-router-dom"; 
import Swal from 'sweetalert2'; // ייבוא SweetAlert2
import { purchaseStyles } from "../styles";

function Purchase() {
    const { total } = useParams(); // שליפת סכום הקנייה מהנתיב

    const handlePayment = () => {
        // הצגת דיאלוג עם SweetAlert2
        Swal.fire({
            title: 'האם אתה בטוח?',
            text: `סך הכל לתשלום: ${total}`,
            icon: 'warning',
            showCancelButton: true,  // הצגת כפתור cancel
            confirmButtonText: 'כן, אני בטוח',
            cancelButtonText: 'לא, ביטול'
        }).then((result) => {
            if (result.isConfirmed) {
                // כאשר המשתמש אישר
                Swal.fire(
                    'תשלום בוצע!',
                    'ההזמנה שלך הושלמה בהצלחה.',
                    'success'
                );
                // הוסף כאן את הקוד להשלמת התשלום
            } else {
                // כאשר המשתמש ביטל
                Swal.fire(
                    'בוטל',
                    'ההזמנה שלך בוטלה.',
                    'error'
                );
            }
        });
    };

    return (
        <div style={purchaseStyles.wrapper}>
      <h1 style={{ color: "#333" }}>רכישה</h1>
      <p style={purchaseStyles.paymentSummary}>
        סך הכל לתשלום: <strong>{total} ₪</strong>
      </p>
      <button
        style={purchaseStyles.payButton}
        onMouseOver={(e) =>
          Object.assign(e.target.style, purchaseStyles.payButtonHover)
        }
        onMouseOut={(e) => Object.assign(e.target.style, purchaseStyles.payButton)}
        onClick={handlePayment}
      >
        לתשלום לחץ כאן
      </button>
    </div>

    );
}

export default Purchase;
