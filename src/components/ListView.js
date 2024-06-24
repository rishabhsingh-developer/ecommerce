import { NavLink } from "react-router-dom";
import "./listview.css";
export default function ListView({ allproduct }) {
  return (
    <div className="listview">
      {allproduct.map((i) => {
        return (
          <div className="list">
            <div className="list-img">
              <img src={i.image} alt="listimg" id="list-img" />
            </div>
            <div className="list-detail">
              <h3>{i.name}</h3>
              <p>{i.description.slice(0, 76)}</p>
              <NavLink to={`/singleproduct/${i.id}`}>
                <button>order</button>
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
}
