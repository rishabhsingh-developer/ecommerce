import hero from "./hero.jpg";
import "./herosection.css";
export default function HeroSection({ name }) {
  return (
    <div className="herosection">
      <div className="herodetail">
        <p>welcome to</p>
        <h1>{name}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          saepe iusto sit quod! Explicabo optio qui assumenda quaerat, tempore
          ipsam itaque sequi veniam sit impedit cum laborum eos dolorem
          pariatur?
        </p>
        <button>Shop Now</button>
      </div>
      <div className="img">
        <img src={hero} alt="hero" id="img" />
      </div>
    </div>
  );
}
