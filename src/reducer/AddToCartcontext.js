export default function reducer(state, action) {
  switch (action.type) {
    case "addtocart":
      let { singleProduct, id, color, count } = action.payload;

      let cartProduct = {
        id: id + color,
        name: singleProduct.name,
        count,
        color,
        image: singleProduct.image[0].url,
        price: singleProduct.price,
        max: singleProduct.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    case "delete":
      let removeitem = state.cart.filter((i) => i.id !== action.payload);
      return {
        ...state,
        cart: removeitem,
      };

    case "clear":
      return {
        ...state,
        cart: [],
      };

    case "deccount":
      let presentDec = state.cart.map((i) => {
        if (i.id === action.payload) {
          let newCount = i.count - 1;
          if (i.count <= 1) {
            newCount = 1;
          }

          return {
            ...i,
            count: newCount,
          };
        } else {
          return i;
        }
      });
      return {
        ...state,
        cart: presentDec,
      };
    case "inccount":
      let presentInc = state.cart.map((i) => {
        if (i.id === action.payload) {
          let newCount = i.count + 1;

          if (newCount >= i.max) {
            newCount = i.max;
          }
          return {
            ...i,
            count: newCount,
          };
        } else {
          return i;
        }
      });
      return {
        ...state,
        cart: presentInc,
      };

    case "totalamount":
      
  let total_price = state.cart.reduce((initialVal, curElem) => {
      let { price, amount } = curElem;

      initialVal = initialVal + price * amount;

      return initialVal;
    }, 0);

  return {
     ...state,
    totalamout: total_price,
    };
  
   
    case "carttotalitem":
      let rish = action.payload;

      return {
        ...state,
        totalitem: rish.length,
      };
    default: {
      return state;
    }
  }
}
