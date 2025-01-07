import { homeStyle , homeImg} from '../styles';
import { Link } from 'react-router-dom';


function Home() {
    return <>
        <div style={homeImg}> </div>
        <div style={homeStyle.container}>
        <div style={homeStyle.nevigate}>
            <img src={"/images/nevigateMenu.png"} style={homeStyle.img} />
           <Link  style={homeStyle.link} to="/dishList" >תפריט</Link>
         </div>
         <div style={homeStyle.nevigate}>
            <img src={"/images/nevigateWines.png"} style={homeStyle.img} />
           <Link style={homeStyle.link} to="/dishList" >תפריט יינות</Link>
         </div>   <div style={homeStyle.nevigate}>
            <img src={"/images/nevigateMenuEvent.png"} style={homeStyle.img} />
           <Link style={homeStyle.link} to="/dishList" >תפריט אירועים</Link>
         </div>
        </div>
        <div><img src="/images/EventProposal.png" alt="" style={{width:"100%" ,  paddingBottom:"50px",}}/></div>
    </>
}

export default Home;