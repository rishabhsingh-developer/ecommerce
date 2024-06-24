export default function ProductReducer(state, action) {
  switch (action.type) {
    case "error":
      return {
        ...state,
        error: action.payload,
      };
    case "loading":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "data":
      return {
        ...state,
        product: action.payload,
        featureProduct: action.payload.filter((i) => i.featured === true),
      };
    case "s":
      return {
        ...state,
        singleProduct: action.payload,
      };

    default: {
      return state;
    }
  }
}
