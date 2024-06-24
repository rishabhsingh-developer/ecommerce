import { DetailProduct } from "./FeatureProduct";
import "./gridview.css";
export default function GridView({ allproduct }) {
  return (
    <div className="gridview">
      {allproduct.map((i) => {
        return (
          <DetailProduct
            name={i.name}
            image={i.image}
            price={i.price}
            category={i.category}
            id={i.id}
          />
        );
      })}
    </div>
  );
}
