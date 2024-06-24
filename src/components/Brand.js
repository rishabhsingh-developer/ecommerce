import "./brand.css";
import c9 from "./c9.jpg";
import c11 from "./c11.png";
export default function Brand() {
  return (
    <div id="cen">
      <div className="brand">
        <p>Trusted by 1000+ companies</p>
        <div className="image-compnies">
          <img src={c9} alt="img1" className="img1" />
          <img src={c11} alt="img1" className="img1" />
          <img src={c9} alt="img1" className="img1" />
          <img src={c11} alt="img1" className="img1" />
          <img src={c9} alt="img1" className="img1" />
          <img src={c11} alt="img1" className="img1" />
        </div>
      </div>
    </div>
  );
}
