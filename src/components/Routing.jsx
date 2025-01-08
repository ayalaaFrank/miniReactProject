import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import DishList from './DishList';
import DishDetails from './DishDetails';
import Cart from './Cart';
import Purchase from './Purchase';
import Login from './Login';
import Register from './register';


export const Routing = ({ cart, addDish, removeDish , total,setTotal}) => {
    return <>
        <Routes >
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dishList" element={<DishList />} />
            <Route path="/dishDetails/:id/:name/:details/:price/:img" element={<DishDetails addDish={addDish} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart cart={cart} removeDish={removeDish} addDish={addDish} setTotal={setTotal} />} />
            <Route path="/purchase/:total" element={<Purchase />} />
            <Route path="*" element={<Home />} />
        </Routes>
    </>

}
