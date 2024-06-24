import { createContext, useContext, useEffect, useReducer } from "react";

import reducer from "../reducer/AddToCartcontext";
const CartContext = createContext();
function getLocalCart() {
  let localCart = localStorage.getItem("thapacart");
  if (localCart === []) {
    return [];
  } else {
    return JSON.parse(localCart);
  }
}
const initialValue = {
  cart: getLocalCart(),
  totalamout: 0,
  totalitem: 0,
};

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValue);

  function addToCart(singleProduct, id, color, count) {
    return dispatch({
      type: "addtocart",
      payload: { singleProduct, id, color, count },
    });
  }

  function deleteItem(id) {
    dispatch({ type: "delete", payload: id });
  }

  function getClick() {
    dispatch({ type: "clear" });
  }
  function getDec(id) {
    dispatch({ type: "deccount", payload: id });
  }

  function getInc(id) {
    dispatch({ type: "inccount", payload: id });
  }
  useEffect(
    function () {
      localStorage.setItem("thapacart", JSON.stringify(state.cart));
      dispatch({ type: "totalamount", payload: state.cart });
      dispatch({ type: "carttotalitem", payload: state.cart });
    },
    [state.cart]
  );

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, deleteItem, getClick, getInc, getDec }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCartContext() {
  return useContext(CartContext);
}
export { ContextProvider, useCartContext };
