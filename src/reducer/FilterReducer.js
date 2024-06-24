export function FilterReducer(state, action) {
  switch (action.type) {
    case "allproduct":
      return {
        ...state,
        allproduct: [...action.payload],
        filterproduct: [...action.payload],
      };

    case "grid":
      return {
        ...state,
        view: true,
      };

    case "view":
      return {
        ...state,
        view: action.payload,
      };

    case "filter":
      const { name, value } = action.payload;
      console.log(name, value, "name and value");

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "updatefilter":
      let { allproduct } = state;
      let cc = [...allproduct];
      const { text } = state.filters;
      if (text) {
        cc = cc.filter((i) => {
          return i.name.toLowerCase().includes(text);
        });
      }
      console.log(text);

      return {
        ...state,
        filterproduct: cc,
      };

    default:
      return state;
  }
}
