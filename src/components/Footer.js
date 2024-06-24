import { NavLink } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import "./footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="start">
        <div>
          <p>Ready to get Started ?</p>
          <p>Talk to us today</p>
        </div>
        <NavLink to="/contact">
          <button>GET STARTED</button>
        </NavLink>
      </div>
      <div className="footer-detail">
        <div className="one">
          <p>Thapa Store</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            illum.
          </p>
        </div>
        <div className="one t">
          <p>Subscribe to get important update</p>
          <input
            id="input"
            type="email"
            placeholder="email"
            name="email"
            required
          />
          <input id="btn" type="submit" name="Subscribe" />
        </div>
        <div className="one">
          <p>Follow Us</p>
          <div className="logo">
            <FaDiscord className="logo1" />
            <FaInstagram className="logo1" />
            <RiYoutubeLine className="logo1" />
          </div>
        </div>
        <div className="one">
          <p>Call Us</p>
          <p>+919555603752</p>
        </div>
      </div>
      <div className="about">
        <p>@2024 ThapaTechNical All Right Reserved</p>
        <p> PRIVACY POLICY TERMS & CONDITIONS</p>
      </div>
    </div>
  );
}
