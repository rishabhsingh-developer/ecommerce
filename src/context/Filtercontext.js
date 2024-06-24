import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./Productcontext";
import { FilterReducer as reducer } from "../reducer/FilterReducer";

const FiltreContext = createContext();

const initialState = {
  allproduct: [],
  filterproduct: [],
  view: true,
  filters: {
    text: "",
  },
};

function FilterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { product } = useProductContext();

  function getGrid() {
    dispatch({ type: "grid" });
  }

  function filterSearch(event) {
    let name = event.target.name;
    let value = event.target.value;
    console.log(name, value);

    return dispatch({ type: "filter", payload: { name, value } });
  }
  useEffect(
    function () {
      dispatch({ type: "updatefilter" });
    },
    [state.filters]
  );

  useEffect(
    function () {
      dispatch({ type: "allproduct", payload: product });
    },
    [product]
  );

  return (
    <FiltreContext.Provider
      value={{ ...state, getGrid, dispatch, filterSearch }}
    >
      {children}
    </FiltreContext.Provider>
  );
}
function useFilter() {
  return useContext(FiltreContext);
}
export { useFilter, FilterProvider };
