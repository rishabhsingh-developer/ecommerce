import { useState } from "react";
import "./dynamic.css";
export default function DynamicImage({ image }) {
  const [img, setImg] = useState([0]);
  if (!image) return <h1>Loading...</h1>;

  return (
    <div className="dynamicimage">
      <div className="small-img">
        {image?.map((i, index) => {
          return <img src={i.url} alt="dd" onClick={() => setImg([index])} />;
        })}
      </div>
      <div className="big-img">
        {image[img].url ? (
          <img src={image[img].url} alt="big1" />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
