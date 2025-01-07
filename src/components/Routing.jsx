import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import DishList from './DishList';
import Profile from './Profile';
import DishDetails from './DishDetails';
import Cart from './Cart';
import Purchase from './Purchase';



export const Routing = ({ cart, addDish, removeDish , total,setTotal}) => {
    return <>
        <Routes >
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dishList" element={<DishList />} />
            <Route path="/dishDetails/:id/:name/:details/:price/:img" element={<DishDetails addDish={addDish} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart cart={cart} removeDish={removeDish} addDish={addDish} setTotal={setTotal} />} />
            <Route path="/purchase/:total" element={<Purchase />} />
            <Route path="*" element={<Home />} />
        </Routes>
    </>

}
