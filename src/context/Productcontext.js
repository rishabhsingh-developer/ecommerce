import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/ProductReducer";
const AppContext = createContext();
const initialState = {
  isLoading: false,
  product: [],
  isError: false,
  featureProduct: [],
  isSingleLoading: false,
  singleProduct: {},
};

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    async function getData() {
      try {
        dispatch({ type: "loading", payload: true });
        const res = await fetch("https://api.pujakaitem.com/api/products");
        const data = await res.json();
        dispatch({ type: "data", payload: data });
      } catch {
        alert("api is not working ");
        console.log("dkfjdkfj");
        dispatch({ type: "error", payload: true });
      } finally {
        dispatch({ type: "loading", payload: false });
      }
    }
    getData();
  }, []);

  async function singlegetData(id) {
    try {
      dispatch({ type: "singleloading", payload: true });
      const res = await fetch(
        `https://api.pujakaitem.com/api/products?id=${id}`
      );
      const data = await res.json();

      dispatch({ type: "s", payload: data });
      console.log(data);
    } catch {
      alert("sigle product api is not working");
    } finally {
      dispatch({ type: "issingleloading", payload: false });
    }
  }
  return (
    <AppContext.Provider value={{ ...state, singlegetData }}>
      {children}
    </AppContext.Provider>
  );
}
function useProductContext() {
  return useContext(AppContext);
}
export { AppContext, AppProvider, useProductContext };
