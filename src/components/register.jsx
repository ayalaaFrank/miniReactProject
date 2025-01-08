import { useState, useContext } from 'react';
import MyContext from './context/context';
import { useNavigate } from 'react-router-dom';  // שימוש ב-useNavigate בגרסה 6

function Register() {
    const { register } = useContext(MyContext);  // לקחת את פונקציית הרישום מהקונטקסט
    const navigate = useNavigate();  // יצירת משתנה לנווט לדפים

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user'); // ברירת מחדל של "user"

    const handleSubmit = (e) => {
        e.preventDefault();

        // יצירת אובייקט משתמש חדש
        const newUser = {
            name,
            email,
            password,
            role
        };

        // קריאה לפונקציית הרישום
        register(newUser);

        // הפניה לדף הלוגין לאחר הרישום
        navigate('/login');  // הפניה ל-login לאחר הרישום
    };

    return (
        <div>
            <h1>הרשמה</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>שם:</label>
                    <input
                        type="text"
                        placeholder="שם מלא"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>אימייל:</label>
                    <input
                        type="email"
                        placeholder="אימייל"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>סיסמא:</label>
                    <input
                        type="password"
                        placeholder="סיסמא"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label>תפקיד:</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="user">משתמש</option>
                        <option value="admin">מנהל</option>
                    </select>
                </div>
                <button type="submit">הירשם</button>
            </form>
        </div>
    );
}

export default Register;