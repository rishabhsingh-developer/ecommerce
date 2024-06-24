import { NavLink } from "react-router-dom";
import "./App.css";
export default function Error() {
  return (
    <div className="error">
      <h1>404</h1>
      <NavLink to="/">
        <button>go to home page</button>
      </NavLink>
    </div>
  );
}
