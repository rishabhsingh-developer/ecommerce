import "./cart.css";
import { useCartContext } from "./context/AddToCartcontext";
import { FaRegTrashAlt } from "react-icons/fa";
import FormateCurrency from "./helper/formateCurrency";
export default function Cart() {
  const { cart } = useCartContext();

  const { getClick, totalamout } = useCartContext();

  return (
    <div className="cart">
      <div className="cartitemname">
        <div className="item">item</div>
        <div className="price">price</div>
        <div className="quantity">quantity</div>
        <div className="total">total</div>
        <div className="remove">remove</div>
      </div>

      <div className="cart-item">
        {cart.map((i) => {
          return (
            <CartItem
              id={i.id}
              image={i.image}
              color={i.color}
              price={i.price}
              count={i.count}
              name={i.name}
            />
          );
        })}
      </div>
      <div className="total-clear">
        <button onClick={getClick}>clear</button>
        <p>
          total:Rs price={totalamout}
          {}
        </p>
      </div>
    </div>
  );
}
function CartItem({ id, image, color, price, count, name }) {
  const { deleteItem, getDec, getInc } = useCartContext();
  return (
    <div className="cartitem">
      <div className="cart_product">
        <img src={image} alt={name} id="cartimg" />
        <div className="cart_detail">
          <p>{name}</p>
          <button
            style={{ backgroundColor: color }}
            className="active btn-colo"
          ></button>
        </div>
      </div>
      <div className="cart_price">
        <p>{price}</p>
      </div>
      <div className="cart_quantity">
        <button onClick={() => getDec(id)}>-</button>
        <p>{count}</p>
        <button onClick={() => getInc(id)}>+</button>
      </div>
      <div className="cart_total">{price * count}</div>
      <div className="cart_delete">
        <FaRegTrashAlt onClick={() => deleteItem(id)} />
      </div>
    </div>
  );
}
