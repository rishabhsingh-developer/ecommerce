import "./navbar.css";
import logo from "./logo.png";
import { CiShoppingCart } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { useCartContext } from "../context/AddToCartcontext";
export default function Navbar() {
  const [showIcon, setShowIcon] = useState(true);
  const { totalitem } = useCartContext();
  console.log(totalitem);
  return (
    <nav>
      <div id="logo">
        <NavLink to="/" id="img">
          <img src={logo} alt="img" />
        </NavLink>
      </div>

      <ul className={showIcon ? "navbar active" : "navbar"}>
        <li>
          <NavLink to="/" id="one" onClick={() => setShowIcon(!showIcon)}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" id="one" onClick={() => setShowIcon(!showIcon)}>
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/product"
            id="one"
            onClick={() => setShowIcon(!showIcon)}
          >
            PRODUCT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            id="one"
            onClick={() => setShowIcon(!showIcon)}
          >
            CONTACT
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" id="one" onClick={() => setShowIcon(!showIcon)}>
            <CiShoppingCart className="cart-icon" />
            <span className="cart-count">{totalitem}</span>
          </NavLink>
        </li>
      </ul>

      <div className="menu" onClick={() => setShowIcon(!showIcon)}>
        {showIcon ? (
          <IoIosMenu className="menu-icon" />
        ) : (
          <RxCross1 className="menu-cross menu-icon" />
        )}
      </div>
    </nav>
  );
}
