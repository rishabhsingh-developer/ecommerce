// import styled from "styled-components";
import "./Product.css";
import { useFilter } from "./context/Filtercontext";
import GridView from "./components/GridView";
import ListView from "./components/ListView";

const Products = () => {
  const {
    filterproduct,
    view,
    dispatch,
    filters: { text },
    filterSearch,
  } = useFilter();

  function List() {
    dispatch({ type: "view", payload: true });
  }
  function Grid() {
    dispatch({ type: "view", payload: false });
  }

  // function Filter(e) {
  //   let name = e.target.value;
  //   let text = e.target.value;
  //   return dispatch({});
  // }
  return (
    <div className="prodect-center">
      <div className="product">
        <div className="productnav">
          <input
            type="text"
            name="text"
            value={text}
            placeholder="search..."
            onChange={filterSearch}
          />
          <div>
            <button onClick={List} id="grid">
              grid
            </button>
            <button onClick={Grid} id="list">
              list
            </button>
          </div>
        </div>
        <div className="cat-view">
          <div className="view">
            {view ? (
              <GridView allproduct={filterproduct} />
            ) : (
              <ListView allproduct={filterproduct} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// const Wrapper = styled.section`
//   .grid-filter-column {
//     grid-template-columns: 0.2fr 1fr;
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .grid-filter-column {
//       grid-template-columns: 1fr;
//     }
//   }
// `;

export default Products;
