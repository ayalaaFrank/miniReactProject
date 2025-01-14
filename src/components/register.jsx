
import { useState, useContext } from 'react';
import MyContext from './context/context';
import { useNavigate } from 'react-router-dom';
import {  formStyle2} from '../styles';  // ייבוא העיצוב

function Register() {
    const { register } = useContext(MyContext);
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            name,
            email,
            password,
            role
        };

        register(newUser);
        navigate('/login');
    };

    return (
        <div style={formStyle2.container}>
            <h1 style={{ color: "rgba(103, 90, 90, 0.63)" }}>הרשמה</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label style={{ color: '#fff' }}>שם:</label>
                    <input
                        type="text"
                        placeholder="שם מלא"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={formStyle2.input}
                    />
                </div>
                <div>
                    <label style={{ color: '#fff' }}>אימייל:</label>
                    <input
                        type="email"
                        placeholder="אימייל"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={formStyle2.input}
                    />
                </div>
                <div>
                    <label style={{ color: '#fff' }}>סיסמא:</label>
                    <input
                        type="password"
                        placeholder="סיסמא"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={formStyle2.input}
                    />
                </div>
                <div>
                    <label style={{ color: '#fff' }}>תפקיד:</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)} style={formStyle2.input}>
                        <option value="user">משתמש</option>
                        <option value="admin">מנהל</option>
                    </select>
                </div>
                <button type="submit" style={formStyle2.button}>הירשם</button>
            </form>
        </div>
    );
}

export default Register;
