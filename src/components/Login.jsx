
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "./context/context";
import { formStyle2,formStyle } from '../styles';  // ייבוא העיצוב

function Login() {
    const { login } = useContext(MyContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const onLogin = () => {
        const success = login(email, password);
        if (success) {
            navigate("/home");
        } else {
            alert("המשתמש אינו קיים. אתה מועבר לטופס הרשמה.");
            navigate("/register");
        }
    };

    return (
        <div style={formStyle2.container}>
            <h1 style={{ color: "rgba(103, 90, 90, 0.63)" }}>התחברות</h1>
            <input
                type="email"
                name="אימייל"
                placeholder="אימייל"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={formStyle2.input}
            />
            <input
                type="password"
                name="סיסמא"
                placeholder="סיסמא"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={formStyle2.input}
            />
            <button onClick={onLogin} style={formStyle2.button}>הכנס</button>
            {error && <p style={{ color: 'red' }}>האימייל או הסיסמא שגויים</p>}
        </div>
    );
}

export default Login;

