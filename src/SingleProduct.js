// import styled from "styled-components";
import "./App.css";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useProductContext } from "./context/Productcontext";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineAttachMoney, MdOutlineSecurity } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import DynamicImage from "./components/DynamicImage";
import { IoIosCheckmark } from "react-icons/io";
import { useCartContext } from "./context/AddToCartcontext";
import FormateCurrency from "./helper/formateCurrency";
export default function SingleProduct() {
  const [color, setColor] = useState();
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const { addToCart } = useCartContext();

  const { singlegetData, singleProduct } = useProductContext();
  const {
    name,
    stars,
    stock,
    reviews,
    image,
    description,
    price,
    company,
    colors,
    category,
  } = singleProduct;

  useEffect(function () {
    singlegetData(id);
  }, []);
  console.log(image);

  function Inc() {
    if (count < stock) {
      setCount(count + 1);
    }
  }
  function Dec() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <div className="singleproduct">
      <div className="productimage">
        <DynamicImage image={image} />
      </div>
      <div className="productdetail">
        <h1>{name}</h1>
        <p>⭐{stars}</p>
        <p>{reviews} Customer review</p>
        <p>
          MRP: <del>{price + 2500}</del>
        </p>
        <p>Deal of the Day: {price}</p>
        <p>{description}</p>
        <div className="product-emoji">
          <div className="emoji1">
            <CiDeliveryTruck id="emoji-icon" />
            <p>Free delivery</p>
          </div>

          <div className="emoji2">
            <MdOutlineSecurity id="emoji-icon" />
            <p>Shipping</p>
          </div>
          <div className="emoji3">
            <MdOutlineAttachMoney id="emoji-icon" />
            <p>Money-back Guaranteed </p>
          </div>

          <div className="emoji4">
            <RiSecurePaymentLine id="emoji-icon" />
            <p>Secure Payment </p>
          </div>
        </div>
        <p>Available:{stock ? "in Stock" : "out of Stock"}</p>
        <p>{company}</p>
        <div className="color">
          {colors?.map((i) => {
            return (
              <button
                style={{ backgroundColor: i }}
                className={color === i ? "active btn-color" : "btn-color"}
                onClick={() => setColor(i)}
              >
                {color === i ? <IoIosCheckmark /> : null}
              </button>
            );
          })}
        </div>
        <div className="count">
          <button onClick={Dec}>-</button>
          <p>{count}</p>
          <button onClick={Inc}>+</button>
        </div>
        <NavLink to="/cart">
          <button onClick={() => addToCart(singleProduct, id, color, count)}>
            Add to cart
          </button>
        </NavLink>
      </div>
    </div>
  );
}

// const Wrapper = styled.section`
//   .container {
//     padding: 9rem 0;
//   }
//   .product-data {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: center;
//     gap: 2rem;

//     .product-data-warranty {
//       width: 100%;
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       border-bottom: 1px solid #ccc;
//       margin-bottom: 1rem;

//       .product-warranty-data {
//         text-align: center;

//         .warranty-icon {
//           background-color: rgba(220, 220, 220, 0.5);
//           border-radius: 50%;
//           width: 4rem;
//           height: 4rem;
//           padding: 0.6rem;
//         }
//         p {
//           font-size: 1.4rem;
//           padding-top: 0.4rem;
//         }
//       }
//     }

//     .product-data-price {
//       font-weight: bold;
//     }
//     .product-data-real-price {
//       color: ${({ theme }) => theme.colors.btn};
//     }
//     .product-data-info {
//       display: flex;
//       flex-direction: column;
//       gap: 1rem;
//       font-size: 1.8rem;

//       span {
//         font-weight: bold;
//       }
//     }

//     hr {
//       max-width: 100%;
//       width: 90%;
//       /* height: 0.2rem; */
//       border: 0.1rem solid #000;
//       color: red;
//     }
//   }

//   .product-images {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     padding: 0 2.4rem;
//   }
// `;
