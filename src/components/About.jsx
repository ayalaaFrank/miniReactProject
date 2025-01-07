import { pStyle, formStyle } from "../styles";
import { aboutDiv } from "../styles";

function About() {
    return <>
        <h1 style={{ color: '#fff' }}>About</h1>
        <div style={aboutDiv}>
            <p style={pStyle}> לחם בשר ירושלים
                מסעדת בשרים כשרה למהדרין <br />
                המחברת בין עולם הבשרים לאפייה של לחמים<br />
                ממגוון עולמות בשילוב של מנות שונות. <br />
                המסעדה מציעה תפריט איכותי ומגוון ברמת מחירים ממוצעת. <br />
                לחם בשר משלבת בין ישן לחדש במתחם התחנה <br />
                אזורי הישבה במסעדה מגוונים ובעלי סגנונות שונים <br />
                ספסלים, שולחנות במגוון אקטלקטי. <br />
                ניתן לשבת בקבוצות קטנות <br />
                שולחנות משותפים באזור הבר או באזורי ישיבה אינטימיים. <br />
                קהל היעד מגוון, ממשפחות שמבלות בירושלים <br />
                ועד צעירים שיוצאים לבלות במתחם בשעות הערב <br />
                הכשרות בהשגחת הרב מחפוד</p>

            <img src="./images/DP-03150.jpg" alt="" style={{ width: "600px", height: "400px" }} />

        </div>
        <h1 style={{ color: "white" }}>צור קשר</h1>
        <p style={{ color: "white", fontSize: "17px" }}>על מנת ליצור עמנו קשר דרך טופס זה, אנא מלא את הפרטים: שם, אימייל, נושא ותוכן הפנייה.
            <br /> לאחר מכן, לחץ על הכפתור "שלח" ואנחנו נחזור אלייך בהקדם.</p>
        <div style={formStyle.container}>
            <form >
                <input
                    type="text"
                    placeholder="שם מלא"
                    style={formStyle.input} />
                <input
                    type="email"
                    placeholder="אימייל"
                    style={formStyle.input}
                />
                <input
                    type="tel"
                    placeholder="טלפון"
                    style={formStyle.input}
                />
                <input
                    type="text"
                    placeholder="איך נוכל לעזור לך?"
                    style={formStyle.input}
                />
                <button type="sumbit" style={formStyle.button}>שלח
                </button>
            </form>
        </div>
    </>
}

export default About;