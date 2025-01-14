

import { dishListStyle } from "../styles";
import DishCard from "./DishCard";

function DishList({ dishes, deleteDish }) {
  return (
    <>
      <h1 style={{ color: "#fff" }}>המנות שלנו</h1>
      <div style={dishListStyle}>
        {dishes.map((r) => (
          <DishCard key={r.id} recipe={r} deleteDish={deleteDish} />
        ))}
      </div>
    </>
  );
}

export default DishList;
