
// import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";  // הוספת useNavigate
// import MyContext from "./context/context";

// function Login() {

//     const { currentUser } = useContext(MyContext); 
//      // קבלת המשתמש הנוכחי
//     const { login } = useContext(MyContext);  // פונקציית ההתחברות
//     const navigate = useNavigate();  // יצירת משתנה לנווט לדפים

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const onLogin = () => {
//         login(email, password);
//           // קריאה לפונקציה להתחברות
//           if (currentUser) {
//             navigate("/home");  // ניתוב לדף הבית אם כבר יש משתמש מחובר
//         }
//         else{
//             navigate("/register");
//         }
//     };

//     // בדיקה אם המשתמש כבר מחובר

//     return (
//         <>
//             <h1>התחברות</h1>
//             <div>
//                 <input
//                     type="email"
//                     name="אימייל"
//                     placeholder="אימייל"
//                     onChange={e => setEmail(e.target.value)}
//                 />
//                 <input
//                     type="password"
//                     name="סיסמא"
//                     placeholder="סיסמא"
//                     onChange={e => setPassword(e.target.value)}
//                 />
//                 <button onClick={onLogin}>הכנס</button> 
//             </div>
//         </>
//     );
// }

// export default Login;

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "./context/context";

function Login() {
    const { login } = useContext(MyContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const onLogin = () => {
        const success = login(email, password);
        if (success) {
            navigate("/home"); // מעבר לדף הבית אם ההתחברות הצליחה
        } else {
            alert("המשתמש אינו קיים. אתה מועבר לטופס הרשמה.");
            navigate("/register"); // מעבר לדף ההרשמה
        }
    };

    
    return (
        <>
            <h1>התחברות</h1>
            <div>
                <input
                    type="email"
                    name="אימייל"
                    placeholder="אימייל"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="סיסמא"
                    placeholder="סיסמא"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={onLogin}>הכנס</button>
                {error && <p style={{ color: 'red' }}>האימייל או הסיסמא שגויים</p>}
            </div>
        </>
    );
}

export default Login;
