import { NavLink } from "react-router-dom";
import { useProductContext } from "../context/Productcontext";
import "./featureproduct.css";

export default function FeatureProduct() {
  const { isLoading, featureProduct } = useProductContext();
  if (isLoading) {
    return <h1>...loading</h1>;
  }

  return (
    <div className="featureproduct">
      <div className="box">
        <h2>Our feature Services</h2>
        <div className="allproduct">
          {featureProduct.map((i) => {
            return (
              <DetailProduct
                key={i.id}
                name={i.name}
                image={i.image}
                price={i.price}
                category={i.category}
                id={i.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function DetailProduct({ name, image, price, category, id }) {
  return (
    <div className="detailproduct">
      <NavLink to={`/singleproduct/${id}`}>
        <div className="imgcap">
          <img src={image} alt={name} id="product" />
          <figcaption>{category}</figcaption>
        </div>
      </NavLink>
      <div className="productnameandprice">
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}
